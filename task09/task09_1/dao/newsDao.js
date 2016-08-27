// dao/userDao.js
// 实现与MySQL交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $util = require('../util/util');
var $sql = require('./newsSqlMapping');

// 使用连接池，提升性能
var pool  = mysql.createPool($util.extend({}, $conf.mysql));

// 向前台返回JSON方法的简单封装
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code:'1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    add: function (req, res, next) {
        // 获取前台页面传过来的参数
        var param = req.body;
        if(param.newstitle == '' || param.newsimg == '' || param.newscontent == '' || 
            param.newsclassify == '' || param.addtime == '') {
                // res.send(param.newstitle);
                res.send("信息未填完整，操作失败！");
            return;
        }
        else{
            // res.send('添加成功！')
                 pool.getConnection(function(err, connection) {
            // 建立连接，向表中插入值
                connection.query($sql.insert, [param.newstitle, param.newsimg, param.newscontent, 
                    param.newsclassify, param.addtime], function(err, result) {
                        res.send('一条新闻添加成功！');
                        // res.send(param.newstitle);
                    // 释放连接 
                    connection.release();
                });
            });      
        }
    },
    delete: function (req, res, next) {
        // delete by Id
        var newsid = +req.query.newsid;
        pool.getConnection(function(err, connection) {
            
            connection.query($sql.delete, newsid, function(err, results) {
                 res.render('list',{
                    result:results
                });
                connection.release();
            });
        });
    },
    update: function (req, res, next) {
        // update by id
        // 为了简单，要求同时传name和age两个参数
        var param = req.body;
        // jsonWrite(res,param.newstitle);
       
        if(param.newstitle == '' || param.newsimg == '' || param.newscontent == '' || 
            param.newsclassify == '' || param.addtime == '') {
            // jsonWrite(res, undefined);
             res.send("信息未填完全，操作失败！");
            return;
        }else{
             pool.getConnection(function(err, connection) {
                connection.query($sql.update, [param.newstitle, param.newsimg, param.newscontent,
                     param.newsclassify, param.addtime, +param.newsid], function(err, result) {
                    // 使用页面进行跳转提示
                    res.send('新闻更新成功！');
                    connection.release();
                });
            });        
        }
            
       

    },
   queryById: function (req, res, next) {
        var newsid = +req.query.id; // 为了拼凑正确的sql语句，这里要转下整数
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryById, newsid, function(err, result) {
                res.render('new',{
                    result:result
                });
                console.log(result);
                connection.release();

            });
        });
    },
    queryrecommend: function(req,res,next){
        pool.getConnection(function(err,connection){
            connection.query($sql.queryrecommend,function(err,result){
                res.render('index', {
                    result: result
                }); 
                connection.release();   
            });

        });
    },
     querybaijia: function(req,res,next){
        pool.getConnection(function(err,connection){
            connection.query($sql.querybaijia,function(err,result){
                res.render('baijia', {
                    result: result
                }); 
                connection.release();   
            });

        });
    },
     querylocal: function(req,res,next){
        pool.getConnection(function(err,connection){
            connection.query($sql.querylocal,function(err,result){
                res.render('local', {
                    result: result
                }); 
                connection.release();   
            });

        });
    },
    queryAll: function (req, res, next) {
        pool.getConnection(function(err, connection) {
            connection.query($sql.queryAll, function(err, result) {
                // jsonWrite(res, result);
                   // if(result.affectedRows > 0) {
                    res.render('list', {
                        result: result
                    }); // 第二个参数可以直接在jade中使用
                // } else {
                //     res.render('fail',  {
                //         result: result
                //     });
                // }
                console.log(result);
                connection.release();
            });
        });
    }
    
};
