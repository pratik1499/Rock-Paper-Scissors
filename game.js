let comp=0,player=0,round=0;
let rockImg = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/oncoming-fist_1f44a.png"
let paperImg = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/raised-hand_270b.png"
let scissorsImg = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/victory-hand_270c-fe0f.png"

function game(userChoice){
    
    round++;
    console.log("Round: "+round);
    
    userSelection(userChoice);
    console.log("You: "+userChoice);

    let compChoice = compSelection();
    console.log("Computer: "+compChoice);

    getIdAndWrite("op-txt-2","Player");
    getIdAndWrite("op-txt","Computer");

   if(compChoice === 'scissors'){
        if(userChoice === 'rock'){
            getIdAndWrite("winner","🎉YOU WIN!🎉");
            player++;
        }
        else if(userChoice === 'paper'){
            getIdAndWrite("winner","COMPUTER WIN!🤖");
            comp++;
        }
    }

    if(compChoice === 'paper'){
        if(userChoice === 'scissors'){
            getIdAndWrite("winner","🎉YOU WIN!🎉");
            player++;    
        }
        else if(userChoice === 'rock') {
            getIdAndWrite("winner","COMPUTER WIN!🤖");
            comp++;    
        }
    }

    if(compChoice === 'rock'){
        if(userChoice === 'paper'){
            getIdAndWrite("winner","🎉YOU WIN!🎉");
            player++;    
        }
        else if(userChoice === 'scissors') {
            getIdAndWrite("winner","COMPUTER WIN!🤖");
            comp++;        
        }
    }
    if(compChoice === userChoice) getIdAndWrite("winner","TIE❗❗");
        
    getIdAndWrite("compscore",comp);
    getIdAndWrite("playerscore",player);
    getIdAndWrite("round",round);

    if(round == 4) {
        let dec = confirm("Wanna play again?")
        console.log("dec"+dec);
        if(dec) reload();
        else  reload();
    }
}

function getIdAndWrite(id,msg) {
    document.getElementById(id).innerHTML = msg;
}

function getIdAndAddImg(id,msg) {
    document.getElementById(id).src = msg;
}

function reload() {
    round = 0;
    location.reload();
}

function userSelection(userChoice) {
    if (userChoice === "rock") {
        getIdAndAddImg("op2",rockImg);
    }
    else if (userChoice === "paper") {
        getIdAndAddImg("op2",paperImg)
    }
    else if (userChoice === "scissors") {
        getIdAndAddImg("op2",scissorsImg);
    }
}

function compSelection() {
    var compChoice = Math.random();
    if (compChoice < 0.34) {
        compChoice = "rock";
    } else if (compChoice <= 0.67) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }

    if (compChoice === "rock") {
        getIdAndAddImg("op",rockImg);
    }
    else if (compChoice === "paper") {
        getIdAndAddImg("op",paperImg);
    }
    else if (compChoice === "scissors") {
        getIdAndAddImg("op",scissorsImg);
    }
    return compChoice;
}
