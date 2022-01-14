/**
 * @description test demo
 * @autnor vagabond
 */

const server = require('./server');

test('json 接口返回数据格式是否正确',async () => { 
    const res = await server.get('/json');
    console.log(res)
    expect(res.body).toEqual({
        title: 'koa2 json'
    })
    expect(res.body.title).toBe('koa2 json')
})