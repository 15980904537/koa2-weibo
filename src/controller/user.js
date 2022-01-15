/**
 * @description user controller
 * @author vagabond
 */

const { getUserInfo, createUser} = require('../servers/user')
const { SuccessModal, ErrorModal
} = require('../modal/ResModal');

const { doCryto}=require('../utils/cryp')
const { registerUserNameNotExistInfo, registerUserNameExistInfo, registerFailInfo, loginFileInfo}=require('../modal/errorInfo');
const user = require('../servers/user');
/**
 * 
 * @param {string} userName  用户名
 */
async function isExist(userName) { 
    let userInfo = await getUserInfo(userName);
    if (userInfo) {
        //用户已存在
        return new SuccessModal(userInfo)
    } else { 
        //用户未存在
        return new ErrorModal(registerUserNameNotExistInfo)
    }

}

/**
 * 
 * @param {Object} param0 注册信息
 */
async function register({ userName,password,gender}) { 
    let userInfo = await getUserInfo(userName);
    if (userInfo) { 
        //用户名已存在
        return new ErrorModal(registerUserNameExistInfo)
    }
    //注册service
    try { 
        await createUser({
            userName, password:doCryto(password), gender
        });
        return new SuccessModal()
    } catch(ex){ 
        return new ErrorModal(registerFailInfo)
    }
    
}

/**
 * 
 * @param {Object} ctx koa2 ctx
 * @param {string} userName  用户名
 * @param {string} password  密码
 */
async function login(ctx,userName,password) { 
    let userInfo = await getUserInfo(userName, doCryto(password));
    if (!userInfo) { 
        return new ErrorModal(loginFileInfo)
    }
    //登录成功
    if (ctx.session.userInfo===null) { 
        ctx.session.userInfo = userInfo;
    }
    return new SuccessModal();

}
module.exports = {
    isExist,
    register,
    login
}