/**
 * @description 连接redis的方法get set
 * @author vagabond
 */

const redis = require('redis')
const { REDIS_CONF } = require('../conf/db')


//创建客户端
const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);

redisClient.on('error', err => { 
    console.error('redis error',err)
})

/**
 * redis set
 * @param {string} key 
 * @param {string} val 
 * @param {number} timout  过期时间
 */
function set(key,val,timout=60*60) { 
    if (typeof val === 'object') { 
        val = JSON.stringify(val);
    }
    redisClient.set(key, val);
    redisClient.expire(key,timout)
}
/**
 * redis get
 * @param {string} key 
 */
function get(key) { 
    const promise = new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) { 
                reject(err);
                return 
            }
            if (val === null) {
                resolve(null);
                return
            }
            try {
                resolve(JSON.parse(val))
            } catch { 
                resolve()
             }
        })
        
    })
    return promise
}

module.exports = {
    set,
    get
}