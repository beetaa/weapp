import { myName } from './lib/zz_export.js'
import mylala from './lib/zz_export.js'
import * as haha from './lib/zz_export.js'

// 箭头函数，内外侧 this 可保持一致
var myArrowFun = (msg = '缺省的箭头') => {
  return msg
}

// 类的定义和继承
class Shape{
  constructor(name) {
    this.name = name
  }
  move(x, y) {
    console.log(`物体 [${this.name}] 移动到坐标（${x}, ${y}）`)
  }
}
// 长方形
class Rectangle extends Shape {
  constructor(name) {
    super(name)
  }
  area(w, h) {
    let result = w * h
    console.log(`长方形 [${this.name}] 的面积是 ${result}`)
    return result
  }
}
// 圆
class Circle extends Shape {
  constructor(name) {
    super(name)
  }
  area(r) {
    let result = 3.14 * r * r
    console.log(`圆形 [${this.name}] 的面积是 ${result}`)
    return result
  }
}

Page({

  data: {
    testVar: 'no'
  },

  onLoad: function (options) {
    // import & export
    console.log('import & export 测试：', myName, mylala, haha.myName)
    // 箭头函数
    console.log('箭头函数测试：', myArrowFun('你好，箭头！'))
    // 缺省参数
    console.log('缺省参数测试：', myArrowFun())
    // 测试 Array.forEach()
    var oldArr = ['a', 'b', 'c']
    var newArr = []
    oldArr.forEach((ele, idx, arr) => {
      newArr.push(ele + '|' + idx)
    })
    console.log('Array.forEach 测试：', oldArr, newArr)
    // 模板字符串
    let mName = 'zhao'
    let mDian = 9
    console.log('模板字符串测试：', `你好${mName}，现在是${mDian}点`)
    // 数组解构赋值
    let nums = [1, 2]
    let [a, b] = nums
    console.log('数组解构赋值测试：', a, b)
    // 对象解构赋值
    let objs = {lat: 2.13234, lng: 5.90089}
    let {lat, lng} = objs
    console.log('对象解构赋值测试：', lat, lng)
    // 函数参数解构赋值（数组形式）
    var add = ([a, b]) => a + b
    console.log('函数参数解构赋值测试（数组形式）：', add([1, 2]))
    var multiple = ({a, b}) => a * b
    var ks = {a: 4, c: 5, b: 3}
    console.log('函数参数解构赋值（对象形式）1：', multiple({a: 2, b: 3}))
    console.log('函数参数解构赋值（对象形式）2：', multiple({...ks}))
    // 类
    const shapeA = new Shape('sA')
    console.log(shapeA.move(30, 50))
    const rectA = new Rectangle('rA')
    console.log(rectA.move(20, 22))
    console.log(rectA.area(20, 25))
    const circleA = new Circle('cA')
    console.log(circleA.move(40, 20))
    console.log(circleA.area(12))
    // for...of 遍历数组元素的值，通过数组的 entries() 还可以遍历元素的索引
    var farr = ['fa', 'fb', 'fc']
    for (let ele of farr) console.log(ele)
    for (let [idx, ele] of farr.entries()) console.log(idx, ele)
    // for...of 遍历字符串
    var fstr = 'hello world'
    for (let char of fstr) console.log(char)
    // for...of 遍历对象，先通过 Object.keys(fobj) 获取属性名称数组
    var fobj = { a: 'oa', b: 'ob', c: 'oc' }
    var fnames = Object.keys(fobj)
    for (let fname of fnames) console.log(fobj[fname])
    // 或者通过 for...in 遍历对象的属性名，从而遍历对象的属性值
    for (let pname in fobj) console.log(fobj[pname])
    // for...of 遍历 Set 和 Map
    var fset = new Set(['yes', 'no'])
    for (let ele of fset) console.log(ele)

  },

  onReady: function () {
    // 箭头函数内外 this 一致
    wx.showToast({
      title: 'balala',
      success: (res) => {
        this.setData({testVar: '成功'})
        console.log('箭头函数内外this一致：', this.data.testVar)
      }
    })
  },

  onShow: function () {
  
  },

  onHide: function () {
  
  },

  onUnload: function () {
  
  },

  onPullDownRefresh: function () {
  
  },

  onReachBottom: function () {
  
  },

  onShareAppMessage: function () {
  
  }

})