const start=5;
let time =start*60;

const coutdownEl=document.getElementById("countdown");
const id =setInterval(updateTime,1000)
function updateTime(){
    const minutes=Math.floor(time/60);
   
    let sec=time%60;
    sec=sec<10? '0' +sec :sec;
    coutdownEl.innerText=`${minutes}:${sec}`
    if(minutes<=0 && sec<=00){
        clearInterval(id)
    }
    time--;
}

var stop_btn=document.getElementById("stop")
stop_btn.addEventListener('click',stopTimer)

function stopTimer(){
    clearInterval(id)
}

var stop_btn=document.getElementById("reset")
stop_btn.addEventListener('click',resetTimer)

function resetTimer(){
    clearInterval(id)
    

    coutdownEl.innerText=`0:00`
}