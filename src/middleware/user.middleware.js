const { getUserInfo } = require('../service/user.service')
const { userFormatError, userAlreadyExists, userRegisterError } = require('../constant/err.type')

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

  // 涉及到数据库操作的，一定要用try-catch进行包裹，以便统一捕获异常错误
  try {
    const res = await getUserInfo({ user_name })
    if (res) {
      console.error('用户名已存在', { user_name })
      ctx.app.emit('error', userAlreadyExists, ctx)
      return
    }
  } catch (err) {
    console.error('获取用户信息错误', err)
    ctx.app.emit('error', userRegisterError, ctx)
    return
  }
  await next()
}
module.exports = {
  userValidator,
  verifyUser
}