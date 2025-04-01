// pages/emergencyClass/Analyze120.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    tasks: [
      {
        id: 'T001',
        status: 'pending',
        statusText: '待处理',
        location: '北京市朝阳区建国路',
        description: '交通事故，需要紧急救护',
        time: '2024-01-20 10:30'
      },
      {
        id: 'T002',
        status: 'processing',
        statusText: '进行中',
        location: '北京市海淀区中关村',
        description: '老人突发心脏病，需要救护',
        time: '2024-01-20 11:00'
      },
      {
        id: 'T003',
        status: 'completed',
        statusText: '已完成',
        location: '北京市西城区西单',
        description: '工地意外，需要紧急救护',
        time: '2024-01-20 09:15'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})