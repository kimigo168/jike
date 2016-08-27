var num=0,result=0,numshow="0"; 
var operate=0; //判断输入状态的标志 
var calcul=0; //判断计算状态的标志 
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
	calcul=1; //更改计算状态为加 
	operate=1; //更改输入状态 
	
}
 //减法 
function minus(){
	calculate(); 
	operate=1; 
	calcul=2; 
} 
//乘法 
function times(){ 
	calculate(); 
	operate=1; 
	calcul=3; 
} 
//除法 
function divide(){ 
	calculate(); 
	operate=1; 
	calcul=4; 
} 
//求余 
function persent(){ 
	calculate(); 
	operate=1; 
	calcul=5; 
} 
//求平方根
function sqrt(){
	calculate();
	operate=1;
	calcul=6;
}
// 求正弦
function sin(){
	calculate();
	operate=1;
	calcul=7;
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
	calcul=9;
}
// 求倒数
function reverse(){
	calculate();
	operate=1;
	calcul=10;
}
// 求自然对数
function log(){
	calculate();
	operate=1;
	calcul=11;
}
// 求e的x指数
function exp(){
	calculate();
	operate=1;
	calcul=12;
}
function persent(){ //求余 
	calculate(); 
	operate=1; 
	calcul=13; 
} 
function pow(){
	calculate();
	operate=1;
	calcul=14;
}
//等于 
function equal(){ 
	calculate(); 
	operate=1; 
	num=0; 
	result=0; 
	numshow="0"; 
} 
//计算函数
function calculate() {
	numshow = Number(document.getElementById('show').value);
	console.log(num);
	if (num != 0 && quit != 1) {
		switch (calcul) {
			case 1:
				result = num + numshow;
				// console.log(numshow);
				break;
			case 2:
				result = num - numshow;
				break;
			case 3:
				result = num * numshow;
				break;
			case 4:
				if (numshow != 0) {
					result = num / numshow;
				} else {
					alert("被除数不能为零！");
				}
				break;
			case 5:
				result = num % numshow;
				break;
			case 6:
				if(num<0){
					alert("被开方数不能小于0！");
				}
				else{
					result = Math.sqrt(num);	
				}
				break;
			case 7:
				result = Math.sin(num);
				break;
			case 8:
				result = Math.cos(num);
				break;
			case 9:
				result = Math.tan(num);
				break;
			case 10:
				if (num != 0) {
					result = 1 / num;
				} else {
					result = 0;
				}
				break;
			case 11:
				result = Math.log(num);
				break;
			case 12:
				result = Math.exp(num);
				break;
			case 13:
				result=num%numshow;
				break; 
			case 14:
				result=Math.pow(num,numshow);
			default:
		}
		quit = 1;
	} else {
		quit=0;
		result = numshow;
		// console.log(numshow);
	}
	numshow = String(parseFloat(result.toFixed(8)));
	document.getElementById('show').value = numshow;
	num = result; //存储当前值

}