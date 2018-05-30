var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  toto: function () {
    app.globalData.departure='晋江市人大常委会'
    // wx.setStorage({
    //   key: 'departure',
    //   data: '晋江市人大常委会',
    //   success: function(res) {},
    //   fail: function(res) {},
    //   complete: function(res) {},
    // })
    wx.navigateBack({
      delta: 1,
    })
  }
})