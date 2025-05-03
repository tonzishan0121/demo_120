// app.js
App({
  onLaunch() {
    // 本地存储日志
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
      }
    })
  },
  globalData: {
    userInfo: null,
    flask_ip:"http://127.0.0.1:5000"
  }
})
