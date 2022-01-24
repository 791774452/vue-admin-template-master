import request from '@/utils/request'

export default {
  //  1、讲师列表（条件查询分页）
  getTeacherListPage(current, limit, teacherQuery) {
    return request({
      // url: '/eduservice/edu/pageTeacherCondition/'+current+'/'+limit,
      url: `/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
      method: 'post',
      //  data 表示把对象转换为json进行传递
      data: teacherQuery
    })
  },
  // 删除讲师
  deleteTeacherId(id) {
    return request({
      url: `/eduservice/teacher/${id}`,
      method: 'delete'
    })
  },
  // 添加讲师
  addTeacher(teacher) {
    return request({
      url: `/eduservice/teacher/addTeacher`,
      method: 'post',
      data: teacher
    })
  },
  // 根据id查询讲师
  getTeacherInfo(id) {
    return request({
      url: `/eduservice/teacher/getTeacher/${id}`,
      mode: 'get'
    })
  },
  // 修改讲师
  updateTeacher(teacher) {
    return request({
      url: `/eduservice/teacher/updateTeacher`,
      method: 'post',
      data: teacher
    })
  }
}
