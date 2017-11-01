/*
  - 可以通过 this.route 获取当前页面路径
  - 非页面初始化数据，在页面加载时不会自动生效
  - 使用 this.setData 将数据从逻辑层发送到视图层（异步，callback 处理），同时改变对应的 this.data 的值（同步）
  - 直接修改 this.data 而不调用 this.setData 是无法改变页面的状态的，还会造成数据不一致
  - key 可以非常灵活，以数据路径的形式给出，如 array[2].message，a.b.c.d，并且不需要在 this.data 中预先定义
  - 在 JavaScript 文件中声明的变量和函数只在该文件中有效；不同的文件中可以声明相同名字的变量和函数，不会互相影响
*/

const app = getApp()

var localVar = '本变量只在本文件有效'
var localFun = function () {
  console.log('本函数只在本文件有效')
}

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
  addNewField: function () {
    this.setData({
      'newField.text': localVar
    }, function () {console.log('新数据设置完成')})
  },
  changeField: function () {
    this.setData({
      'text': '新的你好',
      'array[0].msg': '新的系列一'
    }, function () {console.log('数据更新完成')})
  },
  // 如：其他数据
  otherData: {
    fullname: 'blalalalala'
  }
})
