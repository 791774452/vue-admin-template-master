import request from '@/utils/request'
export default {

  // 定义查询后端的APi方法

  // 添加小节
  addVideo(video) {
    return request({
      url: '/eduservice/video/addVideo',
      method: 'post',
      data: video
    })
  },

  // 更新小节
  updateVideo(video) {
    return request({
      url: '/eduservice/video/updateVideo',
      method: 'put',
      data: video
    })
  },

  // 删除小节
  deleteVedioById(videoId) {
    return request({
      url: '/eduservice/video/' + videoId,
      method: 'delete'
    })
  },

  // 根据id查询小节
  getVideoById(videoId) {
    return request({
      url: '/eduservice/video/' + videoId,
      method: 'get'
    })
  },

  // 删除视频
  deleteAliyunvod(id) {
    return request({
      url: '/eduvod/video/removeVideo/' + id,
      method: 'delete'
    })
  }

}
