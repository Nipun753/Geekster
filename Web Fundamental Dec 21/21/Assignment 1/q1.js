

var num1=prompt("Enter first number");

num1=parseInt(num1);

var num2=prompt("Enter 2nd number");

num2=parseInt(num2);

var num3=prompt("Enter 3rd number");

num3=parseInt(num3);

if(num1<=num2 && num1<= num3){
alert(num1 + " is smaller");
}
else if(num2<=num1 && num2<= num3){
alert(num2+" is smaller");
}
else{
alert(num3+" is smaller")
}
