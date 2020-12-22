var min=0
var sec=0
var displayShow = (min + "0:0" + sec)
var numInput=0
var countMinVar 
var countSecVar 
var countDownVar 
var x


//Web API practice....
var context=new AudioContext();
var heatAudio = new Audio('heat.mp3'); 
//Sound Variables
var beepAudio = new Audio('beep.mp3'); 
var heatEndAudio = new Audio('heatEnd.mp3'); 
var threeBeeps = new Audio('3beeps.mp3')

/*beepAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);*/

function loopPoint() {
    heatAudio.loopStart
  
    heatAudio.play()
    
}



function addNumber1() {
    if (min==0 && sec==0) {
        sec=sec+1
        displayShow="00:0" + sec
    }else if (min==0 && sec>=1 && sec<10) {
        sec=(sec*10)+1
        displayShow="00:" + sec
    }else if (min==0 && sec>=10 &&numInput>0) {
        min=parseInt(sec/10)
        sec=(numInput*10)+1
        displayShow="0" + min + ":" + sec
    }else if (min==0 && sec>=10 &&numInput==0) {
        min=parseInt(sec/10)
        sec=1
        displayShow="0" + min + ":0" + sec
    }else if (min>=1 && min<10 && sec>=10) {
        min=(min*10)+parseInt(sec/10)
        sec=(numInput*10)+1
        if (numInput>0) {displayShow= min + ":" + sec}
        else displayShow= min + ":0" + sec
    }else if (min>=1 && min<10 && sec<10) { 
        min=(min*10)
        sec=(numInput*10)+1
        if (sec<10){displayShow= min + ":0" + sec}
        else {displayShow= min + ":" + sec}
    }
    
document.querySelector(".displayNum").innerHTML = displayShow
numInput=1
}
function addNumber2() {
    if (min==0 && sec==0) {
        sec=sec+2
        displayShow="00:0" + sec
    }else if (min==0 && sec>=1 && sec<10) {
        sec=(sec*10)+2
        displayShow="00:" + sec
    }else if (min==0 && sec>=10 &&numInput>0) {
        min=parseInt(sec/10)
        sec=(numInput*10)+2
        displayShow="0" + min + ":" + sec
    }else if (min==0 && sec>=10 &&numInput==0) {
        min=parseInt(sec/10)
        sec=2
        displayShow="0" + min + ":0" + sec
    }else if (min>=1 && min<10 && sec>=10) {
        min=(min*10)+parseInt(sec/10)
        sec=(numInput*10)+2
        if (numInput>0) {displayShow= min + ":" + sec}
        else displayShow= min + ":0" + sec
    }else if (min>=1 && min<10 && sec<10) { //NEW STATEMENT TO PASTE
        min=(min*10)
        sec=(numInput*10)+2
        if (sec<10){displayShow= min + ":0" + sec}
        else {displayShow= min + ":" + sec}
    }//END OF NEW STATEMENT
document.querySelector(".displayNum").innerHTML = displayShow
numInput=2
}
function addNumber3() {
    if (min==0 && sec==0) {
        sec=sec+3
        displayShow="00:0" + sec
    }else if (min==0 && sec>=1 && sec<10) {
        sec=(sec*10)+3
        displayShow="00:" + sec
    }else if (min==0 && sec>=10 &&numInput>0) {
        min=parseInt(sec/10)
        sec=(numInput*10)+3
        displayShow="0" + min + ":" + sec
    }else if (min==0 && sec>=10 &&numInput==0) {
        min=parseInt(sec/10)
        sec=3
        displayShow="0" + min + ":0" + sec
    }else if (min>=1 && min<10 && sec>=10) {
        min=(min*10)+parseInt(sec/10)
        sec=(numInput*10)+3
        if (numInput>0) {displayShow= min + ":" + sec}
        else displayShow= min + ":0" + sec
    }else if (min>=1 && min<10 && sec<10) { //NEW STATEMENT TO PASTE
        min=(min*10)
        sec=(numInput*10)+3
        if (sec<10){displayShow= min + ":0" + sec}
        else {displayShow= min + ":" + sec}
    }//END OF NEW STATEMENT
document.querySelector(".displayNum").innerHTML = displayShow
numInput=3
}
function addNumber4() {
    if (min==0 && sec==0) {
        sec=sec+4
        displayShow="00:0" + sec
    }else if (min==0 && sec>=1 && sec<10) {
        sec=(sec*10)+4
        displayShow="00:" + sec
    }else if (min==0 && sec>=10 &&numInput>0) {
        min=parseInt(sec/10)
        sec=(numInput*10)+4
        displayShow="0" + min + ":" + sec
    }else if (min==0 && sec>=10 &&numInput==0) {
        min=parseInt(sec/10)
        sec=4
        displayShow="0" + min + ":0" + sec
    }else if (min>=1 && min<10 && sec>=10) {
        min=(min*10)+parseInt(sec/10)
        sec=(numInput*10)+4
        if (numInput>0) {displayShow= min + ":" + sec}
        else displayShow= min + ":0" + sec
    }else if (min>=1 && min<10 && sec<10) { //NEW STATEMENT TO PASTE
        min=(min*10)
        sec=(numInput*10)+4
        if (sec<10){displayShow= min + ":0" + sec}
        else {displayShow= min + ":" + sec}
    }//END OF NEW STATEMENT
document.querySelector(".displayNum").innerHTML = displayShow
numInput=4
}
function addNumber5() {
    if (min==0 && sec==0) {
        sec=sec+5
        displayShow="00:0" + sec
    }else if (min==0 && sec>=1 && sec<10) {
        sec=(sec*10)+5
        displayShow="00:" + sec
    }else if (min==0 && sec>=10 &&numInput>0) {
        min=parseInt(sec/10)
        sec=(numInput*10)+5
        displayShow="0" + min + ":" + sec
    }else if (min==0 && sec>=10 &&numInput==0) {
        min=parseInt(sec/10)
        sec=5
        displayShow="0" + min + ":0" + sec
    }else if (min>=1 && min<10 && sec>=10) {
        min=(min*10)+parseInt(sec/10)
        sec=(numInput*10)+5
        if (numInput>0) {displayShow= min + ":" + sec}
        else displayShow= min + ":0" + sec
    }else if (min>=1 && min<10 && sec<10) { //NEW STATEMENT TO PASTE
        min=(min*10)
        sec=(numInput*10)+5
        if (sec<10){displayShow= min + ":0" + sec}
        else {displayShow= min + ":" + sec}
    }//END OF NEW STATEMENT
document.querySelector(".displayNum").innerHTML = displayShow
numInput=5
}
function addNumber6() {
    if (min==0 && sec==0) {
        sec=sec+6
        displayShow="00:0" + sec
    }else if (min==0 && sec>=1 && sec<10) {
        sec=(sec*10)+6
        displayShow="00:" + sec
    }else if (min==0 && sec>=10 &&numInput>0) {
        min=parseInt(sec/10)
        sec=(numInput*10)+6
        displayShow="0" + min + ":" + sec
    }else if (min==0 && sec>=10 &&numInput==0) {
        min=parseInt(sec/10)
        sec=6
        displayShow="0" + min + ":0" + sec
    }else if (min>=1 && min<10 && sec>=10) {
        min=(min*10)+parseInt(sec/10)
        sec=(numInput*10)+6
        if (numInput>0) {displayShow= min + ":" + sec}
        else displayShow= min + ":0" + sec
    }else if (min>=1 && min<10 && sec<10) { //NEW STATEMENT TO PASTE
        min=(min*10)
        sec=(numInput*10)+6
        if (sec<10){displayShow= min + ":0" + sec}
        else {displayShow= min + ":" + sec}
    }//END OF NEW STATEMENT
document.querySelector(".displayNum").innerHTML = displayShow
numInput=6
}
function addNumber7() {
    if (min==0 && sec==0) {
        sec=sec+7
        displayShow="00:0" + sec
    }else if (min==0 && sec>=1 && sec<10) {
        sec=(sec*10)+7
        displayShow="00:" + sec
    }else if (min==0 && sec>=10 &&numInput>0) {
        min=parseInt(sec/10)
        sec=(numInput*10)+7
        displayShow="0" + min + ":" + sec
    }else if (min==0 && sec>=10 &&numInput==0) {
        min=parseInt(sec/10)
        sec=7
        displayShow="0" + min + ":0" + sec
    }else if (min>=1 && min<10 && sec>=10) {
        min=(min*10)+parseInt(sec/10)
        sec=(numInput*10)+7
        if (numInput>0) {displayShow= min + ":" + sec}
        else displayShow= min + ":0" + sec
    }else if (min>=1 && min<10 && sec<10) { //NEW STATEMENT TO PASTE
        min=(min*10)
        sec=(numInput*10)+7
        if (sec<10){displayShow= min + ":0" + sec}
        else {displayShow= min + ":" + sec}
    }//END OF NEW STATEMENT
document.querySelector(".displayNum").innerHTML = displayShow
numInput=7
}
function addNumber8() {
    if (min==0 && sec==0) {
        sec=sec+8
        displayShow="00:0" + sec
    }else if (min==0 && sec>=1 && sec<10) {
        sec=(sec*10)+8
        displayShow="00:" + sec
    }else if (min==0 && sec>=10 &&numInput>0) {
        min=parseInt(sec/10)
        sec=(numInput*10)+8
        displayShow="0" + min + ":" + sec
    }else if (min==0 && sec>=10 &&numInput==0) {
        min=parseInt(sec/10)
        sec=8
        displayShow="0" + min + ":0" + sec
    }else if (min>=1 && min<10 && sec>=10) {
        min=(min*10)+parseInt(sec/10)
        sec=(numInput*10)+8
        if (numInput>0) {displayShow= min + ":" + sec}
        else displayShow= min + ":0" + sec
    }else if (min>=1 && min<10 && sec<10) { //NEW STATEMENT TO PASTE
        min=(min*10)
        sec=(numInput*10)+8
        if (sec<10){displayShow= min + ":0" + sec}
        else {displayShow= min + ":" + sec}
    }//END OF NEW STATEMENT
document.querySelector(".displayNum").innerHTML = displayShow
numInput=8
}
function addNumber9() {
    if (min==0 && sec==0) {
        sec=sec+9
        displayShow="00:0" + sec
    }else if (min==0 && sec>=1 && sec<10) {
        sec=(sec*10)+9
        displayShow="00:" + sec
    }else if (min==0 && sec>=10 &&numInput>0) {
        min=parseInt(sec/10)
        sec=(numInput*10)+9
        displayShow="0" + min + ":" + sec
    }else if (min==0 && sec>=10 &&numInput==0) {
        min=parseInt(sec/10)
        sec=9
        displayShow="0" + min + ":0" + sec
    }else if (min>=1 && min<10 && sec>=10) {
        min=(min*10)+parseInt(sec/10)
        sec=(numInput*10)+9
        if (numInput>0) {displayShow= min + ":" + sec}
        else displayShow= min + ":0" + sec
    }  
    else if (min>=1 && min<10 && sec<10) { //NEW STATEMENT TO PASTE
        min=(min*10)
        sec=(numInput*10)+9
        if (numInput>0) {displayShow= min + ":" + sec}
        else displayShow= min + ":0" + sec
    }//END OF NEW STATEMENT
document.querySelector(".displayNum").innerHTML = displayShow
numInput=9
}


