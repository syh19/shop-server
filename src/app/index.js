const Koa = require('koa')
const { koaBody } = require('koa-body')

const errHandler = require('./errHandler')

const userRouter = require('../router/user.route')

const app = new Koa()

app.use(koaBody())
app.use(userRouter.routes()).use(userRouter.allowedMethods())


// 最后进行统一的错误处理
app.on('error', errHandler)

module.exports = app