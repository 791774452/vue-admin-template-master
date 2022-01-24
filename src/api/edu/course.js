import request from '@/utils/request'
export default {
  saveCourseInfo(courseInfo) {
    return request({
      url: `/eduservice/course/courseInfo`,
      method: 'post',
      data: courseInfo
    })
  },
  // 2 查询所有讲师
  getListTeacher() {
    return request({
      url: '/eduservice/teacher/findAll',
      method: 'get'
    })
  },

  // 3.根据id查询课程
  getCourseInfo(courseId) {
    return request({
      url: `/eduservice/course/getCourseInfo/${courseId}`,
      method: 'get'
    })
  },

  // 4.修改课程信息
  updateCourseInfo(courseInfo) {
    return request({
      url: '/eduservice/course/updateCourseInfo/' + courseInfo.id,
      method: 'put',
      data: courseInfo
    })
  },

  // 5.根据id查询课程确认信息
  getPublishCourseInfo(id) {
    return request({
      url: '/eduservice/course/getPublishCourseInfo/' + id,
      method: 'get'
    })
  },

  // 6.课程最终发布

  publishCourse(id) {
    return request({
      url: '/eduservice/course/publishCourse/' + id,
      method: 'put'
    })
  },

  // 7.课程列表
  getPublishCourseList(page, limit) {
    return request({
      url: `/eduservice/course/getPublishCourseList/${page}/${limit}`,
      method: 'get'
    })
  },
  // 8.条件查询课程列表
  pageCourseCondition(current, limit, eduCourse) {
    return request({
      url: `/eduservice/course/pageCourseCondition/${current}/${limit}`,
      method: 'post',
      data: eduCourse
    })
  },

  deleteCourse(courseId) {
    return request({
      url: `/eduservice/course/${courseId}`,
      method: 'delete'
    })
  }
}
