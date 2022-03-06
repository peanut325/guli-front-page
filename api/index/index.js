import request from '@/utils/request'
export default {
    // 查询显示在首页的课程和讲师
    getList() {
        return request({
            url: `/eduservice/index/index`,
            method: 'get'
        })
    }
}