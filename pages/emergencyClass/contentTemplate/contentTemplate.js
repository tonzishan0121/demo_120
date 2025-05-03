Page({
  data: {
    contentType: '',
    pageTitle: '',
    contentList: [],
    course: [
        {
          "id": 1,
          "title": "心肺复苏基础课程",
          "cover": "/static/course1.jpg",
          "duration": "45分钟",
          "level": "初级"
        },
        {
          "id": 2,
          "title": "创伤急救处理",
          "cover": "/static/course2.png",
          "duration": "60分钟",
          "level": "中级"
        },
        {
          "id": 3,
          "title": "儿童急救技巧",
          "cover": "/static/course3.png",
          "duration": "50分钟",
          "level": "初级"
        },
        {
          "id": 4,
          "title": "窒息急救法",
          "cover": "/static/course4.png",
          "duration": "30分钟",
          "level": "基础"
        },
        {
          "id": 5,
          "title": "烧伤处理与急救",
          "cover": "/static/course5.png",
          "duration": "40分钟",
          "level": "中级"
        },
        {
          "id": 6,
          "title": "地震应急避险",
          "cover": "/static/course6.png",
          "duration": "55分钟",
          "level": "高级"
        },
        {
          "id": 7,
          "title": "溺水急救指南",
          "cover": "/static/course7.png",
          "duration": "45分钟",
          "level": "中级"
        },
        {
          "id": 8,
          "title": "急救包使用说明",
          "cover": "/static/course8.png",
          "duration": "25分钟",
          "level": "基础"
        },
        {
          "id": 9,
          "title": "老年人急救护理",
          "cover": "/static/course9.png",
          "duration": "60分钟",
          "level": "高级"
        },
        {
          "id": 10,
          "title": "公共场所急救应对",
          "cover": "/static/course10.png",
          "duration": "50分钟",
          "level": "中级"
        }
      ],
    knowledge: [
        {
          "category": "常见急救技能",
          "tags": ["心肺复苏", "海姆立克", "止血包扎", "搬运技巧"]
        },
        {
          "category": "外伤处理",
          "tags": ["止血方法", "伤口清洁", "纱布使用", "消毒步骤"]
        },
        {
          "category": "窒息急救",
          "tags": ["成人急救", "儿童急救", "异物处理", "预防措施"]
        },
        {
          "category": "心脏骤停处理",
          "tags": ["识别症状", "使用AED", "胸外按压", "复苏后护理"]
        },
        {
          "category": "药物过敏反应",
          "tags": ["轻度反应", "重度反应", "肾上腺素笔", "急救流程"]
        },
        {
          "category": "烧伤急救",
          "tags": ["烧伤分级", "冷水处理", "创面保护", "送医指征"]
        },
        {
          "category": "中毒急救",
          "tags": ["食物中毒", "药物中毒", "气体中毒", "急救原则"]
        },
        {
          "category": "突发病症应对",
          "tags": ["中风识别", "癫痫发作", "低血糖处理", "高热惊厥"]
        },
        {
          "category": "户外急救",
          "tags": ["蛇咬伤", "昆虫叮咬", "高原反应", "脱水处理"]
        },
        {
          "category": "急救设备使用",
          "tags": ["AED操作", "氧气袋使用", "血糖仪使用", "吸痰器操作"]
        }
      ],
    news: [
        {
          "title": "最新急救指南更新：2024年版心肺复苏标准",
          "summary": "根据国际急救联合会最新发布，2024年版心肺复苏指南对按压深度和频率提出了新要求，建议所有急救人员重新学习并掌握最新标准。",
          "date": "2024-10-15"
        },
        {
          "title": "社区急救培训活动圆满结束",
          "summary": "上周末，我市在中心广场举办了大型急救培训活动，共培训社区居民500余人，现场发放急救手册2000余份，大幅提升了市民急救意识。",
          "date": "2024-10-10"
        },
        {
          "title": "急救知识普及月活动正式启动",
          "summary": "为提高全民急救能力，我市卫健委宣布11月为急救知识普及月，将在全市中小学、商场、社区开展系列急救培训和讲座活动。",
          "date": "2024-10-20"
        },
        {
          "title": "公共场所急救设施配置标准发布",
          "summary": "市应急管理局发布公共场所急救设施配置新标准，要求商场、学校、车站等人流密集场所必须配备AED设备，并确保有专人定期维护。",
          "date": "2024-09-28"
        },
        {
          "title": "急救知识进校园取得显著成效",
          "summary": "经过一年的急救知识进校园活动，我市中小学生急救技能考核合格率达到85%，学生急救意识明显增强，校园急救事故处理能力显著提升。",
          "date": "2024-10-05"
        },
        {
          "title": "关于加强急救志愿者队伍建设的通知",
          "summary": "市民政局发布通知，要求各区加强急救志愿者队伍建设，定期组织培训和演练，建立完善的志愿者调度机制，提高突发公共事件应急响应能力。",
          "date": "2024-09-15"
        },
        {
          "title": "急救培训纳入企业安全生产考核",
          "summary": "市安监局宣布，从明年起将急救培训纳入企业安全生产考核体系，要求企业员工急救培训覆盖率不得低于80%，推动企业急救能力建设。",
          "date": "2024-10-12"
        },
        {
          "title": "急救知识竞赛活动开始报名",
          "summary": "为激发市民学习急救知识热情，我市将于下月举办首届急救知识竞赛，设置丰厚奖金，欢迎市民积极报名参与，共同提高全民急救水平。",
          "date": "2024-10-18"
        },
        {
          "title": "急救云课堂平台正式上线",
          "summary": "我市急救中心开发的急救云课堂平台今日正式上线，提供视频教程、模拟练习和在线考核功能，市民可随时随地学习急救知识，提升自救互救能力。",
          "date": "2024-10-08"
        },
        {
          "title": "急救技能纳入高中毕业考核",
          "summary": "市教育局发布通知，从明年起将急救技能纳入高中毕业考核体系，要求学生掌握心肺复苏、止血包扎等基本急救技能，推动急救教育从娃娃抓起。",
          "date": "2024-09-30"
        }
      ],
    policy: [
        {
          "title": "最新急救指南更新：2024年版心肺复苏标准",
          "summary": "根据国际急救联合会最新发布，2024年版心肺复苏指南对按压深度和频率提出了新要求，建议所有急救人员重新学习并掌握最新标准。",
          "date": "2024-10-15"
        },
        {
          "title": "社区急救培训活动圆满结束",
          "summary": "上周末，我市在中心广场举办了大型急救培训活动，共培训社区居民500余人，现场发放急救手册2000余份，大幅提升了市民急救意识。",
          "date": "2024-10-10"
        },
        {
          "title": "急救知识普及月活动正式启动",
          "summary": "为提高全民急救能力，我市卫健委宣布11月为急救知识普及月，将在全市中小学、商场、社区开展系列急救培训和讲座活动。",
          "date": "2024-10-20"
        },
        {
          "title": "公共场所急救设施配置标准发布",
          "summary": "市应急管理局发布公共场所急救设施配置新标准，要求商场、学校、车站等人流密集场所必须配备AED设备，并确保有专人定期维护。",
          "date": "2024-09-28"
        },
        {
          "title": "急救知识进校园取得显著成效",
          "summary": "经过一年的急救知识进校园活动，我市中小学生急救技能考核合格率达到85%，学生急救意识明显增强，校园急救事故处理能力显著提升。",
          "date": "2024-10-05"
        },
        {
          "title": "关于加强急救志愿者队伍建设的通知",
          "summary": "市民政局发布通知，要求各区加强急救志愿者队伍建设，定期组织培训和演练，建立完善的志愿者调度机制，提高突发公共事件应急响应能力。",
          "date": "2024-09-15"
        },
        {
          "title": "急救培训纳入企业安全生产考核",
          "summary": "市安监局宣布，从明年起将急救培训纳入企业安全生产考核体系，要求企业员工急救培训覆盖率不得低于80%，推动企业急救能力建设。",
          "date": "2024-10-12"
        },
        {
          "title": "急救知识竞赛活动开始报名",
          "summary": "为激发市民学习急救知识热情，我市将于下月举办首届急救知识竞赛，设置丰厚奖金，欢迎市民积极报名参与，共同提高全民急救水平。",
          "date": "2024-10-18"
        },
        {
          "title": "急救云课堂平台正式上线",
          "summary": "我市急救中心开发的急救云课堂平台今日正式上线，提供视频教程、模拟练习和在线考核功能，市民可随时随地学习急救知识，提升自救互救能力。",
          "date": "2024-10-08"
        },
        {
          "title": "急救技能纳入高中毕业考核",
          "summary": "市教育局发布通知，从明年起将急救技能纳入高中毕业考核体系，要求学生掌握心肺复苏、止血包扎等基本急救技能，推动急救教育从娃娃抓起。",
          "date": "2024-09-30"
        }
      ]
  },

  onLoad(options) {
    const typeMap = {
      course: { title: '培训课程', api: '/api/courses' },
      knowledge: { title: '急救知识', api: '/api/knowledge' },
      news: { title: '急救资讯', api: '/api/news' },
      policy: { title: '政策法规', api: '/api/policies' }
    };

    const { type } = options;
    const config = typeMap[type] || typeMap.course;
    
    wx.setNavigationBarTitle({ title: config.title });
    this.loadContentData(config.api);
    
    this.setData({
      contentType: type,
      pageTitle: config.title
    });
  },

  loadContentData(api) {
    wx.showLoading({ title: '加载中...' });
    wx.request({
      url: getApp().globalData.flask_ip+ api,
      success: (res) => {
        this.setData({ contentList: res.data });
      },
      fail: (err) => {
        let content = this.data.contentType;
        console.log(content);
        if(content == 'course'){
          this.setData({ contentList: this.data.course });
        }
        else if(content == 'knowledge'){
          this.setData({ contentList: this.data.knowledge });
        }
        else if(content == 'news'){
          this.setData({ contentList: this.data.news });
        }
        else if(content == 'policy'){
          this.setData({ contentList: this.data.policy });
        }
      },
      complete: wx.hideLoading
    });
  }
});