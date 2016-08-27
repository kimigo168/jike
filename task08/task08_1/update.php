<?php 
	require('connect.php');
	 //SQL语句
	 
	
	$newsid= $_REQUEST['newsid'];
	$newsclassify=$_REQUEST['newsclassify'];
	$newstitle=$_REQUEST['newstitle'];
	$newsimg=$_REQUEST['newsimg'];
	$newscontent=$_REQUEST['newscontent'];
	$addtime=$_REQUEST['addtime'];
	
	

	$result="UPDATE `news` SET `newstitle`='$newstitle',`newsimg`='$newsimg',`newscontent`='$newscontent',`newsclassify`='$newsclassify',`addtime`='$addtime' WHERE newsid=$newsid";
	
	// $result ="DELETE FROM `news` WHERE newsid=$newsid";//为什么加引号newsid删除失败
	// $result ="DELETE FROM `news` WHERE 'newsid'=$newsid";

	$updateresult=mysql_query($result,$con); //执行修改
	if(!$updateresult){
		die("修改失败");
	}
	mysql_close($con);

?>