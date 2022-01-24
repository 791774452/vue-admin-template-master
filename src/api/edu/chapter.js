import request from '@/utils/request'
export default {

  // 定义查询后端的APi方法

  // 根据课程id获取章节和小节数据列表

  getAllChapterVideo(courseId) {
    return request(
      {
        url: `/eduservice/chapter/getChapterVideo/${courseId}`,
        method: 'get'
      }
    )
  },

  // 添加章节
  addChapter(chapter) {
    return request({
      url: '/eduservice/chapter/addChapter',
      method: 'post',
      data: chapter
    })
  },

  // 根据id查询章节
  getChapterById(chapterId) {
    return request({
      url: '/eduservice/chapter/getChapterInfo/' + chapterId,
      method: 'get'
    })
  },

  // 修改章节
  updateChapter(chapter) {
    return request({
      url: '/eduservice/chapter/updateChapter/' + chapter.id,
      method: 'put',
      data: chapter
    })
  },

  // 删除章节
  deleteChapterById(chapterId) {
    return request({
      url: '/eduservice/chapter/' + chapterId,
      method: 'delete'
    })
  }
}
