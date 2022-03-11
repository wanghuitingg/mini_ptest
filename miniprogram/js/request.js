function request({data,url,method}){
  return new Promise((resolve,reject)=>{
    wx.request({
      data,
      url,
      method,
      success:(res)=>{
        resolve(res.data)
      }
    })
  })
}
export default request;