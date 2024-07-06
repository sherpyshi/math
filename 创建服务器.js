
let http =require('http')
// 创建sever服务器
let server =http.createServer()
// 监听对当前服务器的请求
server.on('request',function(req,res){
    // 当服务器被请求时 会触发请求事件 并传入请求对象和响应对象
    // console.log(req)
    // console.log(req.url)
    // console.log(req.headers)
    res.setHeader("Content-Type","text/html;charset=UTF-8")
    //根据路径信息 显示不同的页面内容
    if(req.url=='/'){
        res.end('首页')
    } else if(req.url=='/gnxw'){
        res.end('国内新闻')
    }else if(req.url=='/ylxw'){
        res.end('娱乐新闻')
    }else {
        res.end('404!页面找不到')
    }
    res.end('helloworld')
    
})
// 服务器监听的端口号 80 默认端口
server.listen(3000,function(){
    // 启动监听端口号成功时触发
    console.log('服务器启动成功') 
})