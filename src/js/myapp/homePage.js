

define(['vue','jquery','myAjax','swiper'],function(Vue,$,myAjax,Swiper){





    
   myAjax.ajax({
     url:"http://bookstoreapi.shuqireader.com/eva_bookstore/v1/stencil/query?appId=1&pageId=1&channelId=&versionId=&ver=&shuqi_h5=&md5key=&userId=8000000&timestamp=1542507163&type=1&resetcache=&sign=55246E7519A3FC35A7DDC11B07BD02ED&key=shuqiapi&_=1542507163259",
     callback(data){
       console.log(data)
     }
   })
    


  


})
