<?php 
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods:POST,GET');
	header('Access-Control-Allow-Credentials:true'); 
	header("Content-Type: application/json;charset=utf-8"); 

	if($_SERVER["REQUEST_METHOD"] == "POST"){
		create();
	}
	//创建一条新的新闻
	function create(){
		//判断信息是否填写完全
		if (!isset($_POST["newstitle"]) || empty($_POST["newstitle"])
		|| !isset($_POST["newsimg"]) || empty($_POST["newsimg"])
		|| !isset($_POST["newscontent"]) || empty($_POST["newscontent"])
		|| !isset($_POST["newsclassify"]) || empty($_POST["newsclassify"])
		|| !isset($_POST["addtime"]) || empty($_POST["addtime"])) {
			echo '{"success":false,"msg":"参数错误，信息填写不全"}';
			return;
		}
		//TODO: 获取POST表单数据并保存到数据库
		$con = mysql_connect("localhost","root","");
		if(!$con){
			die('Could not connect:'.mysql_error());
		}
		mysql_query("SET NAMES 'UTF8'");
		mysql_select_db("news_db",$con);
		$sql = "INSERT INTO news (newstitle,newsimg,newscontent,newsclassify,addtime)
		VALUES ('$_POST[newstitle]','$_POST[newsimg]','$_POST[newscontent]','$_POST[newsclassify]','$_POST[addtime]')";
		if(!mysql_query($sql,$con)){
			die('Error:'.mysql_error());
		}
	
		//提示保存成功
		echo '{"success":true,"msg":"标题为：' . $_POST["newscontent"] . ' 的新闻保存成功！"}';
		mysql_close();
	}
 ?>