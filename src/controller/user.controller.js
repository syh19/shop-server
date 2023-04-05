class UserController {
  /**
   * 注册接口
   */
  async register(ctx, next) {
    console.log('注册接口', ctx.request.body)
    ctx.body = ctx.request.body
  }

  /**
   * 登录接口
   */
  async login(ctx, next) {
    ctx.body = '用户登录接口'
  }
}

module.exports = new UserController()