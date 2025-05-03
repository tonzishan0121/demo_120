Component({
 
  properties: {
  },
  data: {
    showPanel: false,
    inputValue: '',
    bounceAnim: {},
    messages: [], 
    scrollTop: 0,
    isLoading: false
  },

  lifetimes: {
    created() {
    },

    attached() {
      this.initBounceAnimation();
    },

    detached() {
      clearTimeout(this.bounceTimer);
    }
  },

  methods: {
    // 初始化动画
    initBounceAnimation() {
      const animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      });
      this.animation = animation;
      this.playBounce();
    },
    // 动画执行逻辑
    playBounce() {
      this.animation.translateY(-20).step();
      this.setData({
        bounceAnim: this.animation.export()
      });
      
      this.bounceTimer = setTimeout(() => {  // 使用组件级timer变量
        this.animation.translateY(0).step();
        this.setData({
          bounceAnim: this.animation.export()
        });
        this.bounceTimer = setTimeout(() => this.playBounce(), 1000);
      }, 1000);
    },
    // 切换聊天面板显示状态
    toggleChatPanel() {
      this.setData({ showPanel: !this.data.showPanel });
    },
    //输入聊天内容
    inputMessage(message){
      this.setData({
        inputValue:message.detail.value
      });
    },
    // 提交问题
    submitQuestion() {
      const content = this.data.inputValue.trim();
      if (!content) return;
      
       // 添加用户消息并显示加载状态
      this.setData({
        messages: [...this.data.messages, {message: content, isUser: true}],
        isLoading: true
      });

      wx.request({
        url: `${getApp().globalData.flask_ip}/chat`,
        method: 'POST',
        data: JSON.stringify({ question: content }),
        success: (res) => {
          this.setData({ isLoading: false }); // 关闭加载状态
          if (res.statusCode === 200) {
            this.addMessage(res.data);
          }
        },
        fail: (err) => {
          this.setData({ isLoading: false }); // 失败时也关闭加载
          console.error(err);
        }
      });
      
      this.setData({ inputValue: '' });
    },

    // 添加消息到列表
    addMessage(message) {
      const newMessages = [...this.data.messages, {"message":message,"isUser":false}];
      this.setData({
        messages: newMessages,
        scrollTop: newMessages.length * 9999 // 根据消息数量设置滚动高度
      });
    },

    //清空历史消息
    clearMessage(){
      this.setData({
        messages:""
      })
    }
  }
});