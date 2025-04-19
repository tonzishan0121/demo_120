Page({
  data: {
    email: null,
    password: null
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
    wx.request({
      url: getApp().globalData.flask_ip+'/login',
      method:"POST",
      data:{
        "email":this.data.email,
        "password":this.data.password
      },
      header: {
        'content-type': 'application/json'
      },
      success:(res)=>{
        if(res.statusCode==200){
          const useInfo=this.data.email;
          getApp().globalData.userInfo=useInfo;
          wx.setStorage({
            key: 'access_token',
            data: res.data.access_token
          });
          wx.redirectTo({
            url: '/pages/index/index'
          })
        }else{
          wx.showToast({
            title: '密码错误！',
            icon:"error"
          })
        }
      },
      fail:(error)=>{
        wx.showToast({
          title: '登录错误！',
          icon:"error"
        })
      }
    })
  },
  skipLogin: function() {
    // 跳过登录，直接跳转页面
    wx.navigateTo({
      url: '/pages/index/index'
    });
  }
});
