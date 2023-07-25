// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     name : "self" ,
     age: 18,
     size: "300rpx",
     color : "pink",
     content : "",
  },
 
  changePerson(event){
    let {selfname : name  , selfage : age} = event.currentTarget.dataset;
    this.setData({
      name,
      age
    })
  },

  boxChange(){
    // size 
    let size = parseInt(Math.random()*750);
    size = size > 300 ? size : 300; 
    // color
    let r = parseInt(Math.random()*255);
    let g = parseInt(Math.random()*255);
    let b = parseInt(Math.random()*255);
    let color = `rgb( ${r} ,${g} , ${b})`;
    // update data
    this.setData({
        size : size + "rpx",
        color
    })
  },

  getPhoneNumber (e) {
    console.log(e);
    console.log(e.detail.code)  // 动态令牌
    console.log(e.detail.errMsg) // 回调信息（成功失败都会返回）
    console.log(e.detail.errno)  // 错误码（失败时返回）
  },

  getUserInfo(e){
    console.log('getuserInfo' , e);
  },

  onInput(e){
    console.log('onInput' , e);
    this.setData({
      content : e.detail.value
    })
  },

  onFocus(e){
    console.log('onFocus' , e);
  },

  onCheckBoxChange(e){
    console.log('onCheckBoxChange' , e);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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