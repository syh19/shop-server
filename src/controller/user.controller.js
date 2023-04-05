const { createUser } = require('../service/user.service')
class UserController {
  /**
   * 注册接口
   */
  async register (ctx, next) {
    // 1. 获取接口传入的数据
    const { user_name, password } = ctx.request.body
    // 2. 操作数据库
    const res = await createUser(user_name, password)
    // 3. 返回结果
    ctx.body = res
  }

  /**
   * 登录接口
   */
  async login (ctx, next) {
    ctx.body = '用户登录接口'
  }
}

module.exports = new UserController()