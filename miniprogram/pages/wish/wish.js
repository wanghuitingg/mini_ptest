// pages/wish/wish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todoList:[
      {
        title:"吃饭",
        id:"1",
      },
      {
        title:"睡觉",
        id:"2",
      },
      {
        title:"学习",
        id:"3",
      },
    ],
    inpVal:""
  },
  // 文本框事件
  inpHandle(e){
    this.setData({
      inpVal:e.detail.value
    })
  },
  // 添加事件
  addHandle(){
    let timer = new Date();
    timer = timer.getTime();
    let _arr = this.data.todoList;
    _arr.push({
      title:this.data.inpVal,
      id:timer
    })
    this.setData({
      todoList:_arr
    })
  },
  // 删除事件
  delHandle(e){
    let _id = e.currentTarget.dataset.id;
    let _arr = this.data.todoList.filter((item)=>{
      if(_id != item.id){
        return true;
      }
    })
    console.log(_arr);
    this.setData({
      todoList:_arr
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?start=5&count=10',
      success: (res) => {
        console.log(res);
      },
      fail: (res) => {},
      complete: (res) => {},
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