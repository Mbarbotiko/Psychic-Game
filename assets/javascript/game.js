var wins = 0;
var losses = 0;
var guessLeft = 9;
var guessSoFar = [];
var computerChoice = 'abcdefghijklmnopqrstuvwxyz'.split('');
var userGuess=[];
document.getElementById('you-win').style.display = 'none';
document.getElementById('you-lose').style.display = 'none';

//Setting variables for game, wins losses guesses left and guesses so far is empty but it will be filled with users guess.

document.onkeyup = function(event){
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
var computerGuess = computerChoice[Math.floor(Math.random()
    * computerChoice.length)];
    //adding users input into array using charcode, lowercase makes sure only the lowercase letter is logged (regardless if they choose upper will be same)  varComputer guess loops through a random number which chooses a letter in that array. This should be re-written, its calling for the computers choice to change each time a key is pushed instead of at the beginning of the game and holding it through all 9 turns.

    guessSoFar.push(userGuess);





    if(userGuess==computerGuess){
        wins++;
        guessLeft=9;
        guessSoFar=[];
        clearGuesses();
        
        
    }

    else if(guessLeft==0){
        losses++;
        guessLeft=9;
        guessSofar=[];
        clearGuesses();
    }
  
    else if(userGuess!==computerGuess){
        guessLeft--;
        
       
    }
//if the users guess matches the computers a reset is run and 1 is added to wins, if the user doesnt match guesses left goes down 1 and if the user gets to 0 guesses the reset is run as well.



var node = document.createElement("text");                
var textnode = document.createTextNode(" "+userGuess+" , ");  
node.appendChild(textnode);                              
document.getElementById("guess-far").appendChild(node);     
function clearGuesses(){
    document.getElementById("guess-far").innerHTML="GUESSES SO FAR:";
    
} 




//creating text to add to guess far html <p>, the users input will be added, itll then be appended to the html document in the <p> "guess-far"



function countGuessLeft() {
	document.querySelector("#guess-left").innerHTML = "GUESSES LEFT: " + guessLeft;
}
//guess left number changes in the HTML using this function

countGuessLeft();

function countWins(){
    document.querySelector("#wins").innerHTML= "WINS: "+ wins;
}
//wins number changes in the HTML using this function

countWins();

function countLosses(){
    document.querySelector("#losses").innerHTML="LOSSES: "+losses;
}

countLosses();

//loss number changes in the HTML using this function



function winner(){
    document.getElementById('you-win').style.display= inline;
}

function loser(){
    document.getElementById('you-lose').style.display = inline;
}


//couldnt get winner/ loser DIVS to show ran out of time, will re-visit later.
//couldnt get repeat letters to stop writing to document, will also re-visit later :(
//computer guess isnt staying logged for the full 9 turns, its changing each time a key is pressed

}



