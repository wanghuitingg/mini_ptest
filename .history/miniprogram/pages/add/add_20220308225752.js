// pages/add/add.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tvList:[],
    start:0,
    total:0
  },
  // 获取剧集列表  
  getData(){
    wx.showLoading({
      title: '加载中',
    })
    return new Promise((resolve)=>{
      wx.request({
      url:`https://m.douban.com/rexxar/api/v2/subject_collection/tv_domestic/items?start=${this.data.start}&count=10` ,
      success:(res)=>{
        let _newArr = this.data.tvList;
        _newArr = _newArr.concat(res.data.subject_collection_items)
        // console.log(res);
        this.setData({
          tvList:_newArr,
          total:res.data.total
        })
        wx.hideLoading();
        resolve();
      }
    })
    })
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getData();
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
    this.setData({
      start:0,
      tvList:[]
    })
    this.getData().then(()=>{
      wx.stopPullDownRefresh()
    })
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.tvList.length < this.data.total){
      this.setData({
      start:this.data.start + 10
    })
    this.getData()
    }else{
      wx.showToast({
        title: '到底了',
        icon:"error"
      })
    }
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})