var express = require('express');
var app = express();//创建一个express应用
var jade = require('jade');
var mysql = require('mysql');
var bodyParser = require('body-parser');

var newsDao = require('./dao/newsDao');

// 静态资源请求路径
var path = require('path');
var bodyParser= require('body-parser');
app.use(express.static(path.join(__dirname, 'public/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var port = 3000;
// 监听端口
app.listen(port);
console.log('server started on port: ' + port);

app.set('views','./views/pages');//设置默认路径
app.set('view engine','jade');//设置默认模版引擎jade

//路由设置

//前台
//手机百度新闻首页,推荐新闻
app.get('/', function (req, res,next) {

    newsDao.queryrecommend(req,res);

});
//百家新闻
app.get('/baijia', function (req, res) {
    newsDao.querybaijia(req,res);
});
//本地新闻
app.get('/local', function (req, res) {
    newsDao.querylocal(req,res);
});

//后台
//list新闻列表
app.get('/list',function(req,res,next){
    newsDao.queryAll(req,res,next);
});


app.get('/add', function(req, res, next) {
    res.render('add', { title: '新闻添加' });
});

//增加
app.post('/admin/control/add',function(req,res,next){
    newsDao.add(req,res,next);
});
//删除
app.delete('/admin/control/delete', function (req, res,next) {
     newsDao.delete(req, res, next);
});

//逻辑控制：通过id查询
app.get('/admin/control/query', function (req, res,next) {
    newsDao.queryById(req, res,next);
});
//逻辑控制：更新数据
app.post('/admin/control/new',function(req,res,next){
    newsDao.update(req,res,next);
});