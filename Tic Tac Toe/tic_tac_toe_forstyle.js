let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let b4 = document.getElementById("b4");
let b5 = document.getElementById("b5");
let b6 = document.getElementById("b6");
let b7 = document.getElementById("b7");
let b8 = document.getElementById("b8");
let b9 = document.getElementById("b9");
let result = document.getElementById("result");
let reset  = document.getElementById("reset");

let sound1 = new Audio("Ting-sound-effect.mp3");
let sound2 = new Audio("mixkit-winning-swoosh-2017.wav");

let num = 1;
let win = 0;
let val="0";

function audioPlay(){
    sound1.play();
}

function decide_val(){
    if(num%2 == 0 ){
        val = "X";
    }
    else{
        val="0";
    }
    num=num+1;
}
 
function btn1(){
    decide_val();
    b1.innerHTML = val;
    audioPlay();
    b1.disabled = true;
    b1.style.color = 'black';
    b1.style.borderRight = '2px solid black';
    b1.style.borderBottom = '2px solid black';
    win = win +1;
    check_win();
    setTimeout(after_win,2000);
}

 function btn2(){
    decide_val();
    b2.innerHTML = val;
    audioPlay();
    b2.disabled=true;
    b2.style.color = 'black';
    b2.style.borderRight = '2px solid black';
    b2.style.borderLeft = '2px solid black';
    b2.style.borderBottom = '2px solid black';
    win = win +1;
    check_win();
    setTimeout(after_win,2000);
}

 function btn3(){
    decide_val();
    b3.innerHTML = val;
    audioPlay();
    b3.disabled=true;
    b3.style.color = 'black';
    b3.style.borderLeft = '2px solid black';
    b3.style.borderBottom = '2px solid black';
    win = win +1;
    check_win();
    setTimeout(after_win,2000);
}

 function btn4(){
    decide_val();
    b4.innerHTML = val;
    audioPlay();
    b4.disabled=true;
    b4.style.color = 'black';
    b4.style.borderRight = '2px solid black';
    b4.style.borderTop = '2px solid black';
    b4.style.borderBottom = '2px solid black';
    win = win +1;
    check_win();
    setTimeout(after_win,2000);
}

 function btn5(){
    decide_val();
    b5.innerHTML = val;
    audioPlay();
    b5.disabled=true;
    b5.style.color = 'black';
    b5.style.borderRight = '2px solid black';
    b5.style.borderTop = '2px solid black';
    b5.style.borderBottom = '2px solid black';
    b5.style.borderLeft = '2px solid black';
    win = win +1;
    check_win();
    setTimeout(after_win,2000);
}

 function btn6(){
    decide_val();
    b6.innerHTML = val;
    audioPlay();
    b6.disabled=true;
    b6.style.color = 'black';
    b6.style.borderTop = '2px solid black';
    b6.style.borderBottom = '2px solid black';
    b6.style.borderLeft = '2px solid black';
    win = win +1;
    check_win();
    setTimeout(after_win,2000);
}

 function btn7(){
    decide_val();
    b7.innerHTML = val;
    audioPlay();
    b7.disabled=true;
    b7.style.color = 'black';
    b7.style.borderRight = '2px solid black';
    b7.style.borderTop = '2px solid black';
    win = win +1;
    check_win();
    setTimeout(after_win,2000);
}

 function btn8(){
    decide_val();
    b8.innerHTML = val;
    audioPlay();
    b8.disabled=true;
    b8.style.color = 'black';
    b8.style.borderRight = '2px solid black';
    b8.style.borderTop = '2px solid black';
    //b5.style.borderBottom = '2px solid black';
    b8.style.borderLeft = '2px solid black';
    win = win +1;
    check_win();
    setTimeout(after_win,2000);
}

 function btn9(){
    decide_val();
    b9.innerHTML = val;
    audioPlay();
    b9.disabled=true;
    b9.style.color = 'black';
    //b5.style.borderRight = '2px solid black';
    b9.style.borderTop = '2px solid black';
    //b5.style.borderBottom = '2px solid black';
    b9.style.borderLeft = '2px solid black';
    win = win +1;
    check_win();
    setTimeout(after_win,2000);
}


 function check_win(){
    if(win >=5){
        if((b1.innerHTML === "X" && b2.innerHTML === "X" && b3.innerHTML === "X"))
        {
            result.innerHTML = "X WON";
            sound2.play();
        }
        else if( (b1.innerHTML === "0" && b2.innerHTML === "0" && b3.innerHTML === "0")){
            result.innerHTML = "0 WON";
            sound2.play();
        }

        if((b4.innerHTML === "X" && b5.innerHTML === "X" && b6.innerHTML === "X"))
        {
            result.innerHTML = "X WON";
            sound2.play();
        }
        else if( (b4.innerHTML === "0" && b5.innerHTML === "0" && b6.innerHTML === "0")){
            result.innerHTML = "0 WON";
            sound2.play();
        }

        else if((b7.innerHTML === "X" && b8.innerHTML === "X" && b9.innerHTML === "X"))
        {
            result.innerHTML = "X WON";
            sound2.play();
        }
        else if( (b7.innerHTML === "0" && b8.innerHTML === "0" && b9.innerHTML === "0")){
            result.innerHTML = "0 WON";
            sound2.play();
        }

        else if((b1.innerHTML === "X" && b4.innerHTML === "X" && b7.innerHTML === "X"))
        {
            result.innerHTML = "X WON";
            sound2.play();
        }
        else if( (b1.innerHTML === "0" && b4.innerHTML === "0" && b7.innerHTML === "0")){
            result.innerHTML = "0 WON";
            sound2.play();
        }

        else if((b3.innerHTML === "X" && b6.innerHTML === "X" && b9.innerHTML === "X"))
        {
            result.innerHTML = "X WON";
            sound2.play();
        }
        else if( (b3.innerHTML === "0" && b6.innerHTML === "0" && b9.innerHTML === "0")){
            result.innerHTML = "0 WON";
            sound2.play();
        }

        if((b2.innerHTML === "X" && b5.innerHTML === "X" && b8.innerHTML === "X"))
        {
            result.innerHTML = "X WON";
            sound2.play();
        }
        else if( (b2.innerHTML === "0" && b5.innerHTML === "0" && b8.innerHTML === "0")){
            result.innerHTML = "0 WON";
            sound2.play();
        }

        else if((b1.innerHTML === "X" && b5.innerHTML === "X" && b9.innerHTML === "X"))
        {
            result.innerHTML = "X WON";
            sound2.play();
        }
        else if( (b1.innerHTML === "0" && b5.innerHTML === "0" && b9.innerHTML === "0")){
            result.innerHTML = "0 WON";
            sound2.play();
        }

        else if((b3.innerHTML === "X" && b5.innerHTML === "X" && b7.innerHTML === "X"))
        {
            result.innerHTML = "X WON";
            sound2.play();
        }
        else if( (b3.innerHTML === "0" && b5.innerHTML === "0" && b7.innerHTML === "0")){
            result.innerHTML = "0 WON";
            sound2.play();
        }

        else if(win === 9){
            result.innerHTML = "IT'S A DRAW"
        }

        // sound2.play();

        
    }

    // else if(win === 9){
    //     result.innerHTML = "IT'S A DRAW";
    // }
 }

 function reset1(){
    b1.disabled=false;
    b1.innerHTML="";
    b2.disabled=false;
    b2.innerHTML="";
    b3.disabled=false;
    b3.innerHTML="";
    b4.disabled=false;
    b4.innerHTML="";
    b5.disabled=false;
    b5.innerHTML="";
    b6.disabled=false;
    b6.innerHTML="";
    b7.disabled=false;
    b7.innerHTML="";
    b8.disabled=false;
    b8.innerHTML="";
    b9.disabled=false;
    b9.innerHTML="";

    result.innerHTML="";
    win=0;
    num=1;
    //val="0";
 }

 function after_win(){
    if(result.innerHTML === "X WON" || result.innerHTML === "0 WON" || win === 9){
        b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;
        b4.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b9.disabled=true;
        alert("Game over! Reset to play again");
    }
 }