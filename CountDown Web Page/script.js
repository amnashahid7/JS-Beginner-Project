let endDate= "8 August 2023 11:25 PM";
document.getElementById("end-Date").innerHTML= endDate;
let input= document.querySelectorAll("input");

let clock=()=>{
    let endTime= new Date(endDate);
    let now= new Date();
    //console.log(endTime);
    //console.log(now);
    let diff = (endTime - now)/1000;
    //console.log(diff);
    if(diff<0) return;
    input[0].value= Math.floor(diff/3600/24);
    input[1].value= Math.floor((diff/60/60)%24);
    input[2].value= Math.floor((diff/60)%60);
    input[3].value= Math.floor(diff%60);
}
clock();
setInterval(
    ()=>{
        clock();
    },1000
)