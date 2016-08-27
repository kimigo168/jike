<?php 
	require('connect.php');
	// 选择数据库
	mysql_select_db("news_db",$con);
	
	$sql="INSERT INTO news (newstitle,newsimg,newscontent,newsclassify,addtime) 
	VALUES ('重庆丰都多地遭受暴雨袭击 已疏散转移2300余人','image/chongqin.jpg','记者从重庆丰都县方面了解到，昨19日14时许，丰都多地遭受暴雨袭击，局地降雨量达260mm以上...','local','2016-07-20')";

	if (!mysql_query($sql,$con))
	  {
	  die('Error: ' . mysql_error());
	  }
	echo "1 record added";

	mysql_close($con);
 ?>