Page({
  data: {
    // 功能模块数据
    featureModules: [
      {
        title: "在线培训课程",
        description: "专业急救培训课程",
        backgroundColor: "#007aff",
        icon: "/static/onlineClass1.png"
      },
      {
        title: "急救知识库",
        description: "急救知识快速查询",
        backgroundColor: "#34c759",
        icon: "/static/onlineClass2.png"
      },
      {
        title: "资讯动态",
        description: "急救行业最新动态",
        backgroundColor: "#ff9500",
        icon: "/static/onlineClass3.png"
      },
      {
        title: "政策法规查询",
        description: "权威政策法规文件",
        backgroundColor: "#af52de",
        icon: "/static/onlineClass4.png"
      }
    ],
    // 推荐课程数据
    recommendedCourses: [
      {
        title: "CPR心肺复苏基础课程",
        duration: "2小时",
        level: "入门级",
        progress: "60%",
        image: "/static/recommend1.png"
      },
      {
        title: "创伤救护实操技能",
        duration: "3小时",
        level: "进阶级",
        progress: "30%",
        image: "/static/recommend2.png"
      },
      {
        title: "急救应急预案培训",
        duration: "1.5小时",
        level: "高级",
        progress: "0",
        image: "/static/recommend3.png"
      }
    ],
    // 最新资讯数据
    latestNews: [
      {
        title: "本市开展急救知识进社区活动",
        date: "2024-01-20",
        views: "2,356阅读",
        image: "/static/news1.png"
      },
      {
        title: "新版院前急救规范正式发布",
        date: "2024-01-19",
        views: "1,892阅读",
        image: "/static/news2.png"
      },
      {
        title: "智慧急救系统全面升级",
        date: "2024-01-18",
        views: "3,421阅读",
        image: "/static/news3.png"
      }
    ]
  },
  handleModuleTap(e) {
    const { index } = e.currentTarget.dataset;
    const moduleTypes = ['course', 'knowledge', 'news', 'policy'];
    wx.navigateTo({
      url: `/pages/emergencyClass/contentTemplate/contentTemplate?type=${moduleTypes[index]}`
    });
  },

  handleViewAllCourses() {
    wx.navigateTo({
      url: '/pages/emergencyClass/recommendClass/recommendClass'
    });
  },
  handleNewsTap() {
    wx.navigateTo({
      url: "/pages/emergencyClass/newsPage/newsPage"
    });
  }
});