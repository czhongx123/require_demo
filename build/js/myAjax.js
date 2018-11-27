
define(['module','jquery','md5','store','tip'],function(module,$,md5,store,tip){
/**
 * url:'http:www.baidu.com'(必填)
 * method:"",//请求方式（非必填，默认get）
 * data:{},//请求数据（非必填）
 * dataPos:true,//当请求方式为post时，参数不放入url中，
 * encrypt:[],//data中需要加密的键值，默认不加密
 * failTip:true,//失败的提示。false表示不提示，默认为true
 * callback:function(data,status,jqXHR){},//执行完Ajax，data.result为true的回调
 * errorback:function(data,status,jqXHR){},//执行完Ajax失败的回调
 * loadingInit:true,//是否显示遮罩层，默认false不显示
 * 
 * 
 * 
 */

   
    var myAjax={
        ajax:function(params){
            tip.getTip({
                type:"w",
                content:'加载成功'
            })

            //判断是否有权限
            function gerStoreDate(){
                let access_token=store.get("access_token") || "",user={}
                if(access_token){
                    user.access_token=access_token
                }
                return user;
            }


            if(!params.hasOwnProperty('method')){
                params.method='get'
            }


            //数据加密
            if(params.hasOwnProperty('encrypt') && params.encrypt.length>0){

                params.encrypt.forEach(function(v){
                    params.data[v]=md5(params.data[v])
                })

            }

            
            //ajax

            $.ajax({
                url:params.url,
                data:params.data || {},
                method:params.method,
                beforeSend:function(){

                },
                dataType:'json',
                success:function(data,status,jqXHR){

                    if(data.state==200){
                        if(params.callback){
                            params.callback(data.data,status,jqXHR)
                        }
                    }else{

                        tip.getTip({
                            type:"error",
                            content:data.returnMessage || "未知错误"
                        })
                        if(params.failback){
                            params.failback(data,status,jqXHR)
                        }


                    }
                   
                },
                error:function(jqXHR,status){
                    tip.getTip({
                        type:"error",
                        content:'服务器繁忙，请刷新再试'
                    })
                }
                
            })
        }
   }

   return myAjax
})






