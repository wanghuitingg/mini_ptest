// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    str:"hello world123",
    class1:"box2",
    num:0
  },
  // 测试点击事件
  tapHandle(){
    wx.switchTab({
      url: '../mine/mine',
    })
  },
  // 累加器
  addHandle(e){
    let i = e.currentTarget.dataset.i;
    i = Number.parseInt(i);
    // console.log(e.currentTarget.dataset.i);
    // console.log(this.data.num);
    this.setData({
      num:this.data.num + i
    });
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