/**
 * @description 存储配置
 * @author vagabond
 */

const { isProd}=require('../utils/env')
let REDIS_CONF = {
    port: 6379,
    host:'127.0.0.1'
}
let MYSQL_CONF = {
    host: 'location',
    
    user: 'root',
    port: 3306,
    password: 'zhm123456',
    database:'koa2_weibo_db'
}
if (isProd) { 
    //线上的redis配置
    REDIS_CONF = {
        port: 6379,
        host: '127.0.0.1'
    }
    //线上的mysql配置
    MYSQL_CONF = {
        host: 'location',
        user: 'root',
        port: 3306,
        password: 'zhm123456',
        database: 'koa2_weibo_db'
    }
}
module.exports = {
    REDIS_CONF,
    MYSQL_CONF
}