const url ="https://api2.binance.com/api/v3/ticker/24hr"

fetch(url).then((data) =>data.json())
.then((jData)=>{
    console.log(jData);
    for (var i=0;i<jData.length;i=i+1){
        var table=document.getElementById("Table");
        var tr =document.createElement("tr")
        tr.classList.add("row")
        var td1 =document.createElement("td")
        var td2=document.createElement("td")
        var td3 =document.createElement("td")
        var td4=document.createElement("td")
       td1.innerText=jData[i].symbol
     
       td2.innerText=jData[i].count
       td3.innerText=jData[i].highPrice
       td4.innerText = jData[i].volume;

     tr.appendChild(td1);
     tr.appendChild(td2)
     tr.appendChild(td3)
     tr.appendChild(td4)
     table.appendChild(tr)

    }
}

)
.catch((err)=>console.log("API has failed"))