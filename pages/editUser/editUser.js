// pages/editUser/editUser.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    myUser:''

  },
  inputedit:function(e){
    // var dataset = e.currentTarget.dataset;
    var value = e.detail.value;
    // this.data[dataset.item] = value;
    this.setData({
      myUser: value
    })
    console.log('value is'+value)
    console.log('myUser is' + this.data.myUser)

  },
  confirm:function(){
    var that = this
    wx.navigateTo({
      url: '/pages/infor/infor?user=' + that.data.myUser,
    })
    // that.data.myUser db
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('editUser options is ', options)
    var that = this
    that.setData({
      myUser:options.user
    })

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