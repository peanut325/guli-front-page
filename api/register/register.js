import request from '@/utils/request'
export default {
    // 注册账号
    register(registerVO) {
        return request({
            url: `/ucenterservice/ucenter-member/register`,
            method: 'post',
            data: registerVO
        })
    },
    // 发送验证码
    sendMessage(phone) {
        return request({
            url: `/msmservice/msm-msgservice/send/${phone}`,
            method: 'get'
        })
    }
}