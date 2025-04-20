Component({
  properties: {
  },
  data: {
    tasks:[],
    filteredTasks: [], // 筛选后的任务列表
    inputcontent:'',
    lastTime: 0, // 记录上次触发时间
  },
  attached: function() {
    var that = this;
    wx.getStorage({
      key: 'tasks',
      success: function(res) {
        that.setData({
          tasks:res.data
        });
      },
      fail: function() {
        console.error('获取存储数据失败');
      }
    });
  },
  methods: {
    //侧边栏展示与关闭
    toggleSidebar: function(e) {
      let temp = !this.data.isSidebarOpen;
      this.setData({ isSidebarOpen: temp });
    },

    // 处理搜索输入
    onSearchInput: function (e) {
      const inputValue = e.detail.value.toLowerCase(); 
      const { tasks } = this.data;

      // 根据用户输入内容匹配时间、地点、ID、描述
      const filteredTasks = tasks.filter(task => {
        return (
          task.time.toLowerCase().includes(inputValue) || 
          task.location.toLowerCase().includes(inputValue) || 
          task.id.toLowerCase().includes(inputValue) ||
          task.description.toLowerCase().includes(inputValue) 
        );
      });

      // 更新页面数据
      this.setData({
        inputcontent: inputValue,
        filteredTasks: filteredTasks,
      });
    },

    onSearch: function (e) {
      // 已经在 onSearchInput 中实现了搜索逻辑，这里简化
      console.log('执行搜索：', e.detail.value);
    },

    onCancel: function () {
      // 取消搜索，恢复显示所有 pending 任务
      this.setData({
        inputcontent: '',
        filteredTasks: this.data.tasks,
      });
    },

    onSuggestionTap: function (e) {
      console.log('点击了建议项：', e.currentTarget.dataset);
    },
  }
});
