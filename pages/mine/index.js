// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    hasUserInfo: false
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
    const userInfo = wx.getStorageSync('userInfo');
    this.setData({
      hasUserInfo: !!userInfo,
      userInfo
    })
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

  },
  /* 获取用户信息 */
  getUserInfo(msg) {
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            lang: 'zh_CN',
            success: data => {
              console.log(data);

              this.setData({
                userInfo: data.userInfo,
                hasUserInfo: true
              })
              wx.setStorageSync('userInfo', data.userInfo);
            }
          })
        }
      }
    })
  },

  /* 清除用户信息 */
  clearMsg() {
    wx.showModal({
      title: '提示',
      content: '确定删除个人信息吗？',
      success: res => {
        if (res.confirm) {
          wx.clearStorageSync('userInfo');
          this.setData({
            userInfo: {},
            hasUserInfo: false
          })
        }
      }
    })
  }
})
