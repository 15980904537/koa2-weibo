/**
 * @description user controller
 * @author vagabond
 */

const { getUserInfo } = require('../servers/user')
const { SuccessModal, ErrorModal
} = require('../modal/ResModal');
const { registerUserNameNotExistInfo}=require('../modal/errorInfo')
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

module.exports = {
    isExist
}