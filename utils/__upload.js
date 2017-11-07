// 最终上传到cos的URL，目前小程序要求按照 json api 的格式，和 xml api 的不一样
// "https://" + REGION + ".file.myqcloud.com/files/v2/" + APPID + "/" + BUCKET_NAME + DIR_NAME
var cosUploadUrl = "https://gz.file.myqcloud.com/files/v2/1255317411/weapp"

// 自己搭建的鉴权服务器地址
var cosSignatureUrl = 'https://weapp-beetaa.c9users.io/cos_sign'

/**
 * 上传方法
 * localFilePath: 本地要上传的文件路径
 * fileName： 上传到 cos 后的文件名
 */
function upload(localFilePath, fileName) {

  // 获取鉴权签名后调用 wx.uploadFile API 进行上传
  wx.request({
    url: cosSignatureUrl,
    success: function (cosSignatureRes) {
      var cosSignature = cosSignatureRes.data
      // 上传文件至 cos，头部要带上上一步返回的鉴权签名
      // wx.uploadFile 返回一个 uploadTask 对象，据此可监听上传进度变化事件，以及取消上传任务。
      const uploadTask = wx.uploadFile({
        url: cosUploadUrl + '/' + fileName,
        filePath: localFilePath,
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
      })
    }
  })
}

module.exports = upload