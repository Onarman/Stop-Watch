
// console.log(min);
let btnStart = document.querySelector(".start");
let btnPause = document.querySelector(".pause");
let btnrestart = document.querySelector(".restart");

let min = 0;
let sec = 0;
let msec = 0;

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
clock.innerHTML= `{min}:{sec}:{msec}`;

}
