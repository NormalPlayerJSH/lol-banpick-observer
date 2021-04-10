const {createProxyMiddleware}=require('http-proxy-middleware')

module.exports=function(app){
    app.use(
        '/data',
        createProxyMiddleware({
            target:'http://localhost:7777/data',
            changeOrigin:true
        })
    )
}