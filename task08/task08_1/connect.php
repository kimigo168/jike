<?php 
	header("Content-Type: application/json;charset=utf-8"); 
	//创建到达数据库的连接
	$con = mysql_connect("localhost","root","");
	if(!$con){
		die("Could not connect:".mysql_error());
	}
	mysql_query("SET NAMES 'UTF8'");
	mysql_select_db("news_db",$con);
	
	
 ?>