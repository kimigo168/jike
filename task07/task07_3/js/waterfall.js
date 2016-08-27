$(document).ready(function(){
	$(window).on("load",function(){
		showBottomct();
		imgLocation();
		var dataImg = {"data":[{"src":"11.jpg"},{"src":"2.jpg"},{"src":"13.jpg"},{"src":"14.jpg"},{"src":"4.jpg"}]};
		window.onscroll = function(){
			if(scrollside()){
				$.each(dataImg.data,function(index,value){
					var box = $("<div>").addClass("box").appendTo($(".container"));
					var content = $("<div>").addClass("content").appendTo(box);
					// console.log("./img/"+$(value).attr("src"));
					$("<img>").attr("src","./img/"+$(value).attr("src")).appendTo(content);
					// $("<div>")addClass("hover").appendTo(content);
					
				});
				imgLocation();
			}
		};
		$(window).on("resize",function(){
			imgLocation();
		});
	});
});
function showBottomct(){
	var content = $(".content");
	content.each(function(){
		$(this).hover(function(){
			$(this).children(".hover").toggle();
		})
	})
}
function scrollside(){
	var box = $(".box");
	var lastboxHeight = box.last().get(0).offsetTop + Math.floor(box.last().height()/2);
	var documentHeight = $(document).height();
	var scrollHeight = $(window).scrollTop();
	return (lastboxHeight<scrollHeight+documentHeight)?true:false;
}

function imgLocation(){
	var box = $(".box");
	var boxWidth = box.eq(0).width();
	var num = Math.floor($(window).width()/boxWidth);
	var boxArr = [];
	box.each(function(index, value) {
		// console.log(index+"--"+value);
		var boxHeight = box.eq(index).height();
		if(index<num){
			boxArr[index] = boxHeight;
			// console.log(boxHeight);
			// 获取到高度
		}else{
			var minboxHeight = Math.min.apply(null,boxArr);
			// console.log(minboxHeight);
			// 获取到最小的高度，然后再找出位置
			var minboxIndex = $.inArray(minboxHeight,boxArr);
			// console.log(minboxIndex);
			$(value).css({
				"position":"absolute",
				"top":minboxHeight,
				"left":box.eq(minboxIndex).position().left//??
			});
			boxArr[minboxIndex] += box.eq(index).height();//
		}
	});
}