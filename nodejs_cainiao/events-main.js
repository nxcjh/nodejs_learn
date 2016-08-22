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