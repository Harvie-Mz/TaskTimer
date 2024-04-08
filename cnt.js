$(".Flag").toggle();
let milliseconds = 0; 
let seconds = 0; 
let minutes = 0;
var ballance ;
var timer ;
let cnt = 0 ;
function Ballancer(){
    ballance =  setInterval(()=>{
    ++cnt
    if(cnt == 100)
        cnt = 0;
     },10);
    }

function displayTimer(){
     timer =  setInterval(()=>{
        var time = document.querySelector("h4");
        ++milliseconds
            if(milliseconds == 100){
                milliseconds = 0;
                ++seconds;
                if(seconds == 60){
                    seconds = 0;
                    ++minutes;
                 }
                }
                if(minutes == 6 && seconds == 30 ){
                    $(".Flag").show();
                    ring();
                    clearInterval(timer);
                }
            time.textContent = minutes + ":" + seconds + ":" + milliseconds;
     },10);
}
    
$(document).keypress(function(e){
    $(".Flag").hide();
    if (e.which==32 && milliseconds == 0 ||(minutes == 6 && seconds == 30) ){
        $("h1").html(function(i,Number){
            return ++Number; 
        });
        
        displayTimer();
        Ballancer(); 
    }

    if (e.which==32 && milliseconds > 0 && cnt == milliseconds){
         clearInterval(timer)
    }
    if (e.which==32 && milliseconds > 0 && cnt != milliseconds){
        clearInterval(ballance);
        cnt = milliseconds ;
        Ballancer();
       displayTimer(); 
    }
});

function ring(){
    var audio = new Audio("sounds/ring.mp3");
    audio.play(); 
}