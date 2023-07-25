// pages/request/request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      catList : []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getData()
  },

  getData(){
    wx.request({
      url: 'https://api.thecatapi.com/v1/images/search?limit=2',
      method : "get",
      success : res=>{
        console.log('getData()' , res);
        let data =  res.data;
        for (let i = 0; i < data.length; i++) {
          this.data.catList.push({
            id : data[i].id,
            url : data[i].url,
            width : data[i].width,
            height : data[i].height,
          })
        }
        this.setData({
          catList : this.data.catList
        })
       
      },
      complete : res=>{
        wx.stopPullDownRefresh();
        wx.hideNavigationBarLoading()
      }
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
    this.data.catList = [];
    this.getData()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log('底部');
    wx.showNavigationBarLoading()
    this.getData()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})