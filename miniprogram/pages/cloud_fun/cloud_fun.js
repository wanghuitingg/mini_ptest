// pages/cloud_fun/cloud_fun.js
const db = wx.cloud.database();
const dataDB = db.collection("test_db");
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 点击添加事件
  addHandle(){
    dataDB.add({
      data:{
        name:"liuyu",
        color:"blue",
        school:"北京舞蹈学院",
        location: new db.Geo.Point(113, 23),
      }
    }).then((res)=>{
      console.log(res);
    })
  },
  // 点击获取数据
  getHandle(){
    dataDB.get().then((res)=>{
      console.log(res);
    })
  },
  // 点击条件查询
  getByHandle(){
    dataDB.where({
      school:"北京舞蹈学院"
    }).get().then((res)=>{
      console.log(res);
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:"viptest",
      data:{
        id:"niuniu",
        age:'21'
      }
    }).then((res)=>{
      console.log(res);
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