Component({
  properties: {
  },
  data: {
    inputShowed: false,
    inputVal: '',
    isFocus: false,
    isSidebarOpen:false,
    tasks:[]
  },
  attached: function() {
    var that = this;
    wx.getStorage({
      key: 'tasks',
      success: function(res) {
        that.setData({
          tasks:res.data
        })
      },
      fail: function() {
        console.error('获取存储数据失败');
      }
    });
  },
  methods: {
    toggleSidebar: function(e) {
      let temp = !this.data.isSidebarOpen;
      this.setData({ isSidebarOpen: temp });
      console.log("展开侧边栏：", this.data.isSidebarOpen);
    },
    showInput() {
      this.setData({
        inputShowed: true,
      });
    },
    blurInput() {
      this.setData({
        isFocus: false,
      });
    },
    hideInput() {
      this.setData({
        inputVal: '',
        inputShowed: false,
      });
    },
    clearInput() {
      this.setData({
        inputVal: '',
      });
    },
    inputTyping(e) {
      this.setData({
        inputVal: e.detail.value,
        isFocus: true,
      });
    },
  }
});
