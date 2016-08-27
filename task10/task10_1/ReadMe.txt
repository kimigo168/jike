1 首先在node.js环境下，下载安装npm install -g fis 和npm install -g fis-postpackager-simple

2 进入task10_1目录,fis release 将编译后的项目发布至本地调试服务器,可通过 fis release -d <path/to/output> 指定你希望的输出目录

3 资源压缩：fis release -o

4 添加md5戳并压缩: fis release -om  

5 资源压缩并打包： fis release -op

6 本地预览调试：fis server start
