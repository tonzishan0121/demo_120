import { requestAndSetData } from "../../utils/util";

Page({
  data: {
    TabCur:1,
    selector:["进行调度","调度记录","数据分析"],
    ambulance:{
      "idle_percentage": 0,
      "idle_ambulance_count": 0
    },
    sum_ambulance:0,
    staff:{
      "standby_percentage": 0,
      "standby_staff_count": 0
    },
    sum_staff:0,
    equipment:{
      'available_percentage': 0,
      'available_equipment_count': 0
    },
    sum_equipment:0
  },

  onLoad(){
    wx.getStorage({
      key:"access_token",
      success:(token)=>{
        wx.request({
          url: getApp().globalData.flask_ip+'/tasks', // 请求的后端 URL
          method: 'GET', 
          header:{
            'Authorization': 'Bearer ' + token.data
          },
          success: (res)=> {
            let tasks=this.sortTasks(res.data);
            wx.setStorage({
              key:'tasks', data:tasks
            });
          },
          fail: function(error) {
            console.error(error);
          }
        });
      }
    });
   
    
    
    const flask_ip=getApp().globalData.flask_ip;
    Promise.all([
      requestAndSetData(flask_ip+"/ambulance_statistics","ambulance",this),
      requestAndSetData(flask_ip+"/medical_staff_statistics","staff",this),
      requestAndSetData(flask_ip+"/available_equipment_statistics","equipment",this)
    ]).then(
      ()=>{
        const sum_ambulance=Math.floor(100*(this.data.ambulance.idle_ambulance_count)/(this.data.ambulance.idle_percentage));
        const sum_staff=Math.floor(100*(this.data.staff.standby_staff_count)/(this.data.staff.standby_percentage));
        const sum_equipment=Math.floor(100*(this.data.equipment.available_equipment_count)/(this.data.equipment.available_percentage));

        this.setData({
          sum_ambulance:sum_ambulance,
          sum_staff:sum_staff,
          sum_equipment:sum_equipment
        })
      }
    )
  },

  tabSelect:function(e) {
    let index=e.currentTarget.dataset.index;
    this.setData({TabCur:index});
  },

  sortTasks(tasks) {
    return tasks.sort((a, b) => {
        // 定义状态优先级
        const statusOrder = { pending: 1, processing: 2, completed: 3 };

        // 获取状态优先级
        const aStatusOrder = statusOrder[a.status];
        const bStatusOrder = statusOrder[b.status];

        // 如果状态优先级不同，按状态优先级排序
        if (aStatusOrder !== bStatusOrder) {
            return aStatusOrder - bStatusOrder;
        }

        // 如果状态相同，pending和processing按时间从早到晚排序
        if (a.status === 'pending' || a.status === 'processing') {
            return new Date(a.time) - new Date(b.time);
        }

        // 如果状态为completed，按时间从晚到早排序
        if (a.status === 'completed') {
            return new Date(b.time) - new Date(a.time);
        }

        return 0;
    });
}
});