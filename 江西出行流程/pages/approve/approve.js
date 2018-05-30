Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:[
      {
        name:'小王',tel:18332549841,use:[{user:'商务车'},{user:'往返'},{user:'应急公务'}],
        time:'2018-05-27 20:28:00',cost:'约￥266.59',departure:'石泉路时代商务中心',destination:'泉州市行政服务中心',
        pay:'财政支付'
      },
      {
        name: '测试-小李', tel: 15248568456, use: [{ user: '商务车' }, { user: '往返' }],
        time: '2018-05-29 20:28:00', cost: '约￥66.59', departure: '南阳路农贸市场', destination: '石狮',
        pay: '单位支付'
      }
    ],
    key:null
  },
  todetail:function(){
    console.log(1213)
    wx.navigateTo({
      url: '/pages/detailorder/detailorder',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  selorder:function(e){
    let num= e.currentTarget.dataset.id;
    let key=this.data.key;
    console.log(num);
    console.log(key)
    if(key==num){
      this.setData({
        key:null
      })
    }else{
      this.setData({
        key:num
      })
    }
  },
  toorder:function(){
    wx.redirectTo({
      url: '/pages/order/order',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  }
})