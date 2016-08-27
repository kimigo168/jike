<?php 
	require("connect.php");

	$result = mysql_query('SELECT * FROM news');
	if(!$result){
		die("Valid result!");
	}else{
		//循环从数据集取出数据
		$arr=array();
		while ($row=mysql_fetch_array($result)) {
		    array_push($arr,array("newsid"=>urlencode($row['newsid']),"newstitle"=>urlencode($row['newstitle']),"newsimg"=>$row['newsimg'],"newscontent"=>urlencode($row['newscontent']),"newsclassify"=>urlencode($row['newsclassify']),"addtime"=>urlencode($row['addtime'])));
		}
		echo urldecode(json_encode($arr));
		// echo $callback.'('.json_encode($arr).')';
	}
	mysql_close($con);
 ?>