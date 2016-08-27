function count(){
	var txt1 = document.getElementById("text1").value;//获取第一个输入框的值

	var txt2 =document.getElementById("text2").value;//获取第二个输入框的值
	var select = document.getElementById("select").value;//获取第三个输入框的值
	
	var result = '';
	if(txt1!=''&&txt2!=''){//输入非空字符串
		if(!isNaN(txt1) && !isNaN(txt2)){
			txt1 = Number(txt1);
			txt2 = Number(txt2);
		switch(select){
			case '+':
				result= txt1+txt2;
				break;
			case '-':
				result=txt1-txt2;
				break;
			case '*':
				result = parseFloat((txt1 * txt2).toFixed(3));
				break;
			case '/':
				if(txt2!=0){
					result=txt1/txt2;	
				}
				else{
					alert("分母不能为0!");
				}
				break;
			default:
		}
		document.getElementById("output").value = result;
		}
		else{
			alert("请输入正确的数字!");
		}	
	}
	
	else{
		alert("请输入!");
	}
	
}