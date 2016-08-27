// dao/userSqlMapping.js
// CRUD SQL语句
var news = {
    insert:'INSERT INTO news(newsid, newstitle, newsimg, newscontent, newsclassify, addtime) VALUES(0,?,?,?,?,?)',
    update:'update news set newstitle=?, newsimg=?, newscontent=?, newsclassify=?, addtime=? where newsid=?',
    delete: 'delete from news where newsid=?',
    queryById: 'select * from news where newsid=?',
    queryByClass: 'select * from news where newsclassify=?',
    queryrecommend:'select * from news where newsclassify="recommend"',
    querybaijia:'select * from news where newsclassify="baijia"',
    querylocal:'select * from news where newsclassify="local"',
    queryAll: 'select * from news'
};

module.exports = news;