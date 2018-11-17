
(function(window){

requireConfig()

function requireConfig(){

    // css集合
    window.cssCollection={
        homePage:""
    }

  



    // 入口脚本
    requirejs.config({
        baseUrl:'',
        paths:{
            // 常用插件
            "jquery":'./plugins/jquery/jquery-2.1.4.min',
            "store":"./plugins/store/store.everything.min",
            "vue":"./plugins/vue/vue.min",
            "swiper":"./plugins/swiper/swiper-3.4.2.min",
            "md5":"./plugins/md5/md5",


            //自定义插件
            "util":"./js/util",
            "myAjax":"./js/myAjax",
            "tip":"./js/tip",

            //私有js
            "homePage":"./js/myapp/homePage"
        },
        map:{
            "*":{
                'css':'./plugins/require/css'//这个是引入css必须的文件
            }
        },
        shim:{
            "swiper":{
                deps:["css!./plugins/swiper/swiper-3.4.2.min.css"]
            }
        }
    })

    var page=document.getElementsByTagName('html')[0].getAttribute('data-file')
    console.log(page)
    require(['jquery','store',page],function($,store,page){
       
    })
   

}


})(window)



