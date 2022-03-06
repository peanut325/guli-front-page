import request from '@/utils/request'
export default {
    getPageComment(currentPage, limit, courseId) {
        return request({
            url: `/eduservice/edu-comment/getPageComment/${currentPage}/${limit}/${courseId}`,
            method: 'get'
        })
    },
    saveComment(comment) {
        return request({
            url: `/eduservice/edu-comment/saveComment`,
            method: 'post',
            data: comment
        })
    }
}