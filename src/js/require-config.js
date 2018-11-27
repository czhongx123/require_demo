






    // 入口脚本
    require.config({
        baseUrl:'./src/js',//配置基目录
        urlArgs:'v='+(new Date()).getTime(),
        paths:{
            // 常用插件
            "jquery":'./plugins/jquery/jquery-2.1.4.min',
            "store":"./plugins/store/store.everything.min",
            "vue":"./plugins/vue/vue.min",
            "swiper":"./plugins/swiper/swiper-3.4.2.min",
            "md5":"./plugins/md5/md5",
            "spop":'./plugins/tip/dist/spop',


            //自定义插件
            "util":"./util",
            "myAjax":"./myAjax",
            "tip":"./tip",

            //私有js
            "homePage":"./homePage",
            "login":"./login"
        },
        map:{
            "*":{
                'css':'./plugins/require/css'//这个是引入css必须的文件
            }
            
        },//"map"告诉RequireJS在任何模块之前，都先载入这个模块
        shim:{
            "swiper":{
                deps:["css!./plugins/swiper/swiper-3.4.2.min.css"]
            },
            "spop":{
                deps:["css!./plugins/tip/dist/spop.css"],//表明该模块的依赖,数组中的为依赖
                exports:"spop"
            }//加载非AMD的插件用此方法
           
        }//那些没有使用define()来声明依赖关系的模块进行配置
    })

    // var page=document.getElementsByTagName('html')[0].getAttribute('data-file');
    // var pageCss= window.cssCollection[page];
    // console.log(pageCss)
    // require([page],function(page){
       
    // })
   



