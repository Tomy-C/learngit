Page({

  /**
   * 页面的初始数据
   */
  data: {
    showreason:true,
    showmap:false

  },
  onShow: function () {
      this.setData({
        showreason: true,
        showmap: false
      })
  },
  charging:function(){
      wx.redirectTo({
        url: '/pages/spend/spend',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
  },
  change:function(){
    var that=this
    wx.showModal({
      title: '',
      content: '确定修改目的地?',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#BF6F72',
      confirmText: '确定',
      confirmColor: '',
      success: function(res) {
        if (res.confirm) {
         that.setData({
           showreason:false,
           showmap: true
         })
        } else if (res.cancel) {
          console.log('用户点击取消')
          that.setData({
            showmap: false
          })
        }
       
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  sure:function(){
    wx.navigateTo({
      url: '/pages/destination/destination',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  cancle:function(){
    this.setData({
      showreason:true,
      showmap: false
    })
  }
 
})