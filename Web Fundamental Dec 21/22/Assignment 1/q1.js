console.log("H1");

var arr=[];
var num1 =prompt("Enter 1st number");
num1=parseInt(num1);
arr.push(num1)

var num2 =prompt("Enter 2nd number");
num2=parseInt(num2);
arr.push(num2)

var num3 =prompt("Enter 3rd number");
num3=parseInt(num3);
arr.push(num3)
console.log(arr)

if(arr[0]>=arr[1] && arr[0]>=arr[2]){
alert(arr[0]+" is greater")
}
else if(arr[1]>=arr[0] && arr[1]>=arr[2]){
alert(arr[1]+" is greater")
}
else{
alert(arr[2]+" is greater")
}



