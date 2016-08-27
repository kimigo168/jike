window.onload = change;
function change(){
	var colors = ["#4CAF50","#FF0000","#f50","#2196F3"];
	var btngroup = document.getElementById('themeBtn').getElementsByTagName("button");
	var themeBtn = document.getElementById('menusNavlist');//要改变颜色的导航
	var aList = document.getElementsByClassName('demo');//要改变颜色的单独几个链接数组
	for(var j=0;j<=aList.length-1;j++){
		// console.log(localStorage.getItem("x"));
		aList[j].style.color=localStorage.getItem("x");//将存在localstorage中的颜色值取出，赋给链接
	}
	themeBtn.style.backgroundColor = localStorage.getItem("menus.style.borderColor");
	for(var i=0;i<btngroup.length;i++){
		(function demo(index){
			btngroup[i].addEventListener('click',function(){//给每个button绑定click事件,点击第一个对应第一种颜色
				document.getElementById('menusNavlist').style.backgroundColor = colors[index];//将当前所点击button颜色赋给ul
				var aList = document.getElementsByClassName('demo');
				for(var j = 0; j <= aList.length-1; j++){
					aList[j].style.color = colors[index];//将当前所点击button颜色赋给ul
					localStorage.setItem("x",colors[index]);//存储链接的颜色
					localStorage.setItem("menus.style.borderColor",colors[index]);//存储ul的颜色
				}
			});
		})(i);
	}	
}



// window.onload =init;
// function init(){
// 	var themeBtn = document.getElementById('menusNavlist');
// 	localStorage.getItem("themeBtn.style.backgroundColor");
// 	localStorage.getItem("themeBtn.style.borderColor");
// 	themeBtn.style.backgroundColor=localStorage.getItem("themeBtn.style.backgroundColor");
// 	themeBtn.style.borderColor=localStorage.getItem("themeBtn.style.backgroundColor");
// }
// function setGreen(){
// 	var themeBtn = document.getElementById('menusNavlist');
// 	var menus = document.getElementById('menus');
// 	var demos = document.getElementsByClassName('demo');
// 	demo.style.color="#4CAF50";
// // 	menus.style.borderColor= "#4CAF50";
// 	themeBtn.style.backgroundColor= "#4CAF50";
// 	localStorage.setItem("themeBtn.style.backgroundColor","#4CAF50");
// 	localStorage.setItem("menus.style.borderColor","#4CAF50");
// }
// function setRed(){
// 	var themeBtn = document.getElementById('menusNavlist');
// 	var menus = document.getElementById('menus');
// 	menus.style.borderColor= "#DE5252";
// 	localStorage.setItem("menus.style.borderColor","#DE5252");
// 	themeBtn.style.backgroundColor= "#DE5252";
// 	localStorage.setItem("themeBtn.style.backgroundColor","#DE5252");
// }
// function setYellow(){
// 	var themeBtn = document.getElementById('menusNavlist');
// 	var menus = document.getElementById('menus');
// 	menus.style.borderColor = "#f50";
// 	themeBtn.style.backgroundColor = "#f50";	
// 	localStorage.setItem("themeBtn.style.backgroundColor","#f50");
// 	localStorage.setItem("menus.style.borderColor","#f50");
// }
// function setBlue(){
// 	var themeBtn = document.getElementById('menusNavlist');
// 	var menus = document.getElementById('menus');
// 	menus.style.borderColor = "#2196F3";
// 	themeBtn.style.backgroundColor = "#2196F3";	
// 	localStorage.setItem("themeBtn.style.backgroundColor","#2196F3");
// 	localStorage.setItem("menus.style.borderColor","#2196F3");
// }
