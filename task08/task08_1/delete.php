<?php 
	require("connect.php");
	
	$newsid= $_REQUEST['newsid'];
	echo $newsid;
	
	$result ="DELETE FROM `news` WHERE newsid=$newsid";//为什么加引号newsid删除失败
	
	$printresult = mysql_query($result,$con); //执行查询

	if(!$printresult){
		die("Valid result!");
	}else{

		echo $newsid;
		
	}
	mysql_close($con);

?>