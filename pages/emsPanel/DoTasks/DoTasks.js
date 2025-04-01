Component({
  properties: {
  },
  data: {
    tasks:[],
    inputcontent:null
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
    onSearchInput: function(e) {
      console.log('输入内容：', e.detail.value);
      this.setData({
        inputcontent:e.detail.value
      })
    },
    onSearch: function(e) {
      console.log('执行搜索：', e.detail.value);
    },
    onCancel: function() {
      console.log('取消搜索');
    }
  }
});
