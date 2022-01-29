const url="https://api2.binance.com/api/v3/ticker/24hr"
fetch(url).then((some)=>some.json())
.then((data)=>{
    console.log(data);
    var div=document.getElementById("Main")
    for(var i=0;i<=data.length;i=i+1){

   
    var div2=document.createElement("div");
    div2.classList.add("card")
    var span=document.createElement("span");
    var span2=document.createElement("span");
    var span3=document.createElement("span");
    var span4=document.createElement("span");
    var span5=document.createElement("span");
    var span6=document.createElement("span");
    var span7=document.createElement("span");
    span.innerText=("Symbol -" + data[i].symbol);
    span2.innerText="Count -"  + data[i].count;

    span3.innerText= "Highest Price - "+ data[i].highPrice;
    span4.innerText="Open Price -"  + data[i].openPrice;
    span5.innerText="Low Price -"  + data[i].lowPrice;
    span6.innerText="Volume -"  + data[i].volume;
    span7.innerText="Price Change -"  + data[i].priceChange;
    div2.append(span,span2,span4,span3,span5,span6,span7)
    div.appendChild(div2)
}
})