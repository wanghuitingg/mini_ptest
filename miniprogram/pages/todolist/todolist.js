
// pages/todolist/todolist.js
let inpVal = "";
const db = wx.cloud.database();
const todoList = db.collection("todolist");
let _skip = 0;
let _total = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todoData: [],
    inpValue: ""
  },
  // 文本框事件
  inpHandle(e) {
    inpVal = e.detail.value
  },
  // 添加list
  addHandle() {
    wx.showLoading({
      title: '添加中...',
    })
    todoList.add({
      data: {
        title: inpVal,
        isDone: false
      }
    }).then((res) => {
      wx.hideLoading();
      this.getTodoList();
      this.setData({
        inpValue: ""
      })
    })
  },
  // 获取待办事项
  getTodoList() {
    wx.showLoading({
      title: '获取数据中...',
    })
    new Promise((resolve, reject) => {
      todoList.count().then((res) => {
        _total = res.total
        // console.log(res);
        resolve()
      })
    }).then(() => {
      todoList.limit(12).skip(_skip).get().then((res) => {
        console.log(res);
        let _arr = this.data.todoData;
        this.setData({
          todoData: [..._arr, ...res.data]
        })
        wx.hideLoading();
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTodoList();
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
    if (_total == this.data.todoData.length) {
      wx.showToast({
        title: '没有数据啦！',
        icon:"none"
      })
    } else {
      _skip += 12;
      this.getTodoList();
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})