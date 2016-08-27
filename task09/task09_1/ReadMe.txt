1. 运行工程前要需要安装node，mysql环境，新建一个news_db数据库，然后导入news_db.sql文件

2.之后在项目根目录下运行npm install && bower install 安装应用到类库。

3.入口文件为app.js,在项目根目录运行node app.js即可开启服务

4.本项目主要有4个页面，分别为：

    前台页面：
        手机百度新闻首页(推荐类)：localhost:3000
        手机百度百家： localhost:3000/baijia
        手机百度本地:  localhost:3000/local

    后台页面：
        新闻列表：   localhost:3000/list
        新增录入页：  localhost:3000/add

        处理逻辑有新增，修改(更新)，删除操作。
