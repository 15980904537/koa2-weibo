/**
 * @description 加密方法
 * @author vagabond
 */


const crypto = require('crypto');
const { CRYPTO_SECRET_KEY}=require('../conf/secretKeys')
//密钥
const SECRET_KEY = CRYPTO_SECRET_KEY;


/**
 * md5 明文加密
 * @param {string} content 明文
 */
function _md5(content) { 
    const md5 = crypto.createHash('md5');
    return md5.update(content).digest('hex');
}

/**
 * 加密方法
 * @param {string} content 明文
 */
function doCryto(content) { 
    const str = `password=${content}&key=${SECRET_KEY}`;
    return _md5(str);
}

module.exports = {
    doCryto
}