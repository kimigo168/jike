<?php 
	header("Content-Type: text/plain;charset=utf-8"); 
	$con=mysql_connect("localhost",'root','');
	if(!$con){
		die("Could not connect:".mysql_error());
	}
	mysql_query("SET NAMES 'UTF8'");
	mysql_select_db("news_db",$con);
	$type = $_GET['type'];
	$sql="SELECT * FROM news WHERE newsclassify='$type'";
	$result = mysql_query($sql,$con);
	// echo $result;
	$strResult = '';
	while($row = mysql_fetch_array($result))
	{	
		$strResult.='<tr><td class="news-id">'.$row['newsid'].'</td><td class="news-title">'.$row['newstitle'].'</td><td class="news-img">'.$row['newsimg'].'</td><td class="news-content">'.$row['newscontent'].'</td><td class="news-classify">'.$row['newsclassify'].'</td><td class="add-time">'.$row['addtime'].'</td><td><a class="edit-btn" href="#">修改</a><a class="del-btn" href="#">删除</a></td></tr>';
	}
	echo $strResult;
	
	mysql_close($con);
 ?>