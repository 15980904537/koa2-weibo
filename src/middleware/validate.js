/**
 * @description json schema 验证中间件
 * @author vagabond
 */
const { ErrorModal}=require('../modal/ResModal')
const { jsonSchemaFileInfo}=require('../modal/errorInfo')

/**
 * 生产json schema 验证中间件
 * @param {function} userValidate 验证函数
 */
function genValidator(ValidateFn) { 
    async function validator(ctx, next) { 
        let data = ctx.request.body;
        let error = ValidateFn(data);
        if (error) {
            //验证失败
            ctx.body = new ErrorModal(jsonSchemaFileInfo)
            return
        } 
        await next();
    }
    return validator
}

module.exports = {
    genValidator
}
