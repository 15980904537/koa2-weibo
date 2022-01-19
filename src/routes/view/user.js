/**
 * @description user view 路由
 * @author vagabond
 */

const router = require('koa-router')()
const {loginRedirect } =require('../../middleware/loginChecks')
/**
 * 获取用户信息
 * @param {Object} ctx ctx
 */
function getLoginInfo(ctx) {
    const data = {
        isLogin: false,//默认未登录
    }
    const userInfo = ctx.session.userInfo;
    if (userInfo) {
        data = {
            isLogin: true,
            userName: userInfo.userName
        }
    }
    return data
}
router.get('/login', async (ctx,next) => { 
    await ctx.render('login', getLoginInfo(ctx))
})

router.get('/register', async (ctx,next) => { 
    await ctx.render('register', getLoginInfo(ctx))
})
router.get('/setting', loginRedirect, async (ctx, next) => {
    // await ctx.render('setting', ctx.session.userInfo)
    await ctx.render('setting', { userName: 'aa', password: 123456, nickName: 'aa', gender: 3, city:'北京',picture:'./aa'})
})
module.exports=router