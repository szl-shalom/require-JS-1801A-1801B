define(function () {
    var index = 0, ind = 0;



    return {
        navBarData: [{
            name: "首页"
        },
        {
            name: "跟团游",
            children: ["处境跟团", "境内跟团", "周边跟团"]
        },
        {
            name: "自由行",
            children: ["处境自由行", "境内自由行", "周边自由行"]
        },
        {
            name: "火车票"
        }, {
            name: "跟团游",
            children: ["处境跟团", "境内跟团", "周边跟团"]
        },
        {
            name: "自由行",
            children: ["处境自由行", "境内自由行", "周边自由行"]
        },
        {
            name: "火车票"
        }],
        bannerData: [
            "http://img1.imgtn.bdimg.com/it/u=3861925707,2023347812&fm=26&gp=0.jpg",
            "http://img0.imgtn.bdimg.com/it/u=3672256741,2220775893&fm=26&gp=0.jpg",
            "http://img5.imgtn.bdimg.com/it/u=3805518414,3621085917&fm=26&gp=0.jpg",
            "http://img2.imgtn.bdimg.com/it/u=1405314011,1793554833&fm=26&gp=0.jpg",
            "http://img4.imgtn.bdimg.com/it/u=3440273674,2008631680&fm=26&gp=0.jpg",
            "http://img0.imgtn.bdimg.com/it/u=2926701650,861684490&fm=26&gp=0.jpg",
            "http://img0.imgtn.bdimg.com/it/u=2573460874,1710955832&fm=26&gp=0.jpg",
        ],
        tabData: [{
            title: "父标题" + ++index,
            children: [{
                title: "子标题" + index + "-" + ++ind,
                con: "我是内容盒子" + Math.floor(Math.random() * 1000)
            }, {
                title: "子标题" + index + "-" + ++ind,
                con: "我是内容盒子" + Math.floor(Math.random() * 1000)
            }, {
                title: "子标题" + index + "-" + ++ind,
                con: "我是内容盒子" + Math.floor(Math.random() * 1000)
            }]
        }, {
            title: "父标题" + ++index,
            children: [{
                title: "子标题" + index + "-" + ++ind,
                con: "我是内容盒子" + Math.floor(Math.random() * 1000)
            }, {
                title: "子标题" + index + "-" + ++ind,
                con: "我是内容盒子" + Math.floor(Math.random() * 1000)
            }, {
                title: "子标题" + index + "-" + ++ind,
                con: "我是内容盒子" + Math.floor(Math.random() * 1000)
            }]
        }, {
            title: "父标题" + ++index,
            children: [{
                title: "子标题" + index + "-" + ++ind,
                con: "我是内容盒子" + Math.floor(Math.random() * 1000)
            }, {
                title: "子标题" + index + "-" + ++ind,
                con: "我是内容盒子" + Math.floor(Math.random() * 1000)
            }, {
                title: "子标题" + index + "-" + ++ind,
                con: "我是内容盒子" + Math.floor(Math.random() * 1000)
            }]
        }, {
            title: "父标题" + ++index,
            children: [{
                title: "子标题" + index + "-" + ++ind,
                con: "我是内容盒子" + Math.floor(Math.random() * 1000)
            }, {
                title: "子标题" + index + "-" + ++ind,
                con: "我是内容盒子" + Math.floor(Math.random() * 1000)
            }, {
                title: "子标题" + index + "-" + ++ind,
                con: "我是内容盒子" + Math.floor(Math.random() * 1000)
            }]
        }]
    }
})