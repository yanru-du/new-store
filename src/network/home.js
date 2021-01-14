import {request} from "./request";

export function getMultidata() {
  return request({
    url:'/home/multidata'
  })
}

export function getListContent(type,page  ) {
  return request({
    url:'/home/data',
    params:{
      type:type,
      page:page,
    }
  })
}
