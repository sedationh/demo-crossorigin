const Koa = require("koa")
const serve = require("koa-static")
const path = require("path")

const addCors = async (ctx, next) => {
  // 设置 Access-Control-Allow-Origin: *
  ctx.set("Access-Control-Allow-Origin", "*")
  await next()
}

const frontKoa = new Koa()
frontKoa.use(serve(path.join(__dirname, "/front")))
frontKoa.listen(3000)

const handleErrorKoa = new Koa()
handleErrorKoa.use(addCors)
handleErrorKoa.use(serve(path.join(__dirname, "/handle-error")))
handleErrorKoa.listen(4000)

const otherOriginErrorKoa = new Koa()
otherOriginErrorKoa.use(addCors)
otherOriginErrorKoa.use(serve(path.join(__dirname, "./other-origin-error")))
otherOriginErrorKoa.listen(6001)
