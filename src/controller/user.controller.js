const { createUser, getUserInfo } = require('../service/user.service')
class UserController {
  /**
   * 注册接口
   */
  async register (ctx, next) {
    // 1. 获取接口传入的数据
    const { user_name, password } = ctx.request.body
    /**
     * 错误处理
     * 1. 合法性
     * 2. 合理性
     */
    // 1. 合法性
    if (!user_name || !password) {
      console.error('用户名或密码为空', ctx.request.body)
      ctx.status = 400
      ctx.body = {
        code: 10001,
        msg: '用户名或密码为空',
        data: null
      }
      return
    }
    // 2. 合理性
    if (await getUserInfo({ user_name })) {
      // 资源冲突
      ctx.status = 409
      ctx.body = {
        code: 10002,
        msg: '用户已经存在',
        data: null
      }
      return
    }
    // 2. 操作数据库
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
  }

  /**
   * 登录接口
   */
  async login (ctx, next) {
    ctx.body = '用户登录接口'
  }
}

module.exports = new UserController()