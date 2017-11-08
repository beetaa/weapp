// pages/ui/toast/toast.js
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
   * 成功图标，停留2秒
   */
  showToastSuccess2: function (e) {
    wx.showToast({
      title: '操作成功',
      icon: 'success',
      duration: 2000
    })
  },

  /**
   * 加载中图标，停留5秒
   */
  showToastLoading5: function (e) {
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 5000
    })
  },

  /**
   * 用图片作为图标，停留3秒
   */
  showToastImage3: function (e) {
    wx.showToast({
      title: '图片作图标',
      image: '/assets/icon/app.png',
      duration: 3000
    })
  },

  /**
   * 开启遮罩，缺省停留1.5秒
   */
  showToastMask: function (e) {
    wx.showToast({
      title: '开启遮罩',
      icon: 'loading',
      mask: true
    })
  },

  /**
   * 关闭提示
   */
  hideToast: function (e) {
    wx.hideToast()
  }
})