/**
 * 供前端接口测试使用
 */
import Mock from 'mockjs'

Mock.mock('http://localhost:8000/user/userLog', {
  'token': '1',
  'LogRes': ' true'
})

Mock.mock('http://localhost:8000/user/Info', {

})
