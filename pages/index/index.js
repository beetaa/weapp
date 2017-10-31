//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  //事件处理函数
  bindViewTap: function() {
    
  },
  onLoad: function () {
    const ctx = wx.createCanvasContext('myCanvas')
    ctx.setFillStyle('red')
    ctx.fillRect(10, 10, 150, 75)
    ctx.draw()
  }
})
