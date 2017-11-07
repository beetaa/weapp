// pages/api/media/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    singleImages: [],
    multiImages: [],
    multiImagePaths: [],
    imageInfos: null
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
   * 用户选择1张照片的处理函数
   */
  chooseSingleImage: function () {
    const thisPage = this
    console.log('准备选择1张图片')
    wx.chooseImage({
      count: 1,
      success: function (res) {
        console.log(res)
        thisPage.setData({
          singleImages: res.tempFiles
        })
      }
    })
  },

  /**
   * 用户选择多张照片的处理函数
   */
  chooseMultiImages: function () {
    const thisPage = this
    console.log('准备选择多张图片')
    wx.chooseImage({
      count: 9,
      success: function (res) {
        console.log(res)
        thisPage.setData({
          multiImages: res.tempFiles,
          multiImagePaths: res.tempFilePaths
        })
      }
    })
  },

  /**
   * 用户点击多张照片的其中一张，进入图片预览
   */
  previewMultiImages: function (e) {
    console.log(e.target.dataset)
    const thisPage = this
    wx.previewImage({
      current: e.target.dataset.url,
      urls: thisPage.data.multiImagePaths
    })
  },

  /**
   * 选择照片并显示其信息
   */
  showImageInfos: function (e) {
    const thisPage = this
    wx.chooseImage({
      count: 1,
      success: function (res) {
        const imageUrl = res.tempFilePaths[0]
        wx.getImageInfo({
          src: imageUrl,
          success: function (res) {
            thisPage.setData({
              imageInfos: res
            })
          }
        })
      }
    })
  }
})