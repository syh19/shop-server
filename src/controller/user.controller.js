const { createUser } = require('../service/user.service')
const { userRegisterError } = require('../constant/err.type')
class UserController {
  /**
   * 注册接口
   */
  async register (ctx, next) {
    // 1. 获取接口传入的数据
    const { user_name, password } = ctx.request.body

    // 2. 操作数据库
    try {
      const res = await createUser(user_name, password)
      // 3. 返回结果
      ctx.body = {
        code: 0,
        msg: '用户注册成功',
        data: {
          id: res.id,
          user_name: res.user_name
        }
      }
    } catch (err) {
      console.error(err)
      ctx.app.emit('error', userRegisterError, ctx)
    }
  }

  /**
   * 登录接口
   */
  async login (ctx, next) {
    ctx.body = '用户登录接口'
  }
}

module.exports = new UserController()