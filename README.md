# my_project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).





#### 项目说明：

创建日期：2020/12/10

作者：dean yang

预计目标：vue完成后台管理项目

1.熟悉Vue cli
2.pc后台管理意义---->使用者为电商管理
3 前端模块：
      Vue
      Element UI 
      Echarts
      Axios
      Vue Route
  后端模块：
      Node.js
      Mysql
      Express

#### 一.登录功能实现：

​          http协议

​          cookie在客户端记录状态

​          session在服务端记录状态

​          token方式维持状态(客户端从服务器获取token后，每次请求都要带上token)

#####           实现：

​                      1.输入用户和密码规范验证，通过element ui 中的form函数验证

​                      2.axios请求

​                      3.存储seesion请求，并且保存七天

​                      4.登录成功后的页面跳(路由到/home)

