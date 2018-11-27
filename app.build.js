

// 单文件打包
// ({
//     appDir:'./src',//要打包的根目录
//     baseUrl:"./js",//js文件所存放的目录
//     dir:'./build',//打包后的输出目录
//     mainConfigFile:'./src/js/require-config.js',//requirejs的配置文件
//     name:'homePage',//所需要打包的模块
//     optimize: "uglify",//压缩代码的方式（默认，可不写）
//     optimizeCss: "standard.keepLines",//css优化方式：除标准压缩外，保留换行
// })

// 多模块打包


({
    appDir:'./src',//要打包的根目录
    baseUrl:"./js",//js文件所存放的目录
    dir:'./build',//打包后的输出目录
    mainConfigFile:'./src/js/require-config.js',//requirejs的配置文件
    optimize: "uglify",//压缩代码的方式（默认，可不写）
    optimizeCss: "standard.keepLines",//css优化方式：除标准压缩外，保留换行
    modules:[
            {
                name:'homePage'
            },
            {
                name:'login'
            },
        ]
})

