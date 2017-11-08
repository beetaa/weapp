// pages/ui/loading/loadin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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
   * 不使用遮罩
   */
  showLoading: function (e) {
    wx.showLoading({
      title: '不使用遮罩',
    })
  },

  /**
   * 手动关闭提示
   */
  closeLoading: function (e) {
    wx.hideLoading()
  },

  /**
   * 自动关闭提示，5秒后
   */
  autoCloseLoading: function (e) {
    wx.showLoading({
      title: '5秒后关闭',
      mask: true
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 5000)
  }
})