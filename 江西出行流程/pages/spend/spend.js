Page({

  /**
   * 页面的初始数据
   */
  data: {
    spend:[
      {money:'起步价',cost:'5.00元'},
      {money:'里程费(0.00公里)',cost:'5.00元'},
      {money:'时长费(0.0分钟)',cost:'5.00元'},
      {money:'低速行驶费(0.00分钟)',cost:'5.00元'},
      {money:'远途费(0.00公里)',cost:'5.00元'},
      {money:'候客费(0.0分钟)',cost:'15.00元'}
    ],
    other:[
      { money: '高速费', input: '请输入金额(500以内)' },
      { money: '里程费(0.00公里)', input: '请输入金额(200以内)' },
      { money: '时长费(0.0分钟)', input: '请输入金额(200以内)'},
      { money: '低速行驶费(0.00分钟)', input: '请输入金额(2000以内)' }
    ]
  },
  toindex:function(){
    wx.redirectTo({
      url: '/pages/index/index',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  toapp:function(){
    wx.redirectTo({
      url: '/pages/applicationcar/applicationcar',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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
    
  }
})