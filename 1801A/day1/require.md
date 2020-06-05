# 引入
```javascript
    //              引入require             指定入口文件
    <script src="./lib/require.js" data-main="main.js"></script>  
```
# 定义

```javascript
define([],function(){
    // 谢你自己的代码块


    return // 抛出接口
})

```

# 加载模块（在主入口文件）
```javascript
    require(["路径1","路径2"],function(a,b){
        第一个参数数组 是保存每一个模块的路径
        第二个参数是函数 函数的每一个参数保存每一个模块抛出的接口  一一对应
        路径1由变量a接收
        路径2由变量b接收
    })

```

# 配置require
```javascript

    require.config({
        paths: { //起别名
            a: "dialog"
        },
        baseUrl:"js",// 配置基址地址
    })
```