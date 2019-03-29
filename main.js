const bpmControl = document.getElementById("bpmControl");
const bpmUI = document.getElementById("bpmUI");
let bpm = 130;
bpmUI.innerHTML = "130";

snare = new Audio("Snare Absynth A 2.wav");
kick = new Audio("Kick 909 4.wav");
hiHat = new Audio("ClosedHH 808X.wav");
let start = false;

document.onkeypress = (event) =>{
    if(event.keyCode === 32){//space
        if(start){
            start = false;
        }else{
            start = true;
        }
    }
}

bpmControl.onchange = function(){
    bpm = bpmControl.value;
    bpmUI.innerHTML = bpmControl.value.toString();

}

let beatInc = 0;
let beatSec = 0;
let songPos = 0;
(time=(frame)=>{

    if(start){
        beatInc++;
        beatSec = beatInc/60;
        let spb = 1/(bpm/60);

        if(beatSec >= spb){
            songPos++;
            beatInc = 0;
            if(songPos%4 === 0){
                kick.currentTime = 0;
                kick.play();
            }
            if(songPos%4 === 1){
                hiHat.currentTime = 0;
                hiHat.play();
            }
            if(songPos%4 === 2){
                snare.currentTime = 0;
                snare.play();
            }
            if(songPos%4 === 3){
                hiHat.currentTime = 0;
                hiHat.play();
            }
        }
    }
   requestAnimationFrame(time);
})();
