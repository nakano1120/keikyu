let holiday = new Date();
let day= holiday.getDay();

let judge_holiday = 0
if ( day == 0 ) {
    judge_holiday = 2;
}else if ( day == 6 ){
    judge_holiday = 1
}
let timer    = null,
    textObj  = null,
    execBtn  = null,
    clearBtn = null,
    n        = 0;

let startIntervalFunc = function() {
	if (!timer) timer = setInterval(execIntervalFunc, 1000);
};
let coming_hour = [1,0,0,0,0,12,17,26,21,16,16,15,15,15,15,18,17,21,19,16,18,14,10,6]
let coming_second = [
    [1],
    [-1],
    [-1],
    [-1],
    [-1],
    [1,9,15,25,30,34,40,44,47,51,56,58],
    [2,6,11,14,20,22,27,30,31,35,39,41,45,48,52,55,56],
    [0,1,4,5,9,10,14,15,18,19,23,24,28,31,32,35,36,40,42,43,47,49,50,54,57,58],
    [2,4,8,9,13,16,17,20,24,25,27,31,32,36,38,45,46,51,52,57,59],
    [6,8,13,14,18,24,25,29,34,35,39,43,44,49,55,56],
    [0,5,6,11,15,17,22,23,26,34,35,42,47,49,55,59],
    [2,7,9,15,18,22,27,29,34,38,42,47,49,55,59],
    [2,7,9,15,19,22,27,29,35,39,42,47,49,55,59],
    [2,7,9,15,19,22,27,29,35,39,42,47,49,55,59],
    [2,7,9,15,19,22,27,29,34,39,42,47,48,53,57],
    [0,2,5,9,14,19,24,25,29,34,35,39,44,45,49,53,54,58],
    [3,8,13,14,18,22,24,30,34,36,40,44,46,51,52,55,56],
    [0,4,5,11,15,16,22,24,28,31,33,36,37,41,47,48,51,57,58],
    [0,7,8,10,17,18,21,27,28,37,40,42,47,50,54,58],
    [0,4,8,10,13,17,20,28,30,38,39,48,49,59],
    [1,13,14,23,25,31,35,40,49,51],
    [2,10,20,28,41,51],
    [1]
]
let coming_kind = [
    [0],
    [-1],
    [-1],
    [-1],
    [-1],
    [0,1,0,3,0,2,0,2,1,0,2,1],
    [0,2,0,2,2,0,3,2,1,0,2,0,2,0,3,2,0],
    [3,0,2,0,3,0,2,0,3,0,2,0,2,2,0,2,0,2,2,0,2,2,0,2,2,0],
    [2,0,2,0,3,2,0,2,3,0,2,2,0,3,0,2,0,2,0,2,0],
    [3,0,3,0,0,3,1,0,3,1,0,3,1,0,3,1],
    [0,3,1,0,3,1,2,0,1,3,0,2,1,0,3,0],
    [2,1,0,3,0,2,1,0,3,0,2,1,0,3,0],
    [2,1,0,3,0,2,1,0,3,0,2,1,0,3,0],
    [2,1,0,3,0,2,1,0,3,0,2,1,0,3,0],
    [2,1,0,3,0,2,1,0,3,0,2,1,0,3,0],
    [2,0,1,0,3,0,3,1,0,3,1,0,3,1,0,3,1,0],
    [3,0,2,1,0,2,1,0,3,1,0,2,1,2,0,2,1],
    [0,3,1,2,0,2,1,0,3,1,2,0,2,1,0,3,1,2,0,2,1],
    [0,1,3,0,2,1,1,0,3,1,0,2,0,1,3,0,1,3,0],
    [1,3,0,1,3,0,1,3,0,3,1,0,3,1,0,3],
    [1,0,3,1,0,3,1,0,3,1,0,3,1,0,3,1,0,3]
    [1,0,3,1,0,3,0,3,0,3,0,3,0,2],
    [0,2,0,2,0,0,2,0,2,0],
    [0,2,0,2,0,2],
    [0]
]
let kinds=["<div class='local'>普通</div>","<div class='ex'>急行</div>","<div class='lex'>特急</div>","<div class='rle'>快特</div>"]
let kinds_ryo=["6両","8両","8両","8両"]
let execIntervalFunc = function() {
    let jtime = new Date();
    let hour = jtime.getHours();
    let minute = jtime.getMinutes();
    let second = jtime.getSeconds();
    let nowpos = 0
    let bonus = 0;
    document.getElementById("clock").innerText= hour + ":" + minute + ":" + second
    if (second < 10 && minute < 10){  
        document.getElementById("clock").innerText = hour + ":0" + minute + ":0" + second  
    }else if (second < 10){
        document.getElementById("clock").innerText = hour + ":" + minute + ":0" + second
    }else if(minute < 10){
        document.getElementById("clock").innerText = hour + ":0" + minute + ":" + second 
    }
    let minutes = minute;
    let hours=hour;
    if(hour < 5){
        hours = 5;
        minutes = 0;
    }
    for(let l=0;nowpos != 1;l++){
        if(coming_second[hours][l] < minutes){
            console.log("ぽ")
            continue;
        }else{
            console.log("て")
            if(l == coming_second[hours].length){
                document.getElementById("t1").innerHTML=(hours)+":"+(coming_second[hours][l]);
                document.getElementById("k1").innerHTML=kinds[coming_kind[hours][l]]
                document.getElementById("r1").innerHTML=kinds_ryo[coming_kind[hours][l]]
                if(coming_second[hours][l]<10){
                    document.getElementById("t1").innerHTML=(hours)+":0"+(coming_second[hours][l]);
                }
                document.getElementById("t2").innerHTML=(hours)+":"+(coming_second[hours+1][0]);
                document.getElementById("k2").innerHTML=kinds[coming_kind[hours+1][0]]
                document.getElementById("r2").innerHTML=kinds_ryo[coming_kind[hours+1][0]]
                if(coming_second[hours+1][0]<10){
                    document.getElementById("t2").innerHTML=(hours)+":0"+(coming_second[hours+1][0]);
                }
                document.getElementById("t3").innerHTML=(hours)+":"+(coming_second[hours+1][1]);
                document.getElementById("k3").innerHTML=kinds[coming_kind[hours+1][1]]
                document.getElementById("r3").innerHTML=kinds_ryo[coming_kind[hours+1][1]]
                if(coming_second[hours+1][1]<10){
                    document.getElementById("t3").innerHTML=(hours)+":0"+(coming_second[hours+1][1]);
                }
            }else if(l+1 == coming_second[hours].length){
                document.getElementById("t1").innerHTML=(hours)+":"+(coming_second[hours][l]);
                document.getElementById("k1").innerHTML=kinds[coming_kind[hours][l]]
                document.getElementById("r1").innerHTML=kinds_ryo[coming_kind[hours][l]]
                if(coming_second[hours][l]<10){
                    document.getElementById("t1").innerHTML=(hours)+":0"+(coming_second[hours][l]);
                }
                document.getElementById("t2").innerHTML=(hours)+":"+(coming_second[hours][l+1]);
                document.getElementById("k2").innerHTML=kinds[coming_kind[hours][l+1]]
                document.getElementById("r2").innerHTML=kinds_ryo[coming_kind[hours][l+1]]
                if(coming_second[hours][l+1]<10){
                    document.getElementById("t2").innerHTML=(hours)+":0"+(coming_second[hours][l+1]);
                }
                document.getElementById("t3").innerHTML=(hours)+":"+(coming_second[hours+1][0]);
                document.getElementById("k3").innerHTML=kinds[coming_kind[hours+1][0]]
                document.getElementById("r3").innerHTML=kinds_ryo[coming_kind[hours+1][0]]
                if(coming_second[hours+1][0]<10){
                    document.getElementById("t3").innerHTML=(hours)+":0"+(coming_second[hours+1][0]);
                }
            }else{
                document.getElementById("t1").innerHTML=(hours)+":"+(coming_second[hours][l]);
                document.getElementById("k1").innerHTML=kinds[coming_kind[hours][l]]
                document.getElementById("r1").innerHTML=kinds_ryo[coming_kind[hours][l]]
                if(coming_second[hours][l]<10){
                    document.getElementById("t1").innerHTML=(hours)+":0"+(coming_second[hours][l]);
                }
                document.getElementById("t2").innerHTML=(hours)+":"+(coming_second[hours][l+1]);
                document.getElementById("k2").innerHTML=kinds[coming_kind[hours][l+1]]
                document.getElementById("r2").innerHTML=kinds_ryo[coming_kind[hours][l+1]]
                if(coming_second[hours][l+1]<10){
                    document.getElementById("t2").innerHTML=(hours)+":0"+(coming_second[hours][l+1]);
                }
                document.getElementById("t3").innerHTML=(hours)+":"+(coming_second[hours][l+2]);
                document.getElementById("k3").innerHTML=kinds[coming_kind[hours][l+2]]
                document.getElementById("r3").innerHTML=kinds_ryo[coming_kind[hours][l+2]]
                if(coming_second[hours][l+2]<10){
                    document.getElementById("t3").innerHTML=(hours)+":0"+(coming_second[hours][l+2]);
                }
            }
            console.log("と")

            nowpos += 1;
        }
    }
};

let clearIntervalFunc = function() {
	clearInterval(timer);
	time = null;
	n = 0;
	textObj.value = n;
};

startIntervalFunc();