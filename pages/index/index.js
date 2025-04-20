import {requestAndSetData} from "../../utils/util.js";
Page({
  data: {
    today_task:{
      "change_percentage": 0,
      "today_task_count": 0
    },
    ambulance:{
      "idle_percentage": 0,
      "idle_ambulance_count": 0
    },
    staff:{
      "standby_percentage": 0,
      "standby_staff_count": 0
    },
    response_time:{
      "change_percentage": 0,
      "today_avg_response_time": 0
    },
    tasks_status: {
      "pending":0,
      "processing":0,
      "completed":0
    },
    taskPercent: 33, // 默认百分比
  },

  onLoad(){
    this.showUserInfo();
    this.getDatas(()=>{
      this.calculateTaskPercent();
    });
  },

  
  showUserInfo(){
    wx.getStorage({
      key:"access_token",
      success:(res)=>{
        if(res.data){
          wx.showToast({title: "登陆成功！",icon:"success"}); 
        }else{
          wx.showToast({title: "游客登录！",icon:"success"});
        }
      },fail:()=>{
        wx.showToast({title: "游客登录！",icon:"success"});
      }
    })   
  },

  getDatas(callBack){
    const flask_ip=getApp().globalData.flask_ip;
    Promise.all([
      requestAndSetData(flask_ip+'/task_statistics', "today_task", this),
      requestAndSetData(flask_ip+'/ambulance_statistics', "ambulance", this),
      requestAndSetData(flask_ip+'/medical_staff_statistics', "staff", this),
      requestAndSetData(flask_ip+'/response_time_statistics', "response_time", this),
      requestAndSetData(flask_ip+'/tasks/today/status', "tasks_status", this)
    ]).then(res_all=>{
      callBack();
    })
  },

  calculateTaskPercent() {
    const { processing, pending } = this.data.tasks_status;
    const { idle_ambulance_count } = this.data.ambulance;
    const { standby_staff_count } = this.data.staff;
    // 计算繁忙度
    const totalTasks = processing + pending;
    const totalResources = idle_ambulance_count + standby_staff_count;
    // 繁忙度公式： (进行中任务 + 待处理任务) / (空闲车辆 + 在岗医护人员 + 进行中任务 + 待处理任务)
    const busyness = totalTasks / (totalResources + totalTasks);
    this.setData({
      taskPercent: Math.round(busyness * 100)
    });
  }
});