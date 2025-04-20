Component({
  properties: {
  },
  data: {
    tasks: null,
    all_tasks: null,
    pages: 1,
    now_page: 1,
    pageSize: 3 ,// 默认每页显示3条
    sizeSelect:[3,5,8,10]
  },
  lifetimes: {
    attached: function() {
      wx.getStorage({
        key: 'tasks',
        success: ({ data: tasks }) => {
          const res_length = tasks.length;
          const { pageSize } = this.data;
          this.setData({
            pages: Math.ceil(res_length / pageSize),
            all_tasks: tasks,
            tasks: tasks.slice(0, pageSize)
          });
        },
        fail: (error) => {
          console.error(error);
        }
      });
    }
  },
  methods: {
    changePage(direction) {
      const { now_page, pages, all_tasks, pageSize } = this.data;
      let new_page = now_page;

      if (direction === 'prev' && now_page > 1) {
        new_page = now_page - 1;
      } else if (direction === 'next' && now_page < pages) {
        new_page = now_page + 1;
      } else {
        wx.showToast({
          title: direction === 'prev' ? '已经是第一页了' : '已经是最后一页了',
          icon: 'error'
        });
        return;
      }

      this.setData({
        tasks: all_tasks.slice(pageSize * (new_page - 1), pageSize * new_page),
        now_page: new_page
      });
    },
    prevPage() {
      this.changePage('prev');
    },
    nextPage() {
      this.changePage('next');
    },
    setPageSize({detail:value}){
      const _=Number(value.value);
      const size=this.data.sizeSelect[_];
      this.setData({
        pageSize: size,
        pages: Math.ceil(this.data.all_tasks.length / size),
        now_page: 1,
        tasks: this.data.all_tasks.slice(0, size)
      });
    }
  }
});