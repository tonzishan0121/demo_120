# 120急救大数据平台 微信小程序

## 项目简介
本项目是面向120急救场景的微信小程序，核心功能包括急救任务调度管理及任务数据分析、紧急课程内容的学习，旨在为急救调度人员提供高效的任务处理与数据可视化支持，同时提供游客登陆的功能，以支持免费学习急救知识，免费了解最新相关资讯。

## 核心功能
- **任务管理**  
  - 任务列表展示（支持分页切换、每页显示数量设置）  
  - 任务状态分类（待处理/进行中/已完成，不同状态样式区分）  
  - 任务搜索筛选（支持按时间、地点、编号、描述关键词搜索）  
- **数据可视化**  
  - 24小时内任务变化趋势图  
  - 各区任务分布统计图  
- **紧急课程**  
  - 提供急救相关的课程内容模板、推荐课程及新闻页面  

## 目录结构
```
demo_120/
├─ app.js               # 小程序全局逻辑
├─ app.json             # 小程序全局配置（页面、窗口样式等）
├─ app.wxss             # 小程序全局样式
├─ components/          # 公共组件
│  ├─ AiTeacher/       # AI助教组件（待完善）
│  └─ task-item/       # 任务项展示组件
├─ pages/               # 页面文件
│  ├─ login/           # 登录页
│  ├─ index/           # 首页
│  ├─ emsPanel/        # 急救任务主面板（含任务列表/处理/分析子页面）
│  └─ emergencyClass/  # 紧急课程相关页面（含内容模板/推荐课程/新闻页）
├─ static/              # 静态资源（图片等）
├─ utils/               # 工具函数
├─ project.config.json  # 开发者工具配置
└─ sitemap.json         # 小程序页面收录配置
```

## 运行环境
- 微信开发者工具（基础库版本 >= 2.32.0）
- 需在 `project.config.json` 中配置合法的小程序 `appid`

## 安装与运行
1. 克隆项目：`https://github.com/tonzishan0121/demo_120.git`
2. 打开微信开发者工具，选择「导入项目」，路径指向 `\demo_120`
3. 工具自动加载依赖后，点击「编译」即可预览

## 依赖说明
- 使用微信官方扩展库 `weui`（配置于 `app.json` 的 `useExtendedLib` 字段）和`colorui`
- 任务数据暂存于本地存储（通过 `wx.getStorage` 获取 `tasks` 数据）

## 注意事项
- 大部分功能需后端接口支持，后端项目地址：`https://github.com/tonzishan0121/flask_demo_120`
- 页面样式部分使用微信小程序原生 `wxss`，部分组件（如搜索框）引用 `weui-miniprogram` 组件库
