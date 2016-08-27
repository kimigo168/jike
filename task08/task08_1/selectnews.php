<?php 
	require("connect.php");
	//创建到达数据库的连接
	// $con = mysql_connect("localhost","root","");
	// if(!$con){
	// 	die("Could not connect:".mysql_error());
	// }
	// mysql_query("SET NAMES 'UTF8'");
	// mysql_select_db("news_db",$con);
	$newstype= $_REQUEST['newskind'];
	// $sql="SELECT * FROM news WHERE newsclassify='$newstype'";
	$sql="SELECT * FROM news WHERE newsclassify='$newstype'";
	//执行查询
	$result = mysql_query($sql,$con);
	// echo $result;
	if(!$result){
		die("Valid result!");
	}else{
		//循环从数据集取出数据
		$arr=array();
		while( $row = mysql_fetch_array($result) ){
		    // echo "新闻标题:".$row['newstitle']."<br />";
		    // echo "新闻图片:".$row['newsimg']."<br />";
		    // echo "新闻内容:".$row['newscontent']."<br />";
		    // echo "新闻时间:".$row['newstime']."<br /><br />";
		    array_push($arr,array("newsid"=>urlencode($row['newsid']),"newstitle"=>urlencode($row['newstitle']),"newsimg"=>$row['newsimg'],"newscontent"=>urlencode($row['newscontent']),"addtime"=>urlencode($row['addtime'])));
		}
		echo urldecode(json_encode($arr));
		// echo $callback.'('.json_encode($arr).')';
	}
	
	mysql_close($con);
 ?>
 	