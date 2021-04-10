const proxy=require('http-proxy-middleware')

module.exports=function(app){
    app.use(
        '/data',
        proxy({
            target: 'http://localhost:7777',
            changeOrigin: true,
        })
    )
}