
// console.log(min);
let btnStart = document.querySelector(".start");
let btnRestart = document.querySelector(".restart");
let clock =document.querySelector("#clock p");


let min = 0;
let sec = 0;
let msec = 0;
let run = false;
let interval;

const timer = () => {
 
    msec++;
    if(msec == 100){
        sec++;
        msec = 0;

    }

    if (sec == 60){
        min++;
        sec = 0
    }


min=String(min).length < 2 ? "0" + min : min;
sec=String(sec).length < 2 ? "0" + sec : sec;
msec=String(msec).length < 2 ? "0" + msec : msec;
clock.innerHTML= `${min}:${sec}:${msec}`;

}

btnStart.addEventListener("click", () =>{

    run=!run;
    if(run){
        interval = setInterval(timer,10);
        btnStart.innerHTML= `<i class="fa-solid fa-circle-pause "></i>`
    }
    else{
        clearInterval(interval);
        btnStart.innerHTML=`<i class="fa-solid fa-circle-play "></i>`;
    }
})
