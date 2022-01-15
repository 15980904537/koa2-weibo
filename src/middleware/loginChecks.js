/**
 * @description 登录验证的中间件
 * @author vagabond
 */

const { ErrorModal } = require("../modal/ResModal");
const { loginCheckFailInfo}=require('../modal/errorInfo')
 /**
  * api登录验证
  * @param {Object} ctx 
  * @param {function} next 
  */
async function loginChecks(ctx,next) {
    if (ctx.session&&ctx.session.userInfo) { 
        //已登录
        await next();
        return
    } 
    //未登录
    return ctx.body = new ErrorModal(loginCheckFailInfo)
}   
 
/**
  * 页面登录验证
  * @param {Object} ctx
  * @param {function} next
  */
async function loginRedirect(ctx,next) {
    if (ctx.session && ctx.session.userInfo) {
        //已登录
        await next();
        return
    }
    //未登录
    const curUrl = ctx.url;
    ctx.redirect('/login?url=' + encodeURIComponent(curUrl));
}
 
module.exports = {
    loginChecks,
    loginRedirect
}