// pages/tv_index/tv_index.js
import {getDomestic} from "../../js/api"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 获取热播剧
  getDomesticData(){
    getDomestic({
      strat:0,
      count:10
    }).then((res)=>{
      console.log(res);
    })
  },
  // 获取综艺
  getTv2(){

  },
  // 获取英美剧
  getTv3(){

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDomesticData();
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