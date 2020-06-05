# 引入require
```javascript

//            引入require           设置入口文件
 <script src="lib/require.js" data-main="main.js"></script>
```


# 定义模块
```javascript
    define([],function(){
        // 代码块


        return // 抛出的接口
    })

```

# 加载模块
```javascript
    require(["路径1","路径2"],function(a,,b){
        a是路径1对应的js文件抛出的接口
        b是路径2对应的js文件抛出的接口
    })

```

