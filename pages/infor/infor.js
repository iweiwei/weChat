  // pages/infor/infor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dateValue:'1999-01-01',
    phone:'',
    gender: 1,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    array: ['男', '女'],
    myNickName:'',
    infoNickName:'',
    nickNameFlag: true
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      gender: e.detail.value,
    })
  },

  editName:function(){
    var _this = this
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success: function (res) {
              _this.setData({
                myNickName: res.userInfo.nickName
              })
              wx.navigateTo({
                // get
                url: '/pages/editUser/editUser?user=' + _this.data.myNickName,
              })
            }

          })
          
        }
      }
    })
    console.log('myNickName is '+ _this.data.myNickName)
    
  },
  datePickerBindchange: function (e) {
    this.setData({
      dateValue: e.detail.value
    })
  },
 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('infor options is ', options)   
    var that = this
    if(options.user != null)
    {
      that.setData({
        // get
        infoNickName: options.user,
        nickNameFlag: false
      })

      // get
      // wx.request({
      //   url: '', // api
      //   method: 'GET',
      //   data: {

      //   },
      //   header: {
      //     'content-type': 'application/json' // 默认值
      //   },
      //   success(res) {
      //     console.log('get request', res.data)
      //   }

      // })
      
    }
    else {
      console.log('options is null')
    }
    
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