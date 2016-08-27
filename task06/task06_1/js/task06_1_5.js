var num1=0,result=0,num2="0"; 
var operate=true; //判断输入状态的标志 
var flag=0; //判断计算状态的标志 
var quit=0; //防止
// 数字按键函数
function command(num){ 
	var str=String(document.getElementById('show').value); //获得当前显示数据 
	if(str!="0"){
		if(operate=true){
			str=str+String(num);
		}else{
			str=''+String(num);
		}
	}else{
		str=''+String(num);
	}
	document.getElementById('show').value=str; //刷新显示 
	operate=true; //重置输入状态 
	quit=0; //重置防止重复按键的标志 
} 
// 退格键，回删
function del(){
	var str = document.getElementById('show').value;
	if(str!="0"){
		if(str.length>1){//如果字符串长度至少2位
			str=str.substr(0,str.length-1); 
		}else{
			str="0";//如果字符串就一位了，直接将其置为0
		}
		console.log(str);	
	} else{
		str="0";
	}
	document.getElementById('show').value = str;//刷新屏幕显示
}
// 添加小数点
function dot(){
	var str = document.getElementById('show').value;
	if(str.indexOf(".")==-1){
		str=str+".";
		// console.log(str);
	}else{
		str=str;
	}
	document.getElementById('show').value = str;//刷新屏幕显示
}
// 添加正负号
function neg(){
	var str = document.getElementById('show').value;
	if(str!="0"){
		str=-str;
	}else{
		str=str;
	}
	document.getElementById('show').value = str;
}
// 清屏函数
function clearscreen(){
	var str = document.getElementById('show').value;
	str="0";
	result=0;
	num1=0;
	num2=0;
	document.getElementById('show').value = str;
}
// 定义各种运算法则
//加法
function plus(){
	calculate();//调用计算函数
	flag=1; //更改计算状态为加 
	operate=false; //更改输入状态 
	
}
 //减法 
function minus(){
	calculate(); 
	operate=false; 
	flag=2; 
} 
//乘法 
function times(){ 
	calculate(); 
	operate=false; 
	flag=3; 
} 
//除法 
function divide(){ 
	calculate(); 
	operate=false; 
	flag=4; 
} 
//求余 
function persent(){ 
	calculate(); 
	operate=false; 
	flag=5; 
} 
//求平方根
function sqrt(){
	calculate();
	operate=false;
	flag=6;
}
// 求正弦
function sin(){
	calculate();
	operate=false;
	flag=7;
}
//求余弦
function cos(){
	calculate();
	operate=false;
	calcul=8;
}
// 求正切
function tan(){
	calculate();
	operate=false;
	flag=9;
}
// 求倒数
function reverse(){
	calculate();
	operate=false;
	flag=10;
}
// 求自然对数
function log(){
	calculate();
	operate=false;
	flag=11;
}
// 求e的x指数
function exp(){
	calculate();
	operate=false;
	flag=12;
}
function persent(){ //求余 
	calculate(); 
	operate=false; 
	flag=13; 
} 
function pow(){
	calculate();
	operate=false;
	flag=14;
}
//等于 
function equal(){ 
	calculate(); 
	operate=false; 
	num1=0; 
	result=0; 
	num2="0"; 
} 
//计算函数
function calculate() {
	num2 = Number(document.getElementById('show').value);
	if (num1 != 0 && quit != 1) {
		switch (flag) {
			case 1:
				result = num1 + num2;
				console.log(result);
				break;
			case 2:
				result = num1 - num2;
				break;
			case 3:
				result = num1 * num2;
				break;
			case 4:
				if (num2 != 0) {
					result = num1 / num2;
				} else {
					alert("被除数不能为零！");
				}
				break;
			case 5:
				result = num1 % num2;
				break;
			case 6:
				if(num1<0){
					alert("被开方数不能小于0！");
				}
				else{
					result = Math.sqrt(num1);	
				}
				break;
			case 7:
				result = Math.sin(num1);
				break;
			case 8:
				result = Math.cos(num1);
				break;
			case 9:
				result = Math.tan(num1);
				break;
			case 10:
				if (num1 != 0) {
					result = 1 / num1;
				} else {
					result = 0;
				}
				break;
			case 11:
				result = Math.log(num1);
				break;
			case 12:
				result = Math.exp(num1);
				break;
			case 13:
				if(num2!=0){
					result=num1%num2;	
				}else{
					alert("num2不能为零！");
				}
				break; 
			case 14:
				result=Math.pow(num1,num2);
				break;
			default:
		}
		quit = 1;
	} else {
		quit=0;
		result = num2;
		// console.log(numshow);
	}
	num2 = String(parseFloat(result.toFixed(8)));
	document.getElementById('show').value = num2;
	num1 = result; //存储当前值

}