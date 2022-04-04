
// pages/todolist/todolist.js
let inpVal = "";
const db = wx.cloud.database();
const todoList = db.collection("todolist");
let _skip = 0;
let _total = 0;
let _isDone = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todoData: [],
    inpValue: ""
  },
  // 查看已完成项
  searchHandle(){
    _isDone = true;
    _skip = 0;
    this.setData({
      todoData:[]
    });
    this.getTodoList();
  },
  // 查看未完成项
  searchAll(){
    _isDone= false;
    _skip = 0;
    this.setData({
      todoData:[]
    });
    this.getTodoList();
  },
  // 标记完成
  doneHandle(e){
    let _id = e.currentTarget.dataset.id;
    console.log(e,_id);
    todoList.doc(_id).update({
      data:{
        isDone:true
      }
    }).then((res)=>{
      console.log(res);
    })
    this.getTodoList();
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
      todoList.where({
        isDone:false
      }).count().then((res) => {
        _total = res.total
        // console.log(res);
        resolve()
      })
    }).then(() => {
      todoList.limit(12).skip(_skip).where({
        isDone:_isDone
      }).get().then((res) => {
        console.log(res);
        let _arr = this.data.todoData;
        this.setData({
          todoData: [..._arr, ...res.data]
        })
        wx.hideLoading();
        wx.stopPullDownRefresh()
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
    this.searchAll()
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