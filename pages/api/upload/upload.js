// 上传到 cos 的URL，目前小程序要求按照 json api 的格式，和 xml api 的不一样
var cosUploadUrl = "https://gz.file.myqcloud.com/files/v2/1255317411/weapp"
// 自己搭建的鉴权服务器地址
var cosSignatureUrl = 'https://weapp-beetaa.c9users.io/cos_sign'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_percent: 0
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
    var page = this
    wx.chooseImage({
      success: function (res) {
        // 获取本地文件路径和文件名，只适合真机，开发工具中无效
        var localFilePath = res.tempFilePaths[0];
        var fileName = localFilePath.match(/(wxfile:\/\/)(.+)/)
        fileName = fileName[2]
        console.log('本地文件：', localFilePath, fileName)
        // 获取鉴权签名后调用 wx.uploadFile API 进行上传
        wx.request({
          url: cosSignatureUrl,
          success: function (cosSignatureRes) {
            var cosSignature = cosSignatureRes.data
            console.log('鉴权签名：', cosSignature)
            // wx.uploadFile 返回一个 uploadTask 对象，据此可监听上传进度变化事件，以及取消上传任务。
            const uploadTask = wx.uploadFile({
              url: cosUploadUrl + '/' + fileName,
              filePath: localFilePath,
              // 要带上上一步返回的鉴权签名
              header: {
                'Authorization': cosSignature
              },
              name: 'filecontent',
              formData: {
                op: 'upload'
              },
              success: function (uploadRes) {
                var data = uploadRes.data
                console.log('uploadRes', uploadRes)
                // 对返回数据进行操作，也可以传入回调函数进行处理
              },
              fail: function (e) {
                console.log('e', e)
              }
            })
            uploadTask.onProgressUpdate(function (res) {
              console.log('上传进度：', res.progress)
              page.setData({image_percent: res.progress})
            })
          }
        })
        
      }
    })
  }
})