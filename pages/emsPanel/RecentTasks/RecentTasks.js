Component({
  properties: {
  },
  data: {
    tasks: null,
    showing:null,
    all_tasks:null,
    pages:1,
    now_page:1
  },
  lifetimes: {
    attached: function() {
      const that = this; // 保存当前组件实例的引用
      wx.getStorage({
        key: 'tasks',
        success(res) {
          const tasks = res.data;
          const res_length = tasks.length;
          that.setData({
            pages: res_length/3,
            all_tasks: tasks,
            tasks: tasks.slice(0, 3) // 取数组的前三个元素
          });
        },
        fail(error) {
          console.error(error);
        }
      });
    }
  },
  methods: {
    prevPage(res){
      if (this.data.now_page==1) {
        wx.showToast({title:"已经是第一页了",icon:"error"});
      }else{
        const now_page=this.data.now_page-1
        const all_tasks=this.data.all_tasks
        console.log(now_page,all_tasks);
        this.setData({
          tasks:all_tasks.slice(3*(now_page-1),3*now_page),
          now_page:now_page
        })
      }
    },
    nextPage(){
      if(this.data.now_page==this.data.pages){
        wx.showToast({title:"已经是最后一页了",icon:"error"});
      }else{
        const now_page=this.data.now_page+1
        const all_tasks=this.data.all_tasks
        console.log(now_page,all_tasks);
        this.setData({
          tasks:all_tasks.slice(3*(now_page-1),3*(now_page)),
          now_page:now_page
        })
      }
    }
  }
});
