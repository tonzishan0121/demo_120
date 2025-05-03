Page({
  data: {
    videoUrl: '',
  },

  onLoad(options) {
    this.loadVideoContent(options.courseId);
  },

  loadVideoContent(courseId) {
    wx.request({
      url: getApp().globalData.flask_ip + '/api/courses',
      success: (res) => {
        this.setData({
          videoUrl: res.data.videoUrl
        });
      },
      fail: (err) => {
        this.setData({
          videoUrl:"https://player.bilibili.com/player.html?isOutside=true&aid=808435858&bvid=BV1n34y1q7HT&cid=491732198&p=1"
        });
      }
    });
  }
});