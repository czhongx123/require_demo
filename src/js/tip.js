

define(['module','spop'],function(module,spop){
    var tip={
        getTip:function(params){
            spop({
                template: params.content,
                position  : 'top-center',
                style: params.type,//style:success/error/warning/default
                autoclose: 1500
            });
        }
   }


   return tip
})

