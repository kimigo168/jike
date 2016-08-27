<?php 
	header("Content-type:text/html;charset=utf-8");
	//创建到达数据库的连接
	$con = mysql_connect("localhost","root","");
	if(!$con){
		die("Could not connect:".mysql_error());
	}else{
		echo "Connect success";
	}
	mysql_query("SET NAMES 'UTF8'");
	//创建一个名为news_db的数据库
	if(mysql_query("CREATE DATABASE news_db DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci",$con)){
		echo "Database created success";
	}else{
		echo "Error creating database:".mysql_error();
	}
	//创建一个news的表
	mysql_select_db("news_db",$con);
	$sql = "CREATE TABLE news(
		newsid int(11) NOT NULL AUTO_INCREMENT,
		PRIMARY KEY(newsid),
		newstitle varchar(100),
		newsimg varchar(200),
		newscontent text,
		newsclassify varchar(100),
		addtime date
	)";
	mysql_query($sql,$con);
	//插入推荐、百家、本地类别新闻到news表中
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('习近平致电祝贺非洲联盟第二十七届首脑会议召开','image/xizong.jpg','习近平指出，非洲联盟是非洲联合自强的旗帜。','local','2016-07-17')");
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('商务部副部长:中国没有抵制菲律宾产品','image/fruit.jpg','随着南海仲裁案的结束，网络上掀起了一轮抵制外国货、特别是菲律宾货品的高潮。','recommend','2016-07-19')");	
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('[茶娱]陈晓陈妍希梦幻婚礼','image/chayu.jpg','陈晓陈妍希梦幻婚礼 高甜互动','recommend','2016-07-19')");	
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('科技大事件：软银以243亿英镑收购英国芯片巨头ARM','image/bussiness.jpg','这将是亚洲企业在英国完成的最大规模的并购交易。','recommend','2016-07-19')");	
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('多地二类疫苗缺货:非生产不足 配送环节亟待加强','image/yimiao.jpg','近段时间，各地二类疫苗出现缺货的消息时有出现。前不久，一位广州的妈妈告诉记者，带孩子注射疫苗时...','recommend','2016-07-19')");	
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('基因强大！郑爽妈妈近照曝光 皮肤白皙超年轻','image/shuang.jpg','郑爽爸爸晒出一张妻子的近照配文称“老婆”，照片中，郑爽妈妈扎着丸子头，看上去十分清爽，皮肤白皙...','baijia','2016-07-19')");	
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('阿富汗籍男子在德国列车上持斧砍伤20余人被击毙','image/germany.jpg','一男子当天在德国巴伐利亚州一列车上使用斧子攻击旅客，造成至少3人严重受伤，后被警方击毙。','baijia','2016-07-19')");
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('Angelababy收到情人节鲜花，井柏然竟然生气了','image/ab.jpg','敬请关注8月12日上映的电影《微微一笑很倾城》。','baijia','2016-07-19')");
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('曝甘肃一车管大厅制服女打办事者 警方称系协管','image/strike.jpg','一段“甘肃东乡县交警执法人员打人”的视频在网络流传。澎湃新闻（www.thepaper.cn）...','baijia','2016-07-19')");
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('女高中生打车险遭的哥强奸 报警后遭父亲骂丢人','image/auto.jpg','原标题：丹东：打车相识互加微信 17岁女孩险遭的哥强奸与健谈的哥偶然相识，17岁女孩以为自己遇...','baijia','2016-07-19')");
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('两男子上演木马计:藏木箱混入小区绑走女屋主','image/muma.jpg','本报记者夏修露两个一米多长的木箱，被“快递员”一前一后搬进了峨眉山市的一处小区。就在“快递员”...','baijia','2016-07-19')");
	
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('基因强大！郑爽妈妈近照曝光 皮肤白皙超年轻','image/shuang.jpg','郑爽爸爸晒出一张妻子的近照配文称“老婆”，照片中，郑爽妈妈扎着丸子头，看上去十分清爽，皮肤白皙...','recommend','2016-07-19')");		
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('《跨界歌王》刘涛借酒抒情 霸气演绎悲伤情歌','image/liutao.jpg','刘涛凤凰娱乐讯 北京卫视2016大型明星跨界音乐节目《跨界歌王》第八期节目已于本周六（7月16...','local','2016-07-19')");	
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('日媒:日本现疑似朝鲜外逃人员 自称跳海游到岸边','image/xiaolongxia.jpg','【环球网报道】日本共同社7月17日报道称，16日上午11点15分左右，日本山口县警方接到居民报...','local','2016-07-19')");	
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('导师战车”拉风，经过上千次摸索','image/car.jpg','导师战车的道具设计可谓煞费苦心，导演组为此请来迪士尼公司的供应商，以打造过山车的硬件标准，来设...','recommend','2016-07-19')");	
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('吴奇隆谈霍建华林心如恋情：之前一点都没发现','image/wuliu.jpg','日前，吴奇隆出席活动，被问及霍建华与林心如7月31日将在巴厘岛举办婚礼，吴奇隆说：“觉得是挺意...','local','2016-07-19')");	
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('京郊特色宴席系列 “夏都”延庆十二桌特色宴席招待八方来客','image/yanqing.jpg','有很多美食是你在城里饭店里吃不到的，今天，就为大家介绍北京郊区那些让人砰然心动的特色美食。图片...','local','2016-07-19')");	
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('北京天气最新预报：上午发布暴雨蓝色预警 明天气温凉爽舒适','image/shuiying.jpg','较强降雨侵扰京城，北京市气象台7时30分发布了暴雨蓝色预警信号。','local','2016-07-19')");	
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('央视：土耳其首都安卡拉发生大爆炸','image/turkey.jpg','当地目击者称，爆炸十分剧烈，数个街区都能感觉到冲击波。','recommend','2016-07-20')");	
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('韩国里约奥运331人代表团成立 期待射箭等传统强项摘金 ','image/hanguo.jpg',' 资料图：韩国名将朴泰桓。 中新记者 富田 摄 中新社首尔7月19日电 (记者 吴旭)里约奥运...','recommend','2016-07-20')");	
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('台主持人报道游览车事故发问:陆客不会用安全锤?','image/taiwan.jpg',' 今天（19日）中午，台湾桃园机场联络道发生自撞车祸，一辆载有大陆游客的游览车因不明原因撞上护栏...','recommend','2016-07-20')");	
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('德国自动驾驶汽车拟装黑匣子','image/germanycar.jpg',' 谷歌无人驾驶汽车 新浪科技讯 北京时间7月19日上午消息，据路透社报道，知情人士透露，德国计划...','recommend','2016-07-20')");
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('《路边野餐》：野生的中国电影新浪潮','image/roadcook.jpg','2016年公映的《路边野餐》，2015年公映的《心迷宫》，可以看做是野生的中国电影新浪潮，这两...','baijia','2016-07-20')");
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('刘强东：若失去京东控制权 我宁可将公司卖掉','image/liuqiangd.jpg','京东最早做的时候，可以说是中国所有互联网行业唯一一个实体经济，我们从来不把京东当做一个虚拟经济。','baijia','2016-07-20')");
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('硅谷再次拥抱人工智能，真的是新纪元的开始？','image/guigu.jpg','他发表最新的一篇文章，继续将视角投向硅谷，看人工智能是否能打开硅谷的新纪元。','baijia','2016-07-20')");
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('这轮人才争夺战，上海凭什么赢不了北京？','image/rencai.jpg',' “人才是第一生产力”，市政府们很清楚。号称吸引了最多年轻人的北上广深，在这方面也挺焦虑。只有...','baijia','2016-07-20')");
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('58家券商被打翻在地，证监会为何下重手','image/shangjia.jpg','中国证券市场上演了史无前例的一幕：监管层对券商痛下杀手，通过评级的方式给他们算了一次总账。','baijia','2016-07-20')");
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('罗马北京航线重开 网友:赶紧取钱来一场说走就走的旅行','image/beirome.jpg','当日，经过3年暂停后，意大利航空重开从罗马至北京的直飞航线，网友纷纷表示去银行取钱旅游走起。 ...','local','2016-07-20')");
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('北京发布暴雨蓝色预警 这些积水点段要避开','image/strom.jpg','中国天气网讯北京市气象台19日10时30分继续发布暴雨蓝色预警信号，预计至19日傍晚，本市平原...','local','2016-07-20')");
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('奇虎360被诉侵权索赔1亿后获声援，原告四维图新撤诉','image/360.jpg','一场电子地图引发的侵权纠纷，在经历了原告起诉、被告回应以及第三方声援被告之后，暂时告一段落。电...','local','2016-07-20')");
	mysql_query("INSERT INTO news(newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('O2O“吃回头草” 线下布局是出路吗 ','image/o2o.jpg','O2O革传统商业模式之命言犹在耳，扎堆线下开店却成了O2O全行业的普遍动作。','local','2016-07-20')");	
	//关闭数据库连接
	mysql_close($con);
 ?>