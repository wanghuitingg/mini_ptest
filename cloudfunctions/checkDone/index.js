// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: "cloud1-9g3s7ryp8832294b"
})
const db = cloud.database();
const todoList = db.collection("todolist");
const _ = db.command;

// 云函数入口函数
exports.main = async (event, context) => {
  return await todoList.where({
    _id: _.in(event.ids)
  }).update({
    data: {
      isDone: true
    }
  })
  // let _res = {};
  // await todoList.where({
  //   _id:_.in(event.ids)
  // }).update({
  //   data:{
  //     isDone:true
  //   }
  // }).then((res)=>{
  //   _res = res
  // })
  // return _res;
}