//index.js
//获取应用实例
var start_clientX;
var end_clientX;
const app = getApp()
const util = require("../../utils/util.js") 
Page({
  data: {
    isshow:true,
    selected:true,
    showtime:true,
    showmap:false,
    windowWidth: wx.getSystemInfoSync().windowWidth,
    movies: [
      { url: '/sourceImage/homeBanner1.jpeg' },
      { url: '/sourceImage/homeBanner2.jpeg' }
    ],
    isselected: true,
    time: '15:06',
    showtime: true,
    username: null,
    show1: true,
    show2: true,
    show3: true,
    tobox: true,
    chartered: true,
    selwho: null,
    showpay: true,
    payment: '选择支付方式',
    departure: '石泉路时代商务中心',
    destination: '去哪儿...',
    explain: '填写用车说明',
    assessor: [
      { name: '小黄', tel: '137494944' },
      { name: '小王', tel: '137494944' },
      { name: '小李', tel: '137494944' },
      { name: '小陈', tel: '137494944' },
      { name: '小戴', tel: '137494944' }
    ],
    multiArray: [['7座'], ['2小时40公里200.00元', '6小时200公里500.00元', '10小时300公里630.00元', '4小时100公里350.00元']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '7座'
        }

      ], [
        {
          id: 0,
          name: '2小时40公里200.00元'
        },
        {
          id: 1,
          name: '6小时200公里500.00元'
        },
        {
          id: 2,
          name: '10小时300公里630.00元'
        },
        {
          id: 3,
          name: '4小时100公里350.00元'
        }

      ]
    ],
    multiIndex: [0, 0]
  },
  //包车类型
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value,
      chartered: false
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShow: function () {
    this.setData({
      tobox: true
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        tobox: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  toMsg:function(){
    wx.navigateTo({
      url: '../message/message'
    })
  },
  isshow:function(){
    this.setData({
      isshow:true,
      selected:true
    })
  },
  showtwo: function () {
    this.setData({
      isshow: false,
      selected: false
    })
  },
  // 头像  
  showview: function () {
    this.setData({
      display: "block",
      translate: 'transform: translateX(' + this.data.windowWidth * 0.7 + 'px);',
      showmap:true
    })
  },
  // 遮拦  
  hideview: function () {
    this.setData({
      display: "none",
      translate: '',
      showmap:false
    })
  },
  show: function () {
    wx.clearStorage()
    this.setData({
      isselected: true,
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      chartered: true,
      departure:'石泉路时代商务中心'

    })
  },
  noshow: function (e) {
    wx.clearStorage()
    this.setData({
      isselected: false,
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      departure:'石泉路时代商务中心'

    })
  },
  //即走
  bindTimeChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value,
      showtime: false
    })
  },
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'username',
      success: function (res) {
        console.log(res.data)
        that.setData({
          username: res.data
        })
      }
    })
    wx.getStorage({
      key: 'destination',
      success: function (res) {
        console.log(res.data)
        that.setData({
          destination: res.data
        })
      }
    })
    this.setData({
      departure: app.globalData.departure
    })
    wx.getStorage({
      key: 'explain',
      success: function (res) {
        console.log(res.data)
        that.setData({
          explain: res.data
        })
      }
    })
  },
  onLoad: function (options) {
    wx.clearStorage()
  },
  select1: function () {
    this.setData({
      show1: !this.data.show1,
      show2: true,
      show3: true,
      show4: true,
    })
  },
  select2: function () {
    this.setData({
      show2: !this.data.show2,
      show1: true,
      show3: true,
      show4: true,
      showpay:true
    })
  },
  select3: function () {
    this.setData({
      show3: !this.data.show3,
      show1: true,
      show2: true,
      show4: true,
      showpay:true
    })
  },
  select4: function () {
    this.setData({
      show4: !this.data.show4,
      show1: true,
      show2: true,
      show3: true
    })
  },
  // 选择乘客
  selpass: function () {
    wx.navigateTo({
      url: '/pages/passengers/passengers',
      success: function (res) { },
      fail: function (res) {
        wx.showToast({
          title: '请稍后再试',
          icon: 'loading',
          duration: 1000
        })
      },
      complete: function (res) { },
    })
  },
  //从哪去
  wherego: function () {
    wx.navigateTo({
      url: '/pages/departure/departure',
      success: function (res) { },
      fail: function (res) {
        wx.showToast({
          title: '请稍后再试',
          icon: 'loading',
          duration: 1000
        })
      },
      complete: function (res) { },
    })
  },
  //去哪里
  towhere: function () {
    wx.navigateTo({
      url: '/pages/destination/destination',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //支付方式
  howpay: function () {
    this.setData({
      showpay: !this.data.showpay
    })
  },
  danwei: function () {
    console.log(3145)
    this.setData({
      payment: '单位支付'
    })
  },
  caizheng: function () {
    console.log(1222);
    this.setData({
      payment: '财政支付'
    })
  },
  //提交
  submitto: function () {
    if (this.data.destination == '去哪儿...') {
      wx.showToast({
        title: '请输入目的地',
        icon: 'none',
        duration: 1000
      })
    } else if (this.data.explain == '填写用车说明') {
      wx.showToast({
        title: '请填写用车说明',
        icon: 'none',
        duration: 1000
      })
    } else if (this.data.show1 == true && this.data.show2 == true && this.data.show3 == true) {
      wx.showToast({
        title: '请选择车型',
        icon: 'none',
        duration: 1000
      })
    } else {
      this.setData({
        tobox: false,
        showmap:true
      })
    }

  },
  clock: function () {
    this.setData({
      tobox: true
    })
  },
  toorder: function () {
    var that=this;
    setTimeout(function(){
      that.setData({
        tobox:true
      })
      console.log('dingshiqi')
    },100)
    wx.navigateTo({
      url: '/pages/order/order',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  chose: function (e) {
    this.setData({
      selwho: e.currentTarget.dataset.id
    })
  }
})

