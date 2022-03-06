import request from '@/utils/request'
export default {
  getList() {
    return request({
      url: `/cmsservice/crm-banner-front/getAllBanner`,
      method: 'get'
    })
  }
}