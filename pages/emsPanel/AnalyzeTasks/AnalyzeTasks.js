// pages/emsPanel/AnalyzeTasks/AnalyzeTasks.js
Component({
  properties: {

  },
  data: {
    imageUrl1:'',
    imageUrl2:''
  },
  lifetimes:{
    attached:function(){
      const ip= getApp().globalData.flask_ip;
      this.setData({
        imageUrl1:ip+"/analyze/region-distribution",
      });
      this.setData({
        imageUrl2:ip+"/analyze/task-trend",
      })
    }
  },
  methods: {

  }
})