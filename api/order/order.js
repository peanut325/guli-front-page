import request from '@/utils/request'
export default {
    // 保存订单
    saveOrder(courseId) {
        return request({
            url: `/orderservice/order/saveOrder/${courseId}`,
            method: 'post'
        })
    },
    // 获取订单详情
    getOrder(orderNo) {
        return request({
            url: `/orderservice/order/getOrderInfoByOrederNo/${orderNo}`,
            method: 'get'
        })
    }
}