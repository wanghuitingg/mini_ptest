// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env:"cloud1-9g3s7ryp8832294b"
})
const db = cloud.database();
const dataDB = db.collection("test_db");
const _ = db.command;


// 云函数入口函数
exports.main = async (event, context) => {
  // console.log("12345");
  // const wxContext = cloud.getWXContext()
  // return {
  //   event,
  //   context,
  //   openid: wxContext.OPENID,
  //   appid: wxContext.APPID,
  //   unionid: wxContext.UNIONID,
  // }
  let result = null;
  result = await dataDB.where({
    age:22
  }).update({
    data:{
      name:"扭羽"
    }
  })
  return result;
}