function addNumber0() {
    if (min==0 && sec>0 && sec<10) { 
        sec=(sec*10)
        displayShow="00:" + sec
    }else if (min==0 && sec>=10 &&numInput>0)  {
        min=parseInt(sec/10)
        sec=(numInput*10)
        displayShow="0" + min + ":" + sec
    }else if (min==0 && sec>=10 &&numInput==0)  {
        min=parseInt(sec/10)
        sec=0
        displayShow="0" + min + ":0" + sec
    }
     else if (min>0 && min<10 && numInput>0)  {
        min=(min*10) + parseInt(sec/10)
        sec=(numInput*10)
        displayShow = min + ":" + sec
    }else if (min>0 && min<10 && numInput==0)  {
        min=(min*10) + parseInt(sec/10)
        sec=0
        displayShow=min + ":0" + sec
    }
document.querySelector(".displayNum").innerHTML = displayShow
numInput=0
}


function showCountDown(){ 
    heatEndAudio.loop=false;
    threeBeeps.loop=false;
    

    if (min<10 && sec<10) {
        displayShow = "0" + min + ":" + "0"+ sec
    } else if (min>10 && sec<10) {displayShow = min + ":0" +  sec}
    else if (min<10 && sec>10) {displayShow = "0" + min + ":" + sec
    } else if (min>10 && sec>10) {displayShow = min + ":" + sec
    }
    document.querySelector(".displayNum").innerHTML = displayShow
    //SOUND functions! Play the heating noise, and then the final three beeps.
    ///
    ///

    loopPoint()
    
    if (min==0 && sec==0)
     {
         setTimeout(heatAudio.pause(),3000) 
         heatEndAudio.play()
         threeBeeps.play() 
         clearInterval(countDownVar)
         clearInterval(countSecVar)
         document.getElementById("toggle2").onclick = function(){startAdd()}
         screenGrey()
    }
}



function screenGrey(){
    document.querySelector(".doorOff").style.background="linear-gradient(0deg, rgba(17,17,17,1) 0%, rgba(94,94,94,1) 100%)"
}
function screenYellow(){
    document.querySelector(".doorOff").style.background="radial-gradient(circle, rgba(255,252,248,1) 0%, rgba(252,176,69,1) 100%)"
}

function startAdd(){
setTimeout(screenYellow, 1000);
    beepAudio.play()
    countSecVar = setInterval(countSec, 1000)
    countDownVar =  setInterval(showCountDown, 1000)
    if (min<1 && sec<1) {sec+=30}
    document.getElementById("toggle2").onclick = function(){nullFunction()}
    document.getElementById("toggle1").onclick = function() {stopFunction()}
}

    
   
function countSec(){

    if (min>0 ||sec>=0)     
        {sec--}
    if (min>0 && sec<0) {
        min--
        sec+=60

    }
    
}

function nullFunction() {
    //sec+=30
    //if (sec>60) 
   // min++
    //sec-=60
    beepAudio.play()
    
    
}


function stopFunction() {
    beepAudio.play()
    clearInterval(countDownVar)
    clearInterval(countSecVar)
    document.getElementById("toggle1").onclick = function() {clearFunction()}
    document.getElementById("toggle2").onclick = function(){startAdd()}
    setTimeout(heatAudio.pause(),1000) 
    screenGrey()
    if (min>0 || sec>0) {heatEndAudio.play()}
    
    
    
}

function clearFunction() {
    min = 0
    sec = 0
    document.querySelector(".displayNum").innerHTML = "0" + min + ":0" + sec 
    document.getElementById("toggle1").onclick = function() {stopFunction()}
    beepAudio.play()
}