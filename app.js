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
        // 检查本地用户信息的完整性
        // 读取用户信息
        // 今后的请求都会自动带上已缓存的 auth_key
        console.log('已存在登陆记录')
        wx.getStorage({
          key: 'auth_key',
          success: res => { console.log('auth_key: ' + res)},
        })
      },
      fail: () => {
        console.log('用户未登陆，开始登陆流程')
        wx.login({
          success: res => {
            wx.request({
              url: 'https://weapp-beetaa.c9users.io/login',
              data: { code: res.code },
              success: res => {
                console.log(res)
                wx.setStorage({
                  key: 'auth_key',
                  data: res.auth_key,
                  success: res => {
                    console.log('成功登陆')
                    // 根据需要进行初始化
                  },
                  fail: err => {
                    console.log('wx.setStorage 出错')
                  }
                })
              },
              fail: err => {
                console.log('wx.request 出错')
              }
            })
          },
          fail: err => {
            console.log('wx.login 出错')
          }
        })
      }
    })
  },
  globalData: {
    
  }
})