
Page({
  data: {
    phone: '',
    password: ''
  },

  // 获取输入账号 
  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录 
  login: function () {
    if (this.data.phone.length == '' && this.data.password.length == '') {
      wx.showToast({
        title: '请填写账号密码',
        icon: 'loading',
        duration: 2000
      })
    }
    else if (this.data.password.length == '') {
      wx.showToast({
        title: '密码不能为空',
        icon: 'loading',
        duration: 2000
      })
    }
    else if (this.data.phone.length == '' ) {
      wx.showToast({
        title: '账号不能为空',
        icon: 'loading',
        duration: 2000
      })
    }
    else {
      // 这里修改成跳转的页面 
      wx.redirectTo({
        url: '/pages/index/index',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 1000
      })
    }
  }
})
