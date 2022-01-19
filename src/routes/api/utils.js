/**
 * @description utils API 路由
 * @author vagabond
 */

const router = require('koa-router')()
const { loginChecks } = require('../../middleware/loginChecks');
const koaForm = require('formidable-upload-koa');
const {saveFile }=require('../../controller/utils')
router.prefix('/api/utils')
router.post('/upload', loginChecks, koaForm(), async (ctx,next) => { 
    const file = ctx.request.files['file'];
    const { size, path, name, type } = file;
    
    ctx.body = await saveFile({ size, filePath: path, name, type })
})
module.exports=router