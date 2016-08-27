var arr = ["a","x","b","d","m","a","k","m","p","j","a"];
var count = {};
var position = {};
//遍历arr，统计每个字母出现次数，并记录字母所在位置
arr.forEach(function(value, index){
    if(count[value]){
        count[value]++;
        position[value]+= ","+index; 
    } else {
        count[value] = 1;
        position[value] = ""+index;
    }
});
console.log(count);
console.log(position);

//获取出现最多的字母
var max = 0;
var letter;
for(var i in count){
    if(count[i] > max ){
        max = count[i];
        letter = i; 
    }
}
alert("最多字母的是：" + letter+"   位置分布：" + position[letter]);
console.log("最多字母的是：" + letter);
console.log("位置分布：" + position[letter]);