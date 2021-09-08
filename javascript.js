var playing = false;
var score;
var time;
var action;
var correctAnswer;
var wrongAnswer;

document.getElementById("startReset").onclick = function(){
    if(playing == true){
        location.reload();
        document.getElementById("startReset").innerHTML = "Reset Game"
    }else{
        score = 0;
        document.getElementById("scorevalue").innerHTML = score
        document.getElementById("startReset").innerHTML = "Reset Game"
        document.getElementById("timeremaining").style.display ="block"
        time = 60;
        document.getElementById("timeRemainingValue").innerHTML = time
        countDown();
        generateQA();
    
        playing = true; 
    }
};
for(i =1; i<5; i++){
document.getElementById("box"+i).onclick = function(){
    if(playing == true){
    if(this.innerHTML == correctAnswer){
        score++;
        document.getElementById("scorevalue").innerHTML = score
        hide("wrong");
        show("correct");
        setTimeout(function(){
            hide("correct");
        }, 1000);
        generateQA();
    }else{
        hide("correct");
        show("wrong");
        setTimeout(function(){
            hide("wrong");
        }, 1000);
        }
    }
    }
}




function countDown(){
    action = setInterval(function(){
        time -= 1;
        document.getElementById("timeRemainingValue").innerHTML = time
    if(time == 0){
        document.getElementById("gameOver").innerHTML = "<p>Game Over!</p><p>Your score is "+ score +".</p>"
    show("gameOver");
    hide("timeremaining");
    clearInterval(action);
    playing == false;
    }    
    }, 1000)
}

function show(Id){
    document.getElementById(Id).style.display = "block"
}
function hide(Id){
    document.getElementById(Id).style.display = "none"
}

function generateQA(){
    var x = 1 + Math.round(9 * Math.random());
    var y = 1 + Math.round(9 * Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" +y;
    var correctPosition = 1 + Math.round(3 * Math.random())
    document.getElementById("box"+ correctPosition).innerHTML = correctAnswer
    
    for(i = 1; i < 5; i++){
        if(i != correctPosition){
        
        do{
        wrongAnswer = ( 1 + Math.round(9 * Math.random()))*( 1 + Math.round(9 * Math.random()))
        document.getElementById("box"+i).innerHTML = wrongAnswer
        }while( wrongAnswer == correctAnswer)
        }
    }


}
