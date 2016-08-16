一. 快速创建基于npm的nodejs库

1. npm是什么?
	NPM的全称是: 是一个NodeJS包管理和分发工具, 已经成为了非官方的发布Node模块的标准.
	Nodejs自身提供了基本的模块，但是开发实际应用过程中仅仅依靠这些基本模块则还需要较多的工作。幸运的是，Nodejs库和框架为我们提供了帮助，让我们减少工作量。但是成百上千的库或者框架管理起来又很麻烦，有了NPM，可以很快的找到特定服务要使用的包，进行下载、安装以及管理已经安装的包。

	类似于Java中的Maven，Ubuntu中的apt-get, Ruby中的Gem, Python中pypi等…

	NPM 模块发布页: https://npmjs.org/

2. 快速创建包
	项目描述: 读取文件, 把所有的大写文字转换成小写文字, 控制台输出.
	系统环境:
		-> 


    2.1 创建项目
	  	--> nodejs-package
	  		--> bin
	  			-->lowercase
	  			-->lowercase.sh
	  		--> test
	  			--> sample.txt
	  	--> example.js
	  	-->lowercase.js
	  	-->package.json
	  	-->README.md

    2.2 项目结构说明
	  	-> bin目录: 用于存放命令的目录
	  	-> bin/lowercase文件: linux命令行可执行文件
	  	-> bin/lowercase.bat文件: Win命令行可执行文件
	  	-> test目录: 用于存放测试代码的目录
	  	-> test/data目录: 用于存放测试数据的目录
	  	-> test/data/sample.txt: 测试数据文件
	  	-> lowercase.js文件: 核心功能代码文件
	  	-> example.js文件: 例子代码文件
	  	-> package.json文件: 项目描述及依赖文件
	  	-> README.md文件: 项目说明文件

    2.3 创建文件: package.json
  		kingdeMacBook-Pro:nodejs-package aimei02132$ npm init
		This utility will walk you through creating a package.json file.
		It only covers the most common items, and tries to guess sensible defaults.

		See `npm help json` for definitive documentation on these fields
		and exactly what they do.

		Use `npm install <pkg> --save` afterwards to install a package and
		save it as a dependency in the package.json file.

		Press ^C at any time to quit.
		name: (nodejs-package) lowercase
		version: (1.0.0) 0.0.1
		description: A demo package
		entry point: (example.js) 
		test command: 
		git repository: 
		keywords: 
		author: Xiaomai
		license: (ISC) MIT
		About to write to /Users/aimei02132/git/nodejs_learn/npm/demo/nodejs-package/package.json:

		{
		  "name": "lowercase",
		  "version": "0.0.1",
		  "description": "A demo package",
		  "main": "example.js",
		  "directories": {
		    "test": "test"
		  },
		  "scripts": {
		    "test": "echo \"Error: no test specified\" && exit 1"
		  },
		  "author": "Xiaomai",
		  "license": "MIT"
		}


		Is this ok? (yes) yes

    2.3.1 修改文件: package.json

		{
		  "name": "lowercase",
		  "version": "0.0.1",
		  "description": "A demo package",
		  "keywords":[
		      "demo","lowercase"
		  ],
		  "author": "Xiaomai",
		  "license": "MIT",
		  "main": "example.js",
		  "directories": {
		    "test": "test"
		  },
		  "scripts": {
		    "test": "echo \"Error: no test specified\" && exit 1"
		  },
		  "repository":{
		      "type":"git",
		      "url":"https://github.com/nxcjh/lowercase_demo.git"

		  },
		  "engines":{
		      "node":">=v0.10.5"

		  },
		  "readmeFilename":"README.md"
		}

    2.4 编辑文件: lowercase.js
			"use strict"
			var fs = require('fs');

			exports.lowerCase = function(myfile){
				console.log(myfile);

				if(fs.existsSync(myfile)){
					var content = fs.readFileSync(myfile,'utf8');
					console.log(content.tolowerCase());
				}else{
					console.log("File does not exists - " + myfile);
				}
			}

	2.5 编辑文件: example.js
		"use strict"

		var lowercase = require('./lowercase.js');
		var myfile = "test/data/sample.txt";
		lowercase.lowerCase(myfile);

	2.6 编辑文件: test/data/sample.txt
		JAVA
		NODEJS
		PYTHON
		PHP
		.NET
		R
		RUBY
		C
		C++
		GO

	2.7 运行: example.js
		kingdeMacBook-Pro:nodejs-package aimei02132$ node example.js 
		test/data/sample.txt
		java
		nodejs
		python
		php
		.net
		r
		ruby
		c
		c++
		go

	2.8 编辑文件 README.md

		lowercase
		========================

		A demo package of lowercase

		```{bash}
		npm install lowercase_demo
		```

		## author

		xiaomai,

		## License

		MIT
3. 创建命令行工具

	3.1 编辑文件: bin/lowercase
		#!/usr/bin/env node

		var myfile = process.argv.slice(2);

		var path = require('path');
		var fs = require('fs');
		var dir = path.dirname(fs.readpathSync(__filename))+"/../";
		require(dir+'lowercase.js').lowerCase(dir+myfile);	


	3.2 编辑文件: bin/lowercase.bat
		node.exe bin/lowercase %1

	3.3 运行lowercase.sh

		kingdeMacBook-Pro:nodejs-package aimei02132$ bin//lowercase.sh test/data/sample.txt 
		/Users/aimei02132/git/nodejs_learn/npm/demo/nodejs-package/bin/../test/data/sample.txt
		java
		nodejs
		python
		php
		.net
		r
		ruby
		c
		c++
		go
		kingdeMacBook-Pro:nodejs-package aimei02132$ 		


4. 本地安装loewrcase包
	
	4.1 新建项目, 并安装lowercase 依赖库


后续: http://blog.fens.me/nodejs-npm-package/




