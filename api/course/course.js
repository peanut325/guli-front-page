import request from '@/utils/request'
export default {
    // 条件分页查询讲师
    getPageTeacher(currentPage, limit , courseVO) {
        return request({
            url: `/eduservice/front-course/getPageCourseByCondition/${currentPage}/${limit}`,
            method: 'post',
            data: courseVO
        })
    },
    // 查询所有分类
    getSubjectAll() {
        return request({
            url: `/eduservice/edu-subject/listSubject`,
            method: 'get'
        })
    },
    // 根据课程id查询课程的相关信息
    getFrontBaseCourse(courseId) {
        return request({
            url: `/eduservice/front-course/getFrontBaseCourse/${courseId}`,
            method: 'get'
        })
    }
}