import request from '@/utils/request'
export default {
    // 分页查询讲师
    getPageTeacher(currentPage, limit) {
        return request({
            url: `/eduservice/front-teacher/pageTeacher/${currentPage}/${limit}`,
            method: 'get'
        })
    },
    // 查询讲师详情
    getTeacherInfoById(teacherId) {
        return request({
            url: `/eduservice/front-teacher/getTeacherInfoById/${teacherId}`,
            method: 'get'
        })
    }
}