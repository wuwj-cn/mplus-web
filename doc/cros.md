# 使用angular反向代理配置解决跨域问题
## 反向代理
反向代理（Reverse Proxy）方式是指以代理服务器来接受internet上的连接请求，然后将请求转发给内部网络上的服务器，并将从服务器上得到的结果返回给internet上请求连接的客户端，此时代理服务器对外就表现为一个反向代理服务器

Angualr2+工程大部分为前后端分离，在开发过程中要进行接口联调时，如果每次都需要部署到服务器时效率太低，因此需要在开发环境中考虑利用反向代理来解决这类的跨域问题。

主要方法说明如下：
* 在工程根目录下创建proxy.config.json文件，配置内容如下
{
  "/api":{
    "target":"http://localhost:8080"
  }
}
其中http://localhost:8080为连接机器的ip地址,或者你所需要请求的接口域名,这个就是需要被代理的
/api是代理的名称,一般都是接口请求的ip地址后面的第一个参数名

* 配置package.json
"scripts": {
  "ng": "ng",
  "start": "ng serve  --proxy-config proxy.config.json",
  "build": "ng build  --prod --aot",
  "test": "ng test",
  "lint": "ng lint",
  "e2e": "ng e2e"
}

* 使用npm run start启动服务，不要使用ng serve，否则代理不能生效
