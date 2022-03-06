import request from '@/utils/request'
export default {
    // 获取视频凭证
    getPlayAuth(videoId) {
        return request({
            url: `/eduvod/video/getPlayAuth/${videoId}`,
            method: 'get'
        })
    }
}