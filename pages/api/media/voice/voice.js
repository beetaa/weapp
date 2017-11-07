// pages/api/media/voice/voice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordFilePath: null
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
   * 开始录音
   */
  startRecordVoice: function (e) {
    const thisPage = this
    wx.startRecord({
      success: function (res) {
        thisPage.setData({
          recordFilePath: res.tempFilePath
        })
        console.log('录音成功：', res.tempFilePath)
      },
      fail: function () {
        console.log('录音失败')
      }
    })
  },

  /**
   * 停止录音
   */
  stopRecordVoice: function (e) {
    wx.stopRecord()
  },

  /**
   * 开始播放录音
   */
  startPlayVoice: function (e) {
    wx.playVoice({
      filePath: this.data.recordFilePath,
      complete: function () {
        console.log('播放完成')
      }
    })
  },

  /**
   * 暂停播放录音
   */
  pausePlayVoice: function (e) {
    wx.pauseVoice()
  },

  /**
   * 停止播放录音
   */
  stopPlayVoice: function (e) {
    wx.stopVoice()
  }
})