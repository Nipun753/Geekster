var img_ref =document.getElementById("postimg1");
var heart_one=document.getElementById("Like1")
console.log(img_ref);
console.log(heart_one)
var cout =0
function abcd(){
    heart_one.style.color="red";
    cout =cout+1;
    var dis =document.getElementById("displayLike")
    dis.innerText=(cout + " Likes")
}
function heart(){
    if(heart_one.style.color=="red"){
        heart_one.style.color="black"
        cout =cout-1;
    var dis =document.getElementById("displayLike")
    dis.innerText=(cout + " Likes")
    }
    else{
        heart_one.style.color="red"
        cout =cout+1;
    var dis =document.getElementById("displayLike")
    dis.innerText=(cout + " Likes")
    }
}
heart_one.addEventListener("click",heart)
img_ref.addEventListener("dblclick",abcd)