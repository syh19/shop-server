const Router = require('koa-router')

const { userValidator, verifyUser, bcryptPassword } = require('../middleware/user.middleware')

const { register, login } = require('../controller/user.controller')

const router = new Router({ prefix: '/users' })

// 当访问/register路由时，依次执行中间件，只有当上一个中间件通过后才会执行下一个
router.post('/register', userValidator, verifyUser, bcryptPassword, register)

router.post('/login', login)

module.exports = router