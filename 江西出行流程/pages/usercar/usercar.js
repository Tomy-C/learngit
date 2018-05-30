
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'huiyi', value: '会议用车' },
      { name: 'zhiqin', value: '执勤用车'},
    ],
    expl:'填写用车说明'
  },
 select:function(e){
   let id = e.currentTarget.dataset.id;
   let explain = this.data.items[id].value;
   this.setData({
      expl:explain
   })
 },
whyuser:function(e){
  wx.setStorage({
    key: 'explain',
    data: this.data.expl,
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
  wx.navigateBack({
    
  })
}

})