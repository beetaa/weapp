const app = getApp()

Page({
  // 页面初始数据
  data: {
    text: '你好',
    array: [{msg: '系列1'}, {msg: '系列2'}]
  },
  // 页面加载，只调用一次，可在此获得打开页面的query参数
  onLoad: function (query) {
    console.log(query)
    console.log(this.route)
  },
  // 页面初次渲染完成，只调用一次，表示页面准备好，可与视图进行交互，设置界面
  onReady: function () {

  },
  // 页面显示，每次进入页面都调用一次
  onShow: function () {

  },
  // 页面隐藏，在当前页面调用 navigateTo 或在切换底部 tab 时
  onHide: function () {

  },
  // 页面卸载，在当前页面调用 redirectTo 或 navigateBack 时
  onUnload: function () {

  },
  // 监听用户下拉更新动作，须在 app.json 中开启 enbablePullDownRefresh
  onPullDownRefresh: function () {

  },
  // 监听页面触底情形
  onReachBottom: function () {

  },
  // 用户点击右上角转发时
  // 定义了此函数，右上角才会显示“转发”菜单
  // 需要 return 一个要转发的内容，{title: '自定义转发标题', path: '页面的绝对路径'}
  onShareAppMessage: function () {
    return {
      title: '你今天的作业',
      path: ''
    }
  },
  // 监听页面滚动，单位是 px
  onPageScroll: function (e) {
    console.log('页面已滚动 ' + e.scrollTop)
  },
  // 可以添加任意函数和数据
  // 通过 this 在本页访问这些函数和数据
  // 如：事件处理函数
  viewTap: function () {
    console.log('你好')
  },
  // 如：其
  otherData: {
    fullname: 'blalalalala'
  }
})
