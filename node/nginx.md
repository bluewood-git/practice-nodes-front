# Nginx 服务器
## 正向代理和反向代理

关于代理的描述这里有一篇文章描述的很详细 <https://www.jianshu.com/p/ae76c223c6ef>
1. 代理的含义：

比如，从A网址到C网址因为各种原因不能访问，但是A可以访问B,B可以访问C,A可以通过B来访问C,B就是代理，这就是
常说的通过代理访问，

2. 正向代理

用文章的话说，代理站在客户端这边就是正向代理，我知道我要去哪儿，但是没法直接去只能找代理过去，这就是正向代理
例如访问国外网站

3. 反向代理
   
我只知道可以在你这里拿到资源，并不管你是从哪里拿的，此时用户就是在访问代理服务器，这就是反向代理。例如负载均衡

## 用反向代理来解决跨域请求
1. 启动服务

nginx作为一个服务器启动，首先要有一个监听站点，也是服务运行端口，默认是localhost:80 修改配置文件conf/nginx.conf
    
    #监听端口
    listen       8880;
    #监听域名
    server_name  localhost;
默认访问index.html 这个主页位置可以在配置文件中修改，

    # 表示映射监听站点所有的路径
    location / {
        # 配置启动项目的根路径
        root   F:\project\vscodedemo;
        # 访问的主页
        index  index.html index.htm;
    }

2. 配置代理路径

前面的配置可以使你的前端项目在localhost:8880这个地址下直接访问，但是这时候并没有解决跨域访问的问题。还需要做一些配置才行

    # 表示 localhost:8880/demo/ 这个路径会被路由
    location /demo/ {
        # 代理路由配置
        proxy_pass  http://localhost:8090/demo/;
    }
假设我后端项目的访问根目录为demo，上面的配置便可以使所有对 localhost:8880/demo/ 的访问，全部转向到 localhost:8090/demo/，这样便解决了跨域问题。
前端请求后台的接口，只要访问localhost:8880/demo/ 就可以了，对前端而言，并不知道实际上访问的是 localhost:8090/demo/ 的资源，这就是反向代理