import request from '@/utils/request'
export default {
    // 登录账号
    login(loginVO) {
        return request({
            url: `/ucenterservice/ucenter-member/login`,
            method: 'post',
            data: loginVO
        })
    },
    // 通过token获取用户的信息
    getLoginInfo() {
        return request({
            url: `/ucenterservice/ucenter-member/getLoginInfo`,
            method: 'get'
        })
    }
}