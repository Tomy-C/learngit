Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    userlist: [
      {
        initial: '深圳小滴哥公司',
        company: [{ name: '深圳小滴哥公司',username:[{user:'小黄'},{user:'小王'},{user:'郭测试'},{user:'天涯'}]}, 
          { name: '测试部', username: [{ user: '洋气' }, { user: '馆长' }, { user: '刘测试' }, { user: '伊美' }]}]
      }
    ],
    uhide: null,
    oneshow:true,
    bumen:null,
    userid:null
     
  },
  showcom:function(e){
    let showcom =this.data.uhide;
    let comid = e.currentTarget.dataset.id;
    console.log(comid);
    console.log(showcom)
    if (showcom == comid) {
     this.setData({
        uhide:null,
        oneshow:true
      })
    } else {
      this.setData({
        uhide: comid,
        oneshow:false
      })
    }
  },
  showuser:function(e){
    let showuser = this.data.bumen;
    let userid = e.currentTarget.dataset.id;
    if (showuser == userid) {
      this.setData({
        bumen: null,
        userid: null
       
      })
    } else {
      this.setData({
        bumen: userid,
        userid: null
      })
    }
  },
  selectid:function(e){
    let userid =this.data.userid;
    let whoes =e.currentTarget.dataset.id;
    if(userid == whoes){
      this.setData({
        userid:null
      })
    }else{
      this.setData({
        userid:whoes
      })
    }
  },
  senduser:function(){
  let com = this.data.uhide;
  let bu =this.data.bumen;
  let user =this.data.userid;
  if(com==null||bu==null|user==null){
    wx.showToast({
      title: '请选择乘车人',
      icon: 'loading',
      duration: 1000
    })

  }else{
    let userp = this.data.userlist[this.data.uhide].company[this.data.bumen].username[this.data.userid];
    console.log(userp.user)
    wx.setStorage({
      key:'username',
      data: userp.user 
    })
    wx.navigateBack({
      
    })
  }
  }
})