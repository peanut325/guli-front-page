import request from '@/utils/request'
export default {
    // 生成二维码
    createNative(orderId) {
        return request({
            url: `/orderservice/pay-log/createNative/${orderId}`,
            method: 'get'
        })
    },
    // 进行支付
    getOrderStatus(orderId) {
        return request({
            url: `/orderservice/pay-log/getOrderStatus/${orderId}`,
            method: 'get'
        })
    }
}