var num1=0,result=0,num2="0"; 
var operate=0; //判断输入状态的标志 
var flag=0; //判断计算状态的标志 
var quit=0; //防止重复按键的标志 
// 数字按键函数
function command(num){ 
	var str=String(document.getElementById('show').value); //获得当前显示数据 
	str=(str!="0") ? ((operate==0) ? str : "") : ""; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回空值; 
	str=str + String(num); //给当前值追加字符 
	document.getElementById('show').value=str; //刷新显示 
	operate=0; //重置输入状态 
	quit=0; //重置防止重复按键的标志 
} 
// 添加正负号
function neg(){
	var str=String(document.getElementById('show').value);
	str=(str!="0") ? ((operate==0) ? str : "") : ""; 
	str=-str;
	document.getElementById('show').value=str;
}
// 输入小数点函数
function dot(){ 
	var str=String(document.getElementById('show').value); 
	str=(str!="0") ? ((operate==0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
	for(i=0; i<=str.length;i++){ //判断是否已经有一个点号 
	if(str.substr(i,1)==".") return false; //如果有则不再插入 
	} 
	str=str + "."; 
	document.getElementById('show').value=str; 
	operate=0; 
} 
// 清屏
function clearscreen(){
	num=0; 
	result=0; 
	numshow="0";
	document.getElementById('show').value = "0";
}
// 退格
function del(){ //退格 
	var str=String(document.getElementById('show').value); 
	str=(str!="0") ? str : ""; 
	str=str.substr(0,str.length-1); 
	str=(str!="") ? str : "0"; 
	document.getElementById('show').value=str; 
} 
// 定义各种运算法则
//加法
function plus(){
	calculate();//调用计算函数
	flag=1; //更改计算状态为加 
	operate=1; //更改输入状态 
	
}
 //减法 
function minus(){
	calculate(); 
	operate=1; 
	flag=2; 
} 
//乘法 
function times(){ 
	calculate(); 
	operate=1; 
	flag=3; 
} 
//除法 
function divide(){ 
	calculate(); 
	operate=1; 
	flag=4; 
} 
//求余 
function persent(){ 
	calculate(); 
	operate=1; 
	flag=5; 
} 
//求平方根
function sqrt(){
	calculate();
	operate=1;
	flag=6;
}
// 求正弦
function sin(){
	calculate();
	operate=1;
	flag=7;
}
//求余弦
function cos(){
	calculate();
	operate=1;
	calcul=8;
}
// 求正切
function tan(){
	calculate();
	operate=1;
	flag=9;
}
// 求倒数
function reverse(){
	calculate();
	operate=1;
	flag=10;
}
// 求自然对数
function log(){
	calculate();
	operate=1;
	flag=11;
}
// 求e的x指数
function exp(){
	calculate();
	operate=1;
	flag=12;
}
function persent(){ //求余 
	calculate(); 
	operate=1; 
	flag=13; 
} 
function pow(){
	calculate();
	operate=1;
	flag=14;
}
//等于 
function equal(){ 
	calculate(); 
	operate=1; 
	num1=0; 
	result=0; 
	num2="0"; 
} 
//计算函数
function calculate() {
	num2 = Number(document.getElementById('show').value);
	console.log(num1);
	if (num1 != 0 && quit != 1) {
		switch (flag) {
			case 1:
				result = num1 + num2;
				// console.log(numshow);
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
				result=num1%num2;
				break; 
			case 14:
				result=Math.pow(num1,num2);
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