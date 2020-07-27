import { request } from "./request"

export function getHomeMultidata() {
  return request({
    url: '/test/getBanners'
  })
}