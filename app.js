App({
  onLaunch: function () {
    // 操作本地存储
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
                        this.globalData.userInfo = userInfo
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
  globalData: {
    userInfo: null
  }
})