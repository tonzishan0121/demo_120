Page({
  data: {},
  onLoad(){
    
    wx.getStorage({
      key:"access_token",
      success:()=>{
        wx.showToast({title: "登陆成功！",icon:"success"}); 
      },fail:()=>{
        wx.showToast({title: "游客登录！",icon:"success"});
      }
    });    
  }
});