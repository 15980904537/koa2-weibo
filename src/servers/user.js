/**
 * @description user service
 * @author vagabond
 */

const { User } = require('../db/model/index');
const user = require('../controller/user');
const { formatUser}=require('./_format')
/**
 * 
 * @param {string} userName  用户名
 * @param {string} password  密码
 */
async function getUserInfo(userName,password) { 
    //查询条件
    const whereOpt = {
        userName
    }
    if (password) { 
        Object.assign(whereOpt, {password})
    }
    //查询
    const result = await User.findOne({
        attributes: ['id', 'userName', 'nickName', 'picture', 'city'],
        where:whereOpt
    })
    if (result === null) { 
        //未找到
        return result
    }
    const formatRes=formatUser(result.dataValues)
    //格式化
    return formatRes
}

module.exports = {
    getUserInfo
}
