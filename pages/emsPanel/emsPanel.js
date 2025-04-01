Page({
  data: {
    TabCur:0,
    selector:["进行调度","调度记录","数据分析"]
  },

  onLoad(){
    wx.request({
      url: getApp().globalData.flask_ip+'/tasks', // 请求的后端 URL
      method: 'GET', 
      success: function(res) {
        wx.setStorage('tasks', res.data);
       console.log(res.data);
      },
      fail: function(error) {
        console.error(error);
      },
      complete: function() {
      }
    });
  },
  tabSelect:function(e) {
    let index=e.currentTarget.dataset.index;
    console.log("跳转:",index,this.data.selector[index]);
    this.setData({TabCur:index});
  }
});