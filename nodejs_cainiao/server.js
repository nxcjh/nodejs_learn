var http = require("http");

http.createServer(function(request,response){
	//发送HHTP头部
	//HTTP状态值: 200 : OK
	//内容类型: text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});

	//发送相应数据
	response.end("Hello World\n");

}).listen(8888);

//终端打印如下信息
console.log("Server running at http://127.0.0.1:8888/");


//分析Node.js的HTTP服务器
//1. 第一行请求(require) Node.js自带的HTTP模块, 并且把它赋值给http变量.
//2. 接下来我们调用http模块提供的函数: createServer, 这个函数会返回一个对象, 这个对象有一个叫做listen的方法, 这个方法有一个数值参数, 指定这个HTTP服务器监听的端口号.