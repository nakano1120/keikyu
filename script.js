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
    [0,4,5,11,12,16,17,21,25,26,32,33,37,38,42,45,46,53,54,57,58],
    [1,3,8,11,15,16,22,24,28,31,33,36,37,41,47,48,51,57,58],
    [0,7,8,10,17,18,21,27,28,37,40,42,47,50,54,58],
    [0,4,7,10,14,18,20,24,28,30,33,37,40,44,48,50,54,57],
    [0,4,8,10,13,17,20,28,30,38,39,48,49,59],
    [1,13,14,23,25,31,35,40,49,51],
    [2,10,20,28,41,51],
    [1,]
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
let coming_for = [
    [2],
    [-1],
    [-1],
    [-1],
    [-1],
    [0,3,0,3,0,1,0,10,3,0,0,3],
    [0,10,0,3,10,3,0,10,3,0,10,3,10,0,0,10,4],
    [0,0,10,4,0,0,10,4,0,0,10,4,0,3,0,10,0,0,3,3,11,0,0,3,11,3],
    [0,0,1,0,1,0,3,11,0,0,3,10,4,0,0,8,3,9,0,11,0],
    [0,2,11,0,0,10,3,0,0,3,0,1,3,0,1,3],
    [0,10,3,0,1,2,11,0,3,1,0,10,3,0,1,0],
    [11,3,0,1,0,10,3,0,1,0,11,3,0,1,0],
    [10,3,0,1,0,11,3,0,1,0,10,3,0,1,0],
    [11,3,0,1,0,10,3,0,1,0,11,3,0,1,0],
    [11,3,0,1,0,10,3,2,1,0,10,3,0,1,2],
    [10,0,3,0,1,0,1,3,0,0,3,0,10,3,0,0,3,0],
    [10,0,10,3,0,9,3,2,10,3,0,11,3,0,0,10,3],
    [0,10,3,0,0,10,3,0,10,3,0,0,10,3,0,11,3,0,0,10,3],
    [0,3,0,0,1,3,3,0,0,3,0,10,2,3,0,0,3,6,0],
    [3,0,2,3,10,0,3,0,0,6,3,0,0,3,0,10],
    [3,0,0,3,0,1,3,0,0,3,0,7,3,0,0,3,0,5],
    [3,0,0,3,2,10,0,1,0,0,0,0,3,10]
    [0,1,4,0,0,2,1,0,1,2],
    [0,1,2,11,4,2],
    [2]
]
///0:品川 1:泉岳寺 2:神奈川新町 3:羽田空港 4:京急川崎
///5:成田空港 6:印旛日本医大 7:印西牧の原 8:京成佐倉
///9:押上 10:青砥 11:京成高砂
let kinds=["<div class='local'>普通</div>","<div class='ex'>急行</div>","<div class='lex'>特急</div>","<div class='rle'>快特</div>"]
let kinds_e=["<div class='eng local'>Local</div>","<div class='eng ex'>Expless</div>","<div class='eng lex'>Ltd Exp.</div>","<div class='eng rle'>Ltd Exp.</div>"]
let kinds_s=["停車駅：弘明寺、井土ヶ谷、南太田、黄金町、日ノ出町、戸部、横浜、神奈川","停車駅：弘明寺、井土ヶ谷、日ノ出町、横浜、京急東神奈川、神奈川新町","停車駅：横浜、神奈川新町","停車駅：横浜、京急川崎、京急蒲田"]
let kinds_for=["品　川","泉 岳 寺","神奈川新町","羽田空港","京急川崎","成田空港","印旛日本医大","印西牧の原","京成佐倉","押　上","青　砥","京成高砂"]
let kinds_fore=["Shinagawa","Sengakuji","<p style='font-size:3vw;'>Kanagawa-shinmachi</p>","<p style='font-size:3vw;'>Haneda Airport</p>","<p style='font-size:3vw;'>Keikyu-kawasaki</p>","<p style='font-size:3vw;'>Narita Airport</p>","<p style='font-size:3vw;'>Imba-nihonidai</p>","<p style='font-size:3vw;'>Inzai-makinohara</p>","Keisei-sakura","Oshiage","Aoto","<p style='font-size:3vw;'>Keisei-takasago</p>"]
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
    for(let l=0;nowpos != 1;l+=1){
        if(coming_second[hours][l] <= minutes){
            console.log("A")
            continue;
        }else{
            console.log(l)
            console.log(coming_second[hours].length)
            if(l == coming_second[hours].length){
                console.log("B"+coming_second[hours][l-1])
                if(coming_second[hours][l-1] <= minute){
                    console.log("BD")
                    document.getElementById("t1").innerHTML=(hours+1)+":"+(coming_second[hours+1][0]);
                    document.getElementById("k1").innerHTML=kinds[coming_kind[hours+1][0]]
                    console.log("aaa"+Math.round(minutes/10))
                    if(Math.round(second/10)%2==0){
                        document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours+1][0]]
                    }else{
                        document.getElementById("k1").innerHTML=kinds_e[coming_kind[hours+1][0]]
                        document.getElementById("fj1").innerHTML=kinds_fore[coming_for[hours+1][0]]
                    }
                    ///document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l]]
                    ///document.getElementById("fe1").innerHTML=kinds_fore[coming_for[hours][l]]
                    if(coming_second[hours+1][0]<10){
                        document.getElementById("t1").innerHTML=(hours+1)+":0"+(coming_second[hours+1][0]);
                    }
                    document.getElementById("t2").innerHTML=(hours+1)+":"+(coming_second[hours+1][1]);
                    document.getElementById("k2").innerHTML=kinds[coming_kind[hours+1][1]]
                    if(Math.round(second/10)%2==0){
                        document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours+1][1]]
                    }else{
                        document.getElementById("k2").innerHTML=kinds_e[coming_kind[hours+1][1]]
                        document.getElementById("fj2").innerHTML=kinds_fore[coming_for[hours+1][1]]
                    }
                    //document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours][l+1]]
                    //document.getElementById("fe2").innerHTML=kinds_fore[coming_for[hours][l+1]]
                    if(coming_second[hours+1][1]<10){
                        document.getElementById("t2").innerHTML=(hours+1)+":0"+(coming_second[hours+1][1]);
                    }
                    document.getElementById("t3").innerHTML=(hours+1)+":"+(coming_second[hours+1][2]);
                    document.getElementById("k3").innerHTML=kinds[coming_kind[hours+1][2]]
                    if(Math.round(second/10)%2==0){
                        document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours+1][2]]
                    }else{
                        document.getElementById("k3").innerHTML=kinds_e[coming_kind[hours+1][2]]
                        document.getElementById("fj3").innerHTML=kinds_fore[coming_for[hours+1][2]]
                    }
                    ///document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours][l+2]]
                    ///document.getElementById("fe3").innerHTML=kinds_fore[coming_for[hours][l+2]]
                    if(coming_second[hours+1][2]<10){
                        document.getElementById("t3").innerHTML=(hours+1)+":0"+(coming_second[hours+1][2]);
                    }
                }else{
                    console.log("B")
                    document.getElementById("t1").innerHTML=(hours)+":"+(coming_second[hours][l-1]);
                    document.getElementById("k1").innerHTML=kinds[coming_kind[hours][l-1]]
                    if(Math.round(second/10)%2==0){
                        document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l-1]]
                    }else{
                        document.getElementById("k1").innerHTML=kinds_e[coming_kind[hours][l-1]]
                        document.getElementById("fj1").innerHTML=kinds_fore[coming_for[hours][l-1]]
                    }
                    ///document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l-1]]
                    ///document.getElementById("fe1").innerHTML=kinds_fore[coming_for[hours][l-1]]
                    if(coming_second[hours][l-1]<10){
                        document.getElementById("t1").innerHTML=(hours)+":0"+(coming_second[hours][l-1]);
                    }
                    document.getElementById("t2").innerHTML=(hours+1)+":"+(coming_second[hours+1][0]);
                    document.getElementById("k2").innerHTML=kinds[coming_kind[hours+1][0]]
                    if(Math.round(second/10)%2==0){
                        document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours+1][0]]
                    }else{
                        document.getElementById("k2").innerHTML=kinds_e[coming_kind[hours+1][0]]
                        document.getElementById("fj2").innerHTML=kinds_fore[coming_for[hours+1][0]]
                    }
                    //document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours+1][0]]
                    //document.getElementById("fe2").innerHTML=kinds_fore[coming_for[hours+1][0]]
                    if(coming_second[hours+1][0]<10){
                        document.getElementById("t2").innerHTML=(hours+1)+":0"+(coming_second[hours+1][0]);
                    }
                    document.getElementById("t3").innerHTML=(hours+1)+":"+(coming_second[hours+1][1]);
                    document.getElementById("k3").innerHTML=kinds[coming_kind[hours+1][1]]
                    if(Math.round(second/10)%2==0){
                        document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours+1][1]]
                    }else{
                        document.getElementById("k3").innerHTML=kinds_e[coming_kind[hours+1][1]]
                        document.getElementById("fj3").innerHTML=kinds_fore[coming_for[hours+1][1]]
                    }
                    //document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours+1][1]]
                    //document.getElementById("fe3").innerHTML=kinds_fore[coming_for[hours+1][1]]
                    if(coming_second[hours+1][1]<10){
                        document.getElementById("t3").innerHTML=(hours+1)+":0"+(coming_second[hours+1][1]);
                    }
                }
            }else if(l+1 == coming_second[hours].length){
                console.log("I")
                document.getElementById("t1").innerHTML=(hours)+":"+(coming_second[hours][l]);
                document.getElementById("k1").innerHTML=kinds[coming_kind[hours][l]]
                console.log("aaa"+Math.round(minutes/10))
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l]]
                }else{
                    document.getElementById("k1").innerHTML=kinds_e[coming_kind[hours][l]]
                    document.getElementById("fj1").innerHTML=kinds_fore[coming_for[hours][l]]
                }
                ///document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l]]
                ///document.getElementById("fe1").innerHTML=kinds_fore[coming_for[hours][l]]
                if(coming_second[hours][l]<10){
                    document.getElementById("t1").innerHTML=(hours)+":0"+(coming_second[hours][l]);
                }
                document.getElementById("t2").innerHTML=(hours)+":"+(coming_second[hours+1][0]);
                document.getElementById("k2").innerHTML=kinds[coming_kind[hours+1][0]]
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours+1][0]]
                }else{
                    document.getElementById("k2").innerHTML=kinds_e[coming_kind[hours+1][0]]
                    document.getElementById("fj2").innerHTML=kinds_fore[coming_for[hours+1][0]]
                }
                //document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours][l+1]]
                //document.getElementById("fe2").innerHTML=kinds_fore[coming_for[hours][l+1]]
                if(coming_second[hours+1][0]<10){
                    document.getElementById("t2").innerHTML=(hours+1)+":0"+(coming_second[hours+1][0]);
                }
                document.getElementById("t3").innerHTML=(hours+1)+":"+(coming_second[hours+1][1]);
                document.getElementById("k3").innerHTML=kinds[coming_kind[hours+1][1]]
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours+1][1]]
                }else{
                    document.getElementById("k3").innerHTML=kinds_e[coming_kind[hours+1][1]]
                    document.getElementById("fj3").innerHTML=kinds_fore[coming_for[hours+1][1]]
                }
                //document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours+1][0]]
                //document.getElementById("fe3").innerHTML=kinds_fore[coming_for[hours+1][0]]
                if(coming_second[hours+1][1]<10){
                    document.getElementById("t3").innerHTML=(hours+1)+":0"+(coming_second[hours+1][1]);
                }
            }else if(l+2 == coming_second[hours].length){
                console.log("C")
                document.getElementById("t1").innerHTML=(hours)+":"+(coming_second[hours][l]);
                document.getElementById("k1").innerHTML=kinds[coming_kind[hours][l]]
                console.log("aaa"+Math.round(minutes/10))
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l]]
                }else{
                    document.getElementById("k1").innerHTML=kinds_e[coming_kind[hours][l]]
                    document.getElementById("fj1").innerHTML=kinds_fore[coming_for[hours][l]]
                }
                ///document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l]]
                ///document.getElementById("fe1").innerHTML=kinds_fore[coming_for[hours][l]]
                if(coming_second[hours][l]<10){
                    document.getElementById("t1").innerHTML=(hours)+":0"+(coming_second[hours][l-1]);
                }
                document.getElementById("t2").innerHTML=(hours)+":"+(coming_second[hours][l+1]);
                document.getElementById("k2").innerHTML=kinds[coming_kind[hours][l+1]]
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours][l+1]]
                }else{
                    document.getElementById("k2").innerHTML=kinds_e[coming_kind[hours][l+1]]
                    document.getElementById("fj2").innerHTML=kinds_fore[coming_for[hours][l+1]]
                }
                //document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours][l+1]]
                //document.getElementById("fe2").innerHTML=kinds_fore[coming_for[hours][l+1]]
                if(coming_second[hours][l+1]<10){
                    document.getElementById("t2").innerHTML=(hours)+":0"+(coming_second[hours][l+1]);
                }
                document.getElementById("t3").innerHTML=(hours+1)+":"+(coming_second[hours+1][0]);
                document.getElementById("k3").innerHTML=kinds[coming_kind[hours+1][0]]
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours+1][0]]
                }else{
                    document.getElementById("k3").innerHTML=kinds_e[coming_kind[hours+1][0]]
                    document.getElementById("fj3").innerHTML=kinds_fore[coming_for[hours+1][0]]
                }
                //document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours+1][0]]
                //document.getElementById("fe3").innerHTML=kinds_fore[coming_for[hours+1][0]]
                if(coming_second[hours+1][0]<10){
                    document.getElementById("t3").innerHTML=(hours+1)+":0"+(coming_second[hours+1][0]);
                }
            }else{
                console.log("D")
                document.getElementById("t1").innerHTML=(hours)+":"+(coming_second[hours][l]);
                document.getElementById("k1").innerHTML=kinds[coming_kind[hours][l]]
                console.log("aaa"+Math.round(minutes/10))
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l]]
                }else{
                    document.getElementById("k1").innerHTML=kinds_e[coming_kind[hours][l]]
                    document.getElementById("fj1").innerHTML=kinds_fore[coming_for[hours][l]]
                }
                ///document.getElementById("fj1").innerHTML=kinds_for[coming_for[hours][l]]
                ///document.getElementById("fe1").innerHTML=kinds_fore[coming_for[hours][l]]
                if(coming_second[hours][l]<10){
                    document.getElementById("t1").innerHTML=(hours)+":0"+(coming_second[hours][l]);
                }
                document.getElementById("t2").innerHTML=(hours)+":"+(coming_second[hours][l+1]);
                document.getElementById("k2").innerHTML=kinds[coming_kind[hours][l+1]]
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours][l+1]]
                }else{
                    document.getElementById("k2").innerHTML=kinds_e[coming_kind[hours][l+1]]
                    document.getElementById("fj2").innerHTML=kinds_fore[coming_for[hours][l+1]]
                }
                //document.getElementById("fj2").innerHTML=kinds_for[coming_for[hours][l+1]]
                //document.getElementById("fe2").innerHTML=kinds_fore[coming_for[hours][l+1]]
                if(coming_second[hours][l+1]<10){
                    document.getElementById("t2").innerHTML=(hours)+":0"+(coming_second[hours][l+1]);
                }
                document.getElementById("t3").innerHTML=(hours)+":"+(coming_second[hours][l+2]);
                document.getElementById("k3").innerHTML=kinds[coming_kind[hours][l+2]]
                if(Math.round(second/10)%2==0){
                    document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours][l+2]]
                }else{
                    document.getElementById("k3").innerHTML=kinds_e[coming_kind[hours][l+2]]
                    document.getElementById("fj3").innerHTML=kinds_fore[coming_for[hours][l+2]]
                }
                ///document.getElementById("fj3").innerHTML=kinds_for[coming_for[hours][l+2]]
                ///document.getElementById("fe3").innerHTML=kinds_fore[coming_for[hours][l+2]]
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