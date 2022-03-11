import request from "./request"

const baseUrl = "https://m.douban.com/rexxar/api/v2";
export function getDomestic(data) {
  return request({
    url: baseUrl+'/subject_collection/tv_domestic/items',
    data,
    method:'GET'
  })
}