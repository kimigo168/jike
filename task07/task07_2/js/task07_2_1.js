$(document).ready(function(){
	// 顶部输入文本框focus事件
	$(".search-text").focus(function(){
		$(".search-btn").css({
			"border":"1px solid #35b558",
			"background-color":"#35b558",
			"background-image":"url(./img/topsearch-icon2_8c8d8b0.png)",
			"background-position":"center center",
			"background-repeat":"no-repeat"
		});
		$(".hot-words").hide();
	});
	$(".search-text").blur(function(){
		$(".hot-words").show();
		$(".search-btn").css({
			"border":"1px solid #dfdfdf",
			"background-color":"#fff",
			"background-image":"url(./img/topsearch-icon_e1f5df2.png)",
			"background-position":"center center",
			"background-repeat":"no-repeat"
		});

	});
	
	// 问好旁隐藏文本框
		$(".way").each(function(index){
			$(this).hover(function(){
				$(this).parent().find('.way-info').css("display","block");

			},function(){
				$(this).parent().find('.way-info').css("display","none");
			});
		});
	// way.eq(0)
	// 广告图片切换
	$(".focuswork-wrap").slide({titCell:"",mainCell:".university-list ul",autoPage:true,effect:"leftLoop",vis:7});
	$(".focuswork-wrap").slide({titCell:"",mainCell:".endetail ul",autoPage:true,effect:"leftLoop",vis:6});
	$(".focuswork-wrap").slide({titCell:"",mainCell:".lesson-list ul",autoPage:true,effect:"leftLoop",vis:3});


	// 问答、wiki、课程、社群tab菜单切换
	$(".litop").each(function(index){
			$(this).mouseover(function(){
				$(".start-list").css("display","none")
				$(".movelist").css("display","block");
				$(".licontent ul.tab-content").removeClass("tab-content");
				$(".type-list li.active").removeClass("active");
				$(".licontent ul").eq(index).addClass("tab-content");
				$(".type-list li").eq(index).addClass("active");
			})
		});
		var timoutid;
		$(".type-list li").each(function(index){
			var liNode = $(this);
			$(this).mouseenter(function(){
				timoutid = setTimeout(function(){
					$(".licontent ul.tab-content").removeClass("tab-content");
					$(".type-list li.active").removeClass("active");
					$(".licontent ul").eq(index).addClass("tab-content");
					liNode.addClass("active");
				},300);
			}).mouseleave(function(){
				clearTimeout(timoutid);
				$(".movelist").hide();
				$(".start-list").show();
			})
		});
		$(".movelist").mouseleave(function(){
			$(".movelist").hide();
			$(".start-list").show();
		});
});


function showsubmenu(str){
	var ulmenu = document.getElementById('main_lesson');
	var lis = ulmenu.getElementsByClassName('w_lesson');
	for(var i = 0; i < lis.length;i++){
		lis[i].getElementsByTagName('ul')[0].style.display = 'none';
	}
	var submenu = document.getElementById(str).getElementsByTagName("ul")[0];//获得li下的第一个ul
	submenu.style.display="block";
}

