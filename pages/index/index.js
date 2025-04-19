import {requestAndSetData} from "../../utils/util.js";
Page({
  data: {
    today_task:{
      "change_percentage": 0,
      "today_task_count": 0
    },
    ambulance:{
      "idle_ambulance_count": 0,
      "idle_percentage": 0
    },
    staff:{
      "standby_percentage": 0,
      "standby_staff_count": 0
    },
    response_time:{
      "change_percentage": 0,
      "today_avg_response_time": 0
    },

    tasks_status: {},
    taskPercent: 33, // 默认百分比
  },

  onLoad(){
    this.showUserInfo();
    this.getDatas();
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

  getDatas(){
    const flask_ip=getApp().globalData.flask_ip
    requestAndSetData(flask_ip+'/task_statistics', "today_task", this);
    requestAndSetData(flask_ip+'/ambulance_statistics', "ambulance", this);
    requestAndSetData(flask_ip+'/medical_staff_statistics', "staff", this);
    requestAndSetData(flask_ip+'/response_time_statistics', "response_time", this);
    requestAndSetData(flask_ip+'/tasks/today/status', "tasks_status", this);
  },

});