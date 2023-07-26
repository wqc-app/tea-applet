// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userList : []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getData()
  },

  getData(){
    wx.request({
      url: 'https://tea.qingnian8.com/demoArt/get',
      method: 'post',
      header : {
        "Content-Type" : "application/json"
      },
      data : {
        "num": 3, 
        "page": 1 ,
        content : ""
      },
      success : res=>{
        this.setData({
          userList : res.data.data
        })
      }
    })
  },

  subData(){
    console.log(this.data.content);
    wx.request({
      url: 'https://tea.qingnian8.com/demoArt/add',
      method: 'post',
      header : {
        "Content-Type" : "application/json"
      },
      data : {
        "title": this.data.content, 
        "author": "wqc" 
      },
      success : res=>{
          console.log('res' , res);
          wx.showToast({
            title: res.data.errMsg,
            icon: "none"
          })
          if(res.data.errCode != 0){
            return ;
          }
          this.getData()
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