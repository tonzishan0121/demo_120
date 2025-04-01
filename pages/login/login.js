Page({
  data: {
    email: '',
    password: ''
  },
  bindEmailInput: function(e) {
    this.setData({
      email: e.detail.value
    });
  },
  bindPasswordInput: function(e) {
    this.setData({
      password: e.detail.value
    });
  },
  login: function() {
    console.log('邮箱：' + this.data.email + '，密码：' + this.data.password);
    // 登录成功后跳转页面
    wx.navigateTo({
      url: '/pages/index/index'
    });
  },
  skipLogin: function() {
    // 跳过登录，直接跳转页面
    wx.navigateTo({
      url: '/pages/index/index'
    });
  }
});
