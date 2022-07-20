const colours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userChosen = [];
var chosenColour;
var level = 0;
function startGame(){
    gamePattern = [];
    userChosen = [];
    level = 0;
    nextSeq();
}
function nextSeq(){
    level++;
    const randomNum = Math.floor(Math.random()*4);
    chosenColour = colours[randomNum];
    gamePattern.push(chosenColour);
    $("#"+chosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/"+chosenColour+".mp3");
    $("#level-title").html("Current Level : " + level);
    audio.play();
    console.log(chosenColour);
}
function SetUp(){
    $(".btn").click(function(){
        Check(this.id);
    })
    $(document).keypress(function(event){
        if(event.key == "a" && gamePattern.length <= 0){
            startGame();
        }
    });
}
SetUp();
function Check(id){
    ButtonPress(id);
    userChosen.push(id);
    var index = userChosen.indexOf(id);
    if(gamePattern[index]){
        if(gamePattern[index] === userChosen[index]){
            Correct(id);
            if(gamePattern[gamePattern.length-1] === userChosen[gamePattern.length-1]){
                userChosen = [];
                nextSeq();
            }
        }else{
            incorrect();
        }
    }else{
        incorrect();
    }
    
}
function Correct(id){
    var audio = new Audio("sounds/"+id+".mp3")
    audio.play();   
}
function incorrect(){
    var audio = new Audio("sounds/wrong.mp3")
    audio.play();
}
function ButtonPress(id){
    $("#"+id).addClass('pressed');
    setTimeout(function(){
        $("#"+id).removeClass('pressed');
}, 100);
}