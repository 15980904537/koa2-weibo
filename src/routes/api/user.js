/**
 * @description user api 路由
 * @author vagabond
 */

const router = require('koa-router')();
const { isExist, register}=require('../../controller/user')
router.prefix('/api/user')

//注册路由
router.post('/register', async (ctx,next) => { 
    const { userName, password, gender } = ctx.request.body;
    ctx.body = await register({ userName, password, gender})
})
//用户名是否存在
router.post('/isExist', async (ctx, next) => { 
    console.log(ctx.request.body)
    const { userName } = ctx.request.body;
    console.log(userName)
    ctx.body = await isExist(userName);
})

module.exports=router