$(document).ready(function(){
	// 切换增加，删除，修改，查看页面
	$(".btn-nav").each(function(index){
		$(this).click(function(){
			$("div.show").removeClass("show");
			$(".item").eq(index).addClass("show");
		})
	});
	// 增加页面，点击提交
	$("#save").click(function(){
		console.log(222);
		$.ajax({
			type:"POST",
			url:"insert.php",
			data:{
				newstitle:$('#newsTitle').val(),
				newsimg:$('#newsImg').val(),
				newscontent:$("#newsContent").val(),
				newsclassify:$("#newsClassify").val(),
				addtime:$("#addTime").val()
			},
			dataType:"json",
			success:function(data){
				if (data.success) { 
					$("#createResult").html(data.msg);
				} else {
					$("#createResult").html("出现错误：" + data.msg);
				}  
			},
			error: function(jqXHR){     
			   alert("发生错误：" + jqXHR.status);  
			}, 
		});
	});
});