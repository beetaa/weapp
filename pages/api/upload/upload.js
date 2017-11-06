var uploadFn = require('./uploadFn.js')

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
   * 点击“上传图片”按钮
   */
  uploadImage: function () {
    wx.chooseImage({
      success: function (res) {
        // 获取本地文件路径和文件名，需要进一步了解这个路径的细节，这个分析方法只适合真机，PC端无效
        var localFilePath = res.tempFilePaths[0];
        var fileName = localFilePath.match(/(wxfile:\/\/)(.+)/)
        fileName = fileName[2]
        console.log('本地文件：', localFilePath, fileName)
        // 调用上传函数
        uploadFn(localFilePath, fileName)
        
      }
    })
  }
})