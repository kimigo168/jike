
!(function(){
	
})(jQuery)// 从localstorage中读取记录
$(document).ready(function(){
	var x = $('#s_skin_container').attr('class');
	x = localStorage.getItem("$('#s_skin_container').attr('class')");
	$("#s_skin_container").addClass(x);

	var y = localStorage.getItem('src');
	if(y!=null){
		$(".bdlogo").attr("src",y);	
	}else{
		$(".bdlogo").attr("src","img/bdmainlogo.png");		
	}
	
	var z = $(".c1").attr('class');
	z = localStorage.getItem("$('.c1').attr('class')");
	$(".c1").addClass(z);
});
//用户下拉显示菜单
$(document).ready(function(){
	// 对div的处理
	$("#s_user_name_menu").hover(function(){
		$(this).removeClass("hover0");
		$(this).show();//显示下拉
	},function(){
		$(this).addClass("hover0");
		var aThis = $(this).parent().children(".s-user-name-top");
		var tthis = $(this);
		setTimeout(function(){
			if(aThis.hasClass("hover1")){//说明没有从div回到a
				tthis.hide();//隐藏下拉
			}
		},300);
	});

	// 用户下拉
	$(".s-user-name-top").hover(function(){
		$(this).removeClass("hover1");
		$(this).parent().children("#s_user_name_menu").show();//显示下拉
	},function(){
		var divThis = $(this).parent().children("#s_user_name_menu");
		setTimeout(function(){
			if(divThis.hasClass("hover0")){//说明没从a进入div
				divThis.hide();
			}
		},300);
		$(this).addClass("hover1");
	});

	//设置下拉菜单设置
	// 对div的处理
	$("#s_user_setting_menu").hover(function(){
		$(this).removeClass("hover0");
		$(this).show();//显示下拉
	},function(){
		$(this).addClass("hover0");
		var aThis = $(this).parent().children(".s-user-setting-top");
		var tthis = $(this);
		setTimeout(function(){
			if(aThis.hasClass("hover1")){//说明没有从div回到a
				tthis.hide();//隐藏下拉
			}
		},300);
	});

	// 对a按钮的处理
	$(".s-user-setting-top").hover(function(){
		$(this).removeClass("hover1");
		$(this).parent().children("#s_user_setting_menu").show();//显示下拉
	},function(){
		var divThis = $(this).parent().children("#s_user_setting_menu");
		setTimeout(function(){
			if(divThis.hasClass("hover0")){//说明没从a进入div
				divThis.hide();
			}
		},300);
		$(this).addClass("hover1");
	});
	//设置下拉菜单end
	// 更多产品
	$(".s_bri").hover(function(){
		$(".brwrapper").show();
	});
	$(".brwrapper").mouseleave(function(){
		$(".brwrapper").hide();
	});
	// 更多产品end

	// 点击tab菜单切换
	$("span.s-menu-item").each(function(index){
		var spanNode = $(this);
		$(this).click(function(){
			$("div.tabin").removeClass("tabin");
			$("span.current").removeClass("current");
			$("div.s-content").eq(index).addClass("tabin");
			spanNode.addClass("current");
		});
	});

	// 天气显示隐藏
	$(".weather-detail-wrapper").hover(function(){//div
			$(this).removeClass("hover0"); 
			$(this).show(); 
		},function(){ 
			$(this).addClass("hover0"); 
			var anniu = $(".weather-mod"); 
			var tthis = $(this); 
			setTimeout(function(){ 
				if(anniu.hasClass("hover1")){//说明没有从div回到按钮 
					tthis.hide(); 
				}
			},500); 
		}); 
		$(".weather-mod").hover(function(){//按钮
			setTimeout(function(){
				$(".weather-detail-wrapper").show(); 
			},1000);
			$(this).removeClass("hover1"); 
			
		},function(){ 
			var divThis = $(".weather-detail-wrapper"); 
			setTimeout(function() { 
				if (divThis.hasClass("hover0")) {//说明没有从按钮进入div 
					divThis.hide(); 
				}
     		}, 500); 
			$(this).addClass("hover1");	
		}); 
	// 点击换肤按钮
	$(".s-skin").click(function(){
		$(".s-skin-layer").slideDown();
		$(".s-skin-opacity-set span").css("visibility","visible");
		$(".s-skin-set").show();
	});
	// 点击“收起”收起菜单
	$(".s-skin-up").click(function(){
		$(".s-skin-layer").slideUp();
		$("li.choose-li").removeClass("choose-li");
		// $(".s-skin-opacity-set span").css("visibility","hidden");
		// $(".s-skin-set").hide();
	});
	// 点击不使用皮肤，取消选定
	$(".s-skin-set").click(function(){
		localStorage.clear();
		localStorage.setItem('src','img/bdmainlogo.png');
		$(".s-skin-opacity-set span").css("visibility","hidden");//隐藏透明度选择条
		$(".s-skin-set").hide();//不使用字样消失
		$("li.choose-li").removeClass("choose-li");//图像选取图标消失
		$("#s_skin_container").removeClass();//取消背景图片设定
		$(".bdlogo").attr("src","img/bdmainlogo.png");//将百度logo还原
		$(".s-top-wrap").css("background-image","none");//顶板导航栏颜色还原
		$(".c1").removeClass("c2");//导航字体改回白色
	});
});
$(document).ready(function(){
	$(".skin-img-item").each(function(index){
		var isClick = 0;
		var i = $(this).index();
		$(this).hover(function(){//鼠标划入当前li
			// console.log(isClick);
			$(".preview-view").removeClass("preview-nobg");
			$(".preview-view").addClass("preview-whitelogo");//需存!!	
			$(".preview-skin-view").attr("src",'img/bg/bg'+i+'.jpg');
			$(this).click(function(isClick){//是否点击选取，是则isClick返回true
				isClick = 1;
				console.log(isClick);
				$(".s-skin-opacity-set span").css("visibility","visible");//显示背景透明度条
				$(".s-skin-set").show();//显示"不使用换肤"字样和叉图标
				$("li.choose-li").removeClass("choose-li");
				$("li.skin-img-item").eq(index).addClass("choose-li");//显示选中绿色勾定图标
				// 以下是改变主题需要同时变化
				// console.log("change"+i);
				$("#s_skin_container").removeClass();//移除之前定义背景图片
				// 改变背景图片
				$("#s_skin_container").addClass("change"+i);//需存！！
				var skinContainer = $("#s_skin_container").attr("class");
				localStorage.setItem("$('#s_skin_container').attr('class')",skinContainer);	 
				// 使预览图片和背景图片一致
				$(".preview-skin-view").attr("src",'img/bg/bg'+i+'.jpg');//需存！！？？
				// 改变百度logo为白色
				$(".bdlogo").attr("src","img/logo_white.png");//需存！！
				var bdlogo = $(".bdlogo").attr('src');
				// localStorage.setItem("img/logo_white.png","bdlogo");	
				// console.log(bdlogo);
				// localStorage.src = "img/logo_white.png";
				localStorage.setItem('src','img/logo_white.png');
				// $(".s-top-wrap").css("background-image","linear-gradient(rgba(15,25,50,.3) 0,rgba(15,25,50,.3) 100%)");//需存，有问题？
				// 改变导航字体，需存！！
				$(".c1").addClass("c2");
				var saveColor = $(".c1").attr("class");
				localStorage.setItem("$('.c1').attr('class')",saveColor);
				return isClick;
			});
		},function(isClick){//鼠标划出当前li
			// console.log(isClick);
				$(".preview-view").removeClass("preview-whitelogo");
				$(".preview-view").addClass("preview-nobg");//存储
				$(".preview-skin-view").removeAttr("src");	
		});
	});
});

