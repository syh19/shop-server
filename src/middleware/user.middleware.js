const { getUserInfo } = require('../service/user.service')
const { userFormatError, userAlreadyExists } = require('../constant/err.type')

/**
 * 校验用户信息是否输入正确
 */
const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body
  if (!user_name || !password) {
    console.error('用户名或密码为空', ctx.request.body)
    ctx.app.emit('error', userFormatError, ctx)
    return
  }
  await next()
}

/**
 * 校验用户是否已经存在
 */
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body
  if (await getUserInfo({ user_name })) {
    ctx.app.emit('error', userAlreadyExists, ctx)
    return
  }
  await next()
}
module.exports = {
  userValidator,
  verifyUser
}