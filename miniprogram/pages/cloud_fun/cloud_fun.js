// pages/cloud_fun/cloud_fun.js
const db = wx.cloud.database();
const dataDB = db.collection("test_db");
const _ = db.command;
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
        age:22,
        arr: [1,1,1],
        parent:{
          name:"扭扭"
        }
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
    // dataDB.where({
    //   school:"北京舞蹈学院"
    // }).get().then((res)=>{
    //   console.log(res);
    // })
    // dataDB.where({
    //   // age大于21的
    //   age:_.gt(21)
    // }).get().then((res)=>{
    //   console.log(res);
    // })
    // dataDB.where({
    //   // 数组包含4的
    //   arr:_.in([4])
    // }).get().then((res)=>{
    //   console.log(res);
    // })
    // dataDB.where({
    //   "parent.name":"扭扭"
    // }).get().then((res)=>{
    //   console.log(res);
    // })
    // dataDB.limit(5).skip(8).get().then((res)=>{
    //   console.log(res);
    // })
    dataDB.count().then((res)=>{
      console.log(res);
    })
  },
  // 点击更新
  editHandle(){
    // dataDB.doc("41ae62ef622f3e9f0c57ff900ec1a516").update({
    //   data:{
    //     年龄+2
    //     age:_.inc(2)
    //   },  
    //   success:function (res) {
    //     console.log(res);
    //   }
    // // }).get().then((res)=>{
    // //   console.log(res);
    // })
    dataDB.doc("41ae62ef622f3e9f0c57ff900ec1a516").update({
      data:{
        name:"刘宇啾咪"
      }
    }).then((res)=>{
      console.log(res);
    })
  },
  // 点击删除
  deleteHandle(){
    dataDB.doc("41ae62ef622f436d0c58c3bd6e9399a1").remove().then((res)=>{
      console.log(res);
    })
  },
  // 批量更改
  editManyHandle(){
    wx.cloud.callFunction({
      name:"viptest"
    }).then((res)=>{
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