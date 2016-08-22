
NPM使用介绍
NPM是随同Node.js 一起安装的包管理工具, 能解决Node.js代码部署上的很多问题.

1. 使用NPM命令安装模块
npm安装Node.js模块语法格式如下:
$ npm install <Module Name>

e.g 我们使用npm命令安装常用的Node.js web框架模块 Express:
$ npm install express

安装好后, express包就放在了工程目录下的"node_modules"目录下, 因此在代码中只需要通过require('express')的方式就好, 无需指定第三方包路径.
 var express = require('express');

2. 全局安装与本地安装
npm的包安装分为本地安装(local), 全局安装(global)两种, 从敲的命令行来看, 差别只是有没有-g而已, 比如:
$ npm install express #本地安装
$ npm install express -g # 全局安装


如果出现以下错误：
npm err! Error: connect ECONNREFUSED 127.0.0.1:8087
解决办法为:
$ npm config set proxy null


本地安装
* 1. 将安装包放在./node_modules 下(运行npm命令时所在的目录), 如果没有node_modules目录, 会在当前执行npm命令的目录下生成node_modules目录.
* 2. 可以通过require()来引入本地安装的包.

全局安装
* 1. 将安装包放在/usr/local 下或者你node 的安装目录.
* 2. 可以直接在命令行里使用.

如果你希望具备两者功能, 则需要在两个地方安装它或使用npm link


e.g 使用全局的方式安装express

$ npm install express 
安装过程输出如下内容, 第一行输出了模块的版本号和安装位置:
/usr/local/lib
└─┬ express@4.14.0 
  ├─┬ accepts@1.3.3 
  │ ├─┬ mime-types@2.1.11 
  │ │ └── mime-db@1.23.0 
  │ └── negotiator@0.6.1 
  ├── content-type@1.0.2 
  ├── cookie@0.3.1 
  ├── encodeurl@1.0.1 
  ├─┬ finalhandler@0.5.0 
  │ └── statuses@1.3.0 
  ├─┬ proxy-addr@1.1.2 
  │ └── ipaddr.js@1.1.1 
  ├── qs@6.2.0 
  ├── range-parser@1.2.0 
  ├─┬ send@0.14.1 
  │ └─┬ http-errors@1.5.0 
  │   └── setprototypeof@1.0.1 
  ├── serve-static@1.11.1 
  ├── type-is@1.6.13 
  └── vary@1.1.0 

你可以使用以下命令来查看所有全局安装的模块:
$ npm ls -g


使用package.json

package.json 位于模块的目录下, 用于定义包的属性, 接下来我们看一下express包的package.json 文件, 为与node_modules/express/package.json 内容:


