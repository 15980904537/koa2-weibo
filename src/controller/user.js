/**
 * @description user controller
 * @author vagabond
 */

const { getUserInfo, createUser} = require('../servers/user')
const { SuccessModal, ErrorModal
} = require('../modal/ResModal');

const { doCryto}=require('../utils/cryp')
const { registerUserNameNotExistInfo, registerUserNameExistInfo,registerFailInfo}=require('../modal/errorInfo')
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

module.exports = {
    isExist,
    register
}