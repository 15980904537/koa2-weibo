/**
 * @description user view 路由
 * @author vagabond
 */

const router = require('koa-router')()

router.get('/login', async (ctx,next) => { 
    await ctx.render('login', {})
})

router.get('/register', async (ctx,next) => { 
    await ctx.render('register', {})
})

module.exports=router