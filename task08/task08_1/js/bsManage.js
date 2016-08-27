$(document).ready(function(){
	// 初始化，显示预览全部
	init();
	clickChange();
	
});

// 初始化函数，同时显示预览全部内容
function init(){
	// 让标题显示当前内容类别
	$("h3.page-header").text("预览全部");
	$(".item").each(function(index){
		// 轮询到显示的div.item
		if($(this).hasClass("show")){
			
			$.ajax({
				url:'view.php',
				type:'get',
				dataType: 'json',
				error: error, //错误执行方法
				success: success //成功执行方法
			});

			function error() {
				alert("Error!");
			}
			function success(data){
				for(i in data){
					//创建json数据
					var dataInt = {
						newdata:[{
							newsid:data[i].newsid,
							newstitle:data[i].newstitle,
							newsimg:data[i].newsimg,
							newscontent:data[i].newscontent,
							newsclassify:data[i].newsclassify,
							addtime:data[i].addtime
						}]
					}
					//创建DOM结构并循环输出json数据
					$.each(dataInt.newdata,function(key,value){
						var tr = $("<tr>").appendTo($(".tbody-viewall"));
						var tid = $("<td>").addClass("news-id").text($(value).attr("newsid")).appendTo($(tr));
						var title = $("<td>").addClass("news-title").text($(value).attr("newstitle")).appendTo($(tr));
						var img = $("<td>").addClass("news-img").text($(value).attr("newsimg")).appendTo($(tr));
						var type = $("<td>").addClass("news-type").text($(value).attr("newsclassify")).appendTo($(tr));
						var addtime = $("<td>").addClass("add-time").text($(value).attr("addtime")).appendTo($(tr));
						// var handle =$("<td>").appendTo($(tr));
						// var edit = $("<a>").addClass("edit-btn").text("修改").appendTo($(handle));
						// var del = $("<a>").addClass("del-btn").text("删除").appendTo($(handle));

					});

				}
			}
		}
	});
}
// 点击左边导航栏切换显示内容
function clickChange(){
	$(".nav-sidebar li").each(function(index){
		$(this).click(function(){
			// 先改变被点击的li的样式
			$("li.active").removeClass("active");
			$(this).addClass("active");
			// 改变h3标题内容
			var textval=$(this).children(".abtn").text();
			$("h3.page-header").html(textval);
			//对应侧边栏显示对应的内容
			$("div.show").removeClass("show");

			$(".item").eq(index).addClass("show");
			console.log(index);
			dataSelect();
		});
	});
}
// 根据类名，类别发送请求到php，从数据库读取相应数据
function dataSelect(){
	if($(".show").hasClass("recommend")){
		$.get('select.php',{type:"recommend"},function(data){
			$(".tbody-recommend").html(data);	
		});
	}else if($(".show").hasClass("baijia")){
		$.get('select.php',{type:"baijia"},function(data){
			$(".tbody-baijia").html(data);	
		});
	}else if($(".show").hasClass("local")){
		$.get('select.php',{type:"local"},function(data){
			$(".tbody-local").html(data);
		});
	}else if($(".show").hasClass("viewall")){
		// $.ajax({
		// 		url:'view.php',
		// 		type:'get',
		// 		dataType: 'json',
		// 		success: success
		// 	});
		// $(".tobody")

	}else if($(".show").hasClass("add")){
		//插入新闻
		insertNews();
	}

}
//新闻添加
function insertNews(){
	// 点击保存按钮保存数据
	$("#save").click(function(){
		$.ajax({
			type:"POST",
			url:"insert.php",
			data:{
				newstitle:$("#newsTitle").val(),
				newsimg:$("#newsImg").val(),
				newscontent:$("#newsContent").val(),
				newsclassify:$("#newsClassify").val(),
				addtime:$("#addTime").val()
			},
			dataType:"json",
			success:function(data){
				if (data.success) { 
					$("#createResult").html(data.msg);
					$(".show").removeClass("show");
					init();
				} else {
					$("#createResult").html("出现错误：" + data.msg);
				}  
			},
			error: function(jqXHR){     
			   alert("发生错误：" + jqXHR.status);  
			}
		});
		// 保存之后关闭当前页面，返回初始化页面
		
	});
}

//修改新闻，使用on绑定事件对动态生产的元素
$(document).on('click','.edit-btn',function(e){
	var event = e.target;
	var newsid = $(event).parent().parent().children(".news-id").text();
	// console.log(newsid);
	//取得当前行数据内容
	var newsid = $(event).parent().parent().children(".news-id").html();
	var newstitle = $(event).parent().parent().children(".news-title").html();
	var newsimg = $(event).parent().parent().children(".news-img").html();
	var newscontent = $(event).parent().parent().children(".news-content").html();
	var newsclassify = $(event).parent().parent().children(".news-classify").html();
	var addtime = $(event).parent().parent().children(".add-time").html();

	// 关闭当前显示，打开修改表单
	$(".show").removeClass("show");
	$(".edit").addClass("show");
	// 将上面保存信息填入
	$("#edit-newsId").val(newsid);
	$("#edit-newsTitle").val(newstitle);
	$("#edit-newsImg").val(newsimg);
	$("#edit-newsContent").val(newscontent);
	$("#edit-newsClassify").val(newsclassify);
	$("#edit-addTime").val(addtime);
	// alert(addtime);
	// 异步提交表单接收修改后的数据
	$("#edit-save").click(function(){
		$.ajax({
			type:"post",
			url:"update.php",
			data:{
					newsid:$("#edit-newsId").val(),
					newstitle:$("#edit-newsTitle").val(),
					newsimg:$("#edit-newsImg").val(),
					newscontent:$("#edit-newsContent").val(),
					newsclassify:$("#edit-newsClassify").val(),
					addtime:$("#edit-addTime").val()
			},
			dataType:'json',
			beforeSubmit: beforeUpdate,
			success: updateSuccess,
			error:addErr

		});
		
		function addErr(){
			alert("添加新闻失败");
		}
		function beforeUpdate() {
			$(".show").removeClass("show");
		}

		function updateSuccess(data) {
			console.log(data)
			alert("修改成功");
		}
	});


});
//删除新闻,使用on绑定事件对动态生成的元素
$(document).on('click', '.del-btn', function(e) {
	// console.log(e.target);
	// console.log($(this));
	var event = e.target;
	var newsid = $(event).parent().parent().children(".news-id").text();
	// console.log(newsid);

	var re = confirm('确定要删除这条新闻吗?');
	if (re) {

		$.ajax({
			type: "post",
			url: "delete.php",
			dataType: 'json',
			data: {
				newsid
			}, //data是对象
			success: function(data) {
				$(event).parent().parent().remove();

			}
		})

	}

});