{
  "_args": [
    [
      "express",
      ""
    ]
  ],
  "_from": "express@latest",
  "_id": "express@4.14.0",
  "_inCache": true,
  "_installable": true,
  "_location": "/express",
  "_npmOperationalInternal": {
    "host": "packages-12-west.internal.npmjs.com",
    "tmp": "tmp/express-4.14.0.tgz_1466095407850_0.17484632693231106"
  },
  "_npmUser": {
    "email": "doug@somethingdoug.com",
    "name": "dougwilson"
  },
  "_npmVersion": "1.4.28",
  "_phantomChildren": {},
  "_requested": {
    "name": "express",
    "raw": "express",
    "rawSpec": "",
    "scope": null,
    "spec": "latest",
    "type": "tag"
  },
  "_requiredBy": [
    "#USER"
  ],
  "_resolved": "https://registry.npmjs.org/express/-/express-4.14.0.tgz",
  "_shasum": "c1ee3f42cdc891fb3dc650a8922d51ec847d0d66",
  "_shrinkwrap": null,
  "_spec": "express",
  "_where": "",
  "author": {
    "email": "tj@vision-media.ca",
    "name": "TJ Holowaychuk"
  },
  "bugs": {
    "url": "https://github.com/expressjs/express/issues"
  },
  "contributors": [
    {
      "email": "aaron.heckmann+github@gmail.com",
      "name": "Aaron Heckmann"
    },
    {
      "email": "ciaranj@gmail.com",
      "name": "Ciaran Jessup"
    },
    {
      "email": "doug@somethingdoug.com",
      "name": "Douglas Christopher Wilson"
    },
    {
      "email": "rauchg@gmail.com",
      "name": "Guillermo Rauch"
    },
    {
      "email": "me@jongleberry.com",
      "name": "Jonathan Ong"
    },
    {
      "email": "shtylman+expressjs@gmail.com",
      "name": "Roman Shtylman"
    },
    {
      "email": "hanul@hanul.me",
      "name": "Young Jae Sim"
    }
  ],
  "dependencies": {
    "accepts": "~1.3.3",
    "array-flatten": "1.1.1",
    "content-disposition": "0.5.1",
    "content-type": "~1.0.2",
    "cookie": "0.3.1",
    "cookie-signature": "1.0.6",
    "debug": "~2.2.0",
    "depd": "~1.1.0",
    "encodeurl": "~1.0.1",
    "escape-html": "~1.0.3",
    "etag": "~1.7.0",
    "finalhandler": "0.5.0",
    "fresh": "0.3.0",
    "merge-descriptors": "1.0.1",
    "methods": "~1.1.2",
    "on-finished": "~2.3.0",
    "parseurl": "~1.3.1",
    "path-to-regexp": "0.1.7",
    "proxy-addr": "~1.1.2",
    "qs": "6.2.0",
    "range-parser": "~1.2.0",
    "send": "0.14.1",
    "serve-static": "~1.11.1",
    "type-is": "~1.6.13",
    "utils-merge": "1.0.0",
    "vary": "~1.1.0"
  },
  "description": "Fast, unopinionated, minimalist web framework",
  "devDependencies": {
    "after": "0.8.1",
    "body-parser": "~1.15.1",
    "connect-redis": "~2.4.1",
    "cookie-parser": "~1.4.3",
    "cookie-session": "~1.2.0",
    "ejs": "2.4.2",
    "express-session": "~1.13.0",
    "istanbul": "0.4.3",
    "jade": "~1.11.0",
    "marked": "0.3.5",
    "method-override": "~2.3.6",
    "mocha": "2.5.3",
    "morgan": "~1.7.0",
    "multiparty": "~4.1.2",
    "should": "9.0.2",
    "supertest": "1.2.0",
    "vhost": "~3.0.2"
  },
  "directories": {},
  "dist": {
    "shasum": "c1ee3f42cdc891fb3dc650a8922d51ec847d0d66",
    "tarball": "https://registry.npmjs.org/express/-/express-4.14.0.tgz"
  },
  "engines": {
    "node": ">= 0.10.0"
  },
  "files": [
    "LICENSE",
    "History.md",
    "Readme.md",
    "index.js",
    "lib/"
  ],
  "gitHead": "9375a9afa9d7baa814b454c7a6818a7471aaef00",
  "homepage": "http://expressjs.com/",
  "keywords": [
    "express",
    "framework",
    "sinatra",
    "web",
    "rest",
    "restful",
    "router",
    "app",
    "api"
  ],
  "license": "MIT",
  "maintainers": [
    {
      "email": "doug@somethingdoug.com",
      "name": "dougwilson"
    },
    {
      "email": "captain@hacksparrow.com",
      "name": "hacksparrow"
    },
    {
      "email": "jasnell@gmail.com",
      "name": "jasnell"
    },
    {
      "email": "mikeal.rogers@gmail.com",
      "name": "mikeal"
    }
  ],
  "name": "express",
  "optionalDependencies": {},
  "readme": "ERROR: No README data found!",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/expressjs/express.git"
  },
  "scripts": {
    "test": "mocha --require test/support/env --reporter spec --bail --check-leaks test/ test/acceptance/",
    "test-ci": "istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --require test/support/env --reporter spec --check-leaks test/ test/acceptance/",
    "test-cov": "istanbul cover node_modules/mocha/bin/_mocha -- --require test/support/env --reporter dot --check-leaks test/ test/acceptance/",
    "test-tap": "mocha --require test/support/env --reporter tap --check-leaks test/ test/acceptance/"
  },
  "version": "4.14.0"
}

package.json 属性说明:
	* name: 包名.
	* version: 包的版本号.
	* description: 包的描述.
	* homepage: 报的官网url.
	* author: 包的作者名
	* contributors: 包的其他贡献者姓名
	* dependencies: 依赖包列表, 如果依赖包名优安装,npm会自动将依赖包安装在node_modules目录下.
	* repository: 包代码存放的地方的类型, 可以是git,svn.
	* main: mai字段是一个模块ID, 它是一个指向你程序的主要项目, 就是说, 如果你的包的名字叫express, 然后用户安装他, 然后require("express").
	* keywords: 关键字.


卸载模块:
$ npm uninstall express

卸载后, 可以到node_modules 目录下查看包是否还存在, 或者使用以下命令查看
$ npm ls

更新模块:
$ npm update express

搜索模块
$ npm search express

NPM 常用命令
	除了本章介绍的部分外，NPM还提供了很多功能，package.json里也有很多其它有用的字段。
	除了可以在npmjs.org/doc/查看官方文档外，这里再介绍一些NPM常用命令。
	NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
	NPM提供了很多命令，例如install和publish，使用npm help可查看所有命令。
	使用npm help <command>可查看某条命令的详细帮助，例如npm help install。
	在package.json所在目录下使用npm install . -g可先在本地安装当前命令行程序，可用于发布前的本地测试。
	使用npm update <package>可以把当前目录下node_modules子目录里边的对应模块更新至最新版本。
	使用npm update <package> -g可以把全局安装的对应命令行程序更新至最新版。
	使用npm cache clear可以清空NPM本地缓存，用于对付使用相同版本号发布新版本代码的人。
	使用npm unpublish <package>@<version>可以撤销发布自己发布过的某个版本代码。



