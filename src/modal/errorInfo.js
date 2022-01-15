/**
 * @description 失败信息集合 包括errno message
 * @author vagabond
 */

module.exports = {
    registerUserNameNotExistInfo: { errno: 10003, message: '用户名未存在' },
    registerUserNameExistInfo: { errno: 10004, message: '用户名未存在'},
    registerFailInfo: { errno: 10005, message: '注册失败,请重试'}
}