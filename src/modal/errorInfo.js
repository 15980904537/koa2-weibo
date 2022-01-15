/**
 * @description 失败信息集合 包括errno message
 * @author vagabond
 */

module.exports = {
    registerUserNameNotExistInfo: { errno: 10003, message: '用户名未存在' },
    registerUserNameExistInfo: { errno: 10004, message: '用户名未存在'},
    registerFailInfo: { errno: 10005, message: '注册失败,请重试'},
    jsonSchemaFileInfo: { errno: 10006, message: '数据格式校验错误'},
    loginFileInfo: { errno: 10006, message: '登录失败,用户名或者密码错误'}
}