import request from '@/utils/request'
const api_name = '/staservice/sta'
export default {
  createStatistics(day) {
    return request({
      url: `${api_name}/create/${day}`,
      method: 'post'
    })
  },
  showChart(searchObj) {
    return request({
      url: `${api_name}/show-chart/${searchObj.begin}/${searchObj.end}/${searchObj.type}`,
      method: 'get'
    })
  }
}
