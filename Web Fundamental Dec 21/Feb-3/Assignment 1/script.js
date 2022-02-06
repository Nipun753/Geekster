var count=0;
var likeCount=0;
var dislikeCout=0;
var like_btn=document.getElementById("like")
like_btn.addEventListener('click',like)
var id,id2

function like(){
    clearInterval(id2)
     id =setInterval(()=>{
        likeCount=likeCount+1;
        count=count+1;
        var c=document.getElementById("counter");
        c.innerText=count;
        var likedisplay=document.getElementById("lik");
        likedisplay.innerText=likeCount;
        return likeCount,count
    }
    ,1000)
   return id
}

var dislike_btn=document.getElementById("dislike")
dislike_btn.addEventListener('click',()=>{
    clearInterval(id)
     id2=setInterval(dislike, 1000);
})

function dislike(){
    
    count=count-1;
    dislikeCout=dislikeCout+1;
    var c=document.getElementById("counter");
    c.innerText=count;
    var dislikedisplay=document.getElementById("dis")
dislikedisplay.innerText=dislikeCout;
return dislikeCout
}

function reset(){
    clearInterval(id)
    clearInterval(id2)
    var c=document.getElementById("counter");
    count=0;
    
    c.innerText=count;
    var dislikedisplay=document.getElementById("dis");
    dislikeCout=0
    dislikedisplay.innerText=dislikeCout;
    var likedisplay=document.getElementById("lik");
    likeCount=0;
    likedisplay.innerText=likeCount;
}