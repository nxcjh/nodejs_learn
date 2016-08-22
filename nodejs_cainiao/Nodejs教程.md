
1. Node.js 回调函数

node.js 异步编程的直接体现就是回调.
异步编程依托于回调来实现, 但不能说使用了回调后程序就异步化了.
回调函数在完成任务后就会被调用, node使用了大量的回调函数, Node所有API都支持回调函数.

阻塞代码实例:
1. 创建input,txt, 内容如下:
菜鸟教程官网地址：www.runoob.com

readFileSync.js, 代码如下:
var fs = require('fs');

var date = fs.readFileSync('input.txt');

console.log(data.toString);
console.log("程序执行结束");

非阻塞代码实例
创建readFile.js, 代码如下:
var fs = require('fs');

fs.readFile('input.txt',function(err,data){
	if(err) return console.error(err);
	console.log(data.toString);

});
console.log("程序执行结束");


Node.js 事件循环
Node.js 是单进程单线程应用程序, 但是通过事件和回调支持并发, 所以性能非常高.
Node.js 的每一个API都是异步的, 并作为一个独立线程运行, 使用异步函数调用, 并处理并发.
Node.js 基本上所有的事件机制都是用设计模式中观察者实现.
Node.js 单线程类似进入一个while(true)的事件循环, 直到没有事件观察者退出, 每个异步事件都生成一个事件观察者, 如果有事件发生就调用该回调函数.



Node.js 有多个内置的事件, 我们可以通过引入events模块, 并通过实例化EventEmitter类来绑定和监听事件, 如下实例:
//引入events模块
var events = require('events');
//创建eventEmitter 对象
var eventEmitter = new events.EventEmitter();

以下程序绑定事件处理程序:
//绑定事件及事件的处理程序
eventEmitter.on('eventName',eventHandler);

//触发事件
eventEmitter.emit('eventName');


实例
创建event_main.js, 代码如下:
// node.js 事件驱动程序 实例

//引入events模块
var events = require("events");
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function connnected(){
	console.log("链接成功..");

	//触发data_received 事件
	eventEmitter.emit('data_received');
}

//绑定connection 事件处理程序
eventEmitter.on('connection',connectHandler);

//使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received',function(){
	console.log("数据接收成功...");
});



//触发connection事件
eventEmitter.emit('connection');

console.log("程序执行完毕!");

Node应用程序是如何工作的?
在Node应用程序中, 执行异步操作的函数将回调函数作为最后一个参数, 回调函数接收错误对象作为第一个参数, 下面我们重新来看前面的实例.

var fs = require("fs");

fs.readFile('input.txt',function(err,data){
	if(err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});
console.log("程序执行完毕");


Node.js EventEmitter
Node.js 所有的异步I/O操作在完成时都会发送一个事件到事件队列.
Node.js 里面的许多对象都会分发事件: 一个net.Server对象会在每次有新连接时分发一个事件, 一个fs.readStream对象会在文件被打开的时候发出一个事件, 所有这些事件的对象都是events.EventEmitter的实例.

EventEmitter 类
events模块只提供了一个对象: events.EventEmitter. EventEmitter 的核心就是事件触发与事件监听器功能的封装.
你可以通过require("events")来访问该模块.

//引入events模块
var events = require("events");
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

EventEmitter对象如果在实例化时发生错误, 会触发"error"事件, 当添加新的监听器时, "newListener"事件会触发, 当监听器被移除时, "removeListener"事件被触发.

e.g
//event.js 文件
var EventEmitter = require("events").EventEmitter;
var event = new EventEmitter();
event.on("some_event",function(){
	console.log("some_event事件触发");
});

setTimeout(function(){
	event.emit("some_event");
},1000);

执行结果如下：
运行这段代码，1 秒后控制台输出了 'some_event 事件触发'。其原理是 event 对象注册了事件 some_event 的一个监听器，然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，此时会调用some_event 的监听器。



EventMitter的每个事件有一个事件名和若干个参数组成, 事件名是一个字符串, 通常表达一定的语义. 对于每个事件, EventEmitter支持若干个事件监听器.
当事件触发时, 注册到这个事件的事件监听器被一次调用, 事件参数作为回调函数参数传递.

下面举例解释:
//event2.js 文件
var events = require("events");
var emitter = new events.EventEmitter();
emitter.on("someEvent",function(arg1,arg2){
	console.log("listener1",arg1,arg2);
});

emitter.on("someEvent",function(arg1,arg2){
	console.log("listener2",arg2,arg1);
});

emitter.emit("someEvent","arg1参数","arg2参数");

以上例子中，emitter 为事件 someEvent 注册了两个事件监听器，然后触发了 someEvent 事件。
运行结果中可以看到两个事件监听器回调函数被先后调用。 这就是EventEmitter最简单的用法。
EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件。接下来我们来具体看下 EventEmitter 的属性介绍。

var events = require("events");
var eventEmitter = new events.EventEmitter();

//监听器1
var listener1 = function listener1(){
	console.log("监听器listener1执行");
}

//监听器2
var listener2 = function listener2(){
	console.log("监听器listener2执行");
}

//绑定connection时间, 处理函数为listener1
eventEmitter.addListener("connection",listener1);
//绑定connection 时间, 处理函数为listener2
eventEmitter.addListener("connection",listener2);

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "个监听器链接事件");

//处理connection
eventEmitter.emit("connection");
//移除绑定监听的listener1函数
eventEmitter.removeListener("connection",listener1);
console.log("listener1 不再监听");

//触发链接事件
eventEmitter.emit("connection");

var eventListeners = require("events").EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + "个监听器链接事件");

console.log("程序执行完毕");


集成EventEmitter
大多时候我们不会直接使用EventMitter, 而是在对象中继承它, 包括fs, net, htttp在内的, 只要支持事件响应的核心模块都是EventEmitter的子类.
为什么要这样做呢? 有两个原因:
首先, 具有摸个实体功能的对象实现事件符合语义, 事件的监听和发射应该是一个对象的方法.
其次, JavaScript的对象机制是基于原型的, 支持部分多重继承, 继承EventMitter不会打乱原有的继承关系.

