/*
  - App() 必须在 app.js 中注册，且不能注册多个。
  - 不要在定义于 App() 内的函数中调用 getApp() ，使用 this 就可以拿到 app 实例。
  - 不要在 onLaunch 的时候调用 getCurrentPages()，此时 page 还没有生成。
  - 通过 getApp() 获取实例之后，不要私自调用生命周期函数。
*/

App({
  // 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function (params) {
    // 可以在　onLaunch, onShow 中获取小程序打开的场景、路径、路径参数等
    // todo: 还可以获取程序打开的上一个来源appid，具体参考文档
    this.data.params = params
    // 本地存储
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    console.log(logs)
    wx.setStorageSync('logs', logs)
    // 登录
    wx.checkSession({
      success: () => {
        console.log('已存在登陆记录')
        wx.getStorage({
          key: 'session_id',
          success: res => {
            console.log('session_id: ' + res.data)
          }
        })
      },
      fail: () => {
        console.log('未登陆或信息已过期')
        wx.login({
          success: res => {
            wx.request({
              url: 'https://weapp-beetaa.c9users.io/login',
              data: { code: res.code },
              success: res => {
                var session_id = res.data.session_id
                wx.setStorage({
                  key: 'session_id',
                  data: session_id,
                  success: () => {
                    console.log('登陆成功，session_id: ' + session_id)
                    wx.getUserInfo({
                      success: res => {
                        var userInfo = res.userInfo
                        this.data.user = userInfo
                        console.log('已获授权查看用户信息')
                        console.log(userInfo)
                      },
                      fail: () => {
                        console.log('为获取授权查看用户信息')
                      }
                    })
                  },
                  fail: err => { console.log('wx.setStorage 出错') }
                })
              },
              fail: err => { console.log('wx.request 出错') }
            })
          },
          fail: err => { console.log('wx.login 出错') }
        })
      }
    })
  },
  // 当小程序启动，或从后台进入前台显示，会触发 onShow
  onShow: function () {

  },
  // 当小程序从前台进入后台，会触发 onHide
  onHide: function () {

  },
  // 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
  onError: function (err) {

  },
  // 可以添加任何函数和数据
  // 可以在本文件通过　this 访问
  // 也可以在其他页面通过　getApp() 后进行访问
  data: {
    user: null,
    system: null,
    params: null
  }
})