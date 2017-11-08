// pages/api/media/music/music.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musicUrls: [
      'http://weapp-1255317411.cosgz.myqcloud.com/bilibala.mp3',
      'http://weapp-1255317411.cosgz.myqcloud.com/hahaha.mp3'
    ],
    coverUrls: [
      'http://weapp-1255317411.cosgz.myqcloud.com/u%3D2145600354%2C888718067%26fm%3D27%26gp%3D0%5B1%5D.jpg',
      'http://weapp-1255317411.cosgz.myqcloud.com/u%3D485260480%2C2415007851%26fm%3D27%26gp%3D0%5B1%5D.jpg',
      'http://weapp-1255317411.cosgz.myqcloud.com/u%3D2313497820%2C2858456148%26fm%3D27%26gp%3D0%5B1%5D.jpg'
    ],
    musicStatus: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 播放背景音乐
   */
  playMusic: function (e) {
    wx.playBackgroundAudio({
      dataUrl: this.data.musicUrls[0],
      title: '好音乐哈哈哈',
      coverImgUrl: this.data.coverUrls[0]
    })
  },

  /**
   * 暂停播放背景音乐
   */
  pauseMusic: function (e) {
    wx.pauseBackgroundAudio()
  },

  /**
   * 停止播放背景音乐
   */
  stopMusic: function (e) {
    wx.stopBackgroundAudio()
  },

  /**
   * 获取背景音乐状态数据
   */
  showMusicStatus: function (e) {
    const thisPage = this
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        thisPage.setData({
          musicStatus: res
        })
      }
    })
  },

  /**
   * 前进5秒
   */
  forward10Seconds: function (e) {
    const thisPage = this
    wx.getBackgroundAudioPlayerState({
      success: function (res) {
        let duration = res.duration
        let position = res.currentPosition
        if (position + 10 < duration) {
          wx.seekBackgroundAudio({
            position: position + 10,
            success: function (res) {
              wx.getBackgroundAudioPlayerState({
                success: function (res) {
                  thisPage.setData({
                    musicStatus: res
                  })
                }
              })
            }
          })
        }
      }
    })
  }
})