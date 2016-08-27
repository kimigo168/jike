$(document).ready(function(){
	 // 先初始化
	eachQuery();
	//点击则切换显示
	 $(".nav-btn").each(function(index){
	 	$(this).click(function(){
	 		$("span.cur").removeClass("cur");
	 		$(this).addClass("cur");
	 		eachQuery();
	 	});
	 });

});

function eachQuery(){
	$(".nav-btn").each(function(index){
		if($(this).hasClass("cur")){
			var newskind=$(this).attr("data-type");
			console.log(newskind);
			// if (newskind === "local"){
			// 	$.ajax({
			// 	url:'selectnews.php',
			// 	type:'post',
			// 	// cache:'false',
			// 	data:{newskind},
			// 	dataType:'text',
			// 	beforeSend:beforeCheck,
			// 	error:errCheck,//错误执行方法
			// 	success:function(data){
			// 		// console.log(data);
			// 		inputData(eval('('+data+')'));//将text转化成json
				
			// 	}//成功执行方法
			// });
			// } else {
				$.ajax({
					url:'selectnews.php',
					type:'post',
					// cache:'false',
					data:{newskind},
					dataType:'json',
					beforeSend:beforeCheck,
					error:errCheck,//错误执行方法
					success:succCheck,//成功执行方法
				});
			// }

			//查询之前清空显示区
			function beforeCheck() {
				$('.index-list').empty();
			}

			function errCheck(data){
				console.log(JSON.stringify(data));
				alert(data);
			}
			function succCheck(data){
				inputData(data);
			}
		}
	});	
}
// 成功选择数据后返回的函数
function inputData(data){
	//创建json数据并循环输出
	for( i in data){
		//创建json数据
		var dataInt={
				newdata:[{
					newstitle:data[i].newstitle,
					newsimg:data[i].newsimg,
					newscontent:data[i].newscontent,
					addtime:data[i].addtime
				}]
			}
		//创建DOM结构并循环输出json数据
		$.each(dataInt.newdata,function(key,value){
			var listbox = $("<div>").addClass("index-list").appendTo($(".index-view-subpage"));
			var itembox = $("<div>").addClass("index-list-item").appendTo($(listbox));
			var main = $("<div>").addClass("index-list-main").appendTo($(itembox));
			var imgbox = $("<div>").addClass("index-list-image").appendTo($(main));
			var img = $("<img>").attr("src",$(value).attr("newsimg")).appendTo($(imgbox));
			var text = $("<div>").addClass("index-list-text").appendTo($(main));
			var title = $("<div>").addClass("index-list-text-title").text($(value).attr("newstitle")).appendTo($(text));
			var content =$("<div>").addClass("index-list-text-abs").text($(value).attr("newscontent")).appendTo($(text));
			var bottom = $("<div>").addClass("index-list-bottom").appendTo($(main));
			var addtime = $("<div>").addClass("index-list-time").text($(value).attr("addtime")).appendTo($(bottom));
		});
	}
}
