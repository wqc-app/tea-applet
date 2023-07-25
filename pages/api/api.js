// pages/api/api.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr : ['A', 'B', 'C'],
  },

  showToast(){
    wx.showToast({
      title: 'title',
      icon : "none",
      image : "/static/imgs/ikun.jpg",
      mask : true
    })
  },

  showModal(){
    wx.showModal({
      title: '提示',
      // content: '内容',
      showCancel: false,
      editable: true,
      complete: (res) => {
        console.log(res);
      }
    })
  },

  showLoading(){
    wx.showLoading({
      title: 'title',
      mask: true,
    })
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },

  showActionSheet(){
    wx.showActionSheet({
      alertText: "title",
      itemList: this.data.listArr,
      success : res=> {
        console.log(this.data.listArr[res.tapIndex]);
      },
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.enableAlertBeforeUnload({
      message: 'message',
    })
  },

  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})