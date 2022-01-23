var arrimg=[
    'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',

];




function showStories(){
    var storiesshow=document.getElementById("stories")
    
   
    for(var i = 0; i < arrimg.length; i = i + 1) {
        var img_ref = document.createElement("img");
        img_ref.src = arrimg[i];
        img_ref.classList.add("storiesimg")

        storiesshow.appendChild(img_ref);
    }
}

showStories();


var postTop=[
    {
    img:'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    text:"troll_offical",
    dot:'...',
    main_post:'https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
    img:'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    text:"troll_offical",
    dot:'...',
    main_post:'https://images.unsplash.com/photo-1569173112611-52a7cd38bea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        },
    {
                img:'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            text:"troll_offical",
            dot:''
            },
            {
                img:'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
                text:"troll_offical",
                dot:'...'
                },             
]


function showPostTop(){
    var Posttopshow=document.getElementById("post")
    
    for (var i=0; i<postTop.length; i=i+1){
        var img_ref = document.createElement("img");
        img_ref.src = postTop[i].img;
        img_ref.classList.add("mainimg")
        var text_ref = document.createElement("span");
        text_ref.innerText=postTop[i].text;
        var dot_ref = document.createElement("i");
        dot_ref.innerText=postTop[i].dot;
       var mainpost_ref=document.createElement("img")
       mainpost_ref.src = postTop[i].main_post;
       mainpost_ref.classList.add("postimg")
       mainpost_ref.addEventListener("dblclick",abcd)
        Posttopshow.appendChild(img_ref);
        Posttopshow.appendChild(text_ref)
        Posttopshow.appendChild(dot_ref)
        Posttopshow.appendChild(mainpost_ref)
    }
}

showPostTop();


var heart_one=document.getElementById("Like1")

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
