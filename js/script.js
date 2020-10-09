//variable declaration

let userScore = 0;
let computerScore = 0;
let counter = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const actionMessage_Id = document.getElementById("action-message");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div= document.getElementById("s");
const smallUserWord = "You".fontsize(3).sub();
const smallcomputererWord = "Me".fontsize(3).sub();

/*
the getcomputerchoices function will generate randomly the computer choices (roch, paper,scissors)
*/

function getComputerChoices() {

    const choices = ['Rock', 'Paper', 'Scissors']; 
    const randomNumber = Math.round(Math.random()*3);
    return choices[randomNumber];
}
/*
the game function where we will comapre the user choices to the computer choices and decide if one of them wins
 */
function game(userChoice){
    const computerChoice = getComputerChoices();
    switch (userChoice){
        case 'Rock' : if (computerChoice === 'Rock'){
            console.log('Rock \n');
            draw(userChoice);
            break;
        }
        else if (computerChoice === 'Paper'){
            lose(userChoice, computerChoice);
            break;
        }
        if (computerChoice === 'Scissors'){
            console.log('Scissors \n');
            win(userChoice, computerChoice);
            break;
        }
        case 'Paper' : if (computerChoice === 'Paper'){
            draw(userChoice);
            break;
        }
        else if (computerChoice === 'Scissors'){
            console.log('Scissors \n');
            lose(userChoice, computerChoice);
            break;
        }
        if (computerChoice === 'Rock'){
            console.log('Rock \n');
            win(userChoice, computerChoice);
            break;
        }
        case 'Scissors' : if (computerChoice === 'Scissors'){
            console.log('Scissors \n');
            draw(userChoice);
            break;
        }
        else if (computerChoice === 'Rock'){
            console.log('Rock \n');
            lose(userChoice, computerChoice);
            break;
        }
        if (computerChoice === 'Paper'){
            win(userChoice, computerChoice);
            break;
        }
    }
}
/*********************/
/*
the draw function where we increment the counter that will show mind your mask every five clicks,
increment the user sore,
update the user score on the webpage,
add a class orange-glow to our choices for 0.3s period of time
*/
function draw(userChoice){
    counter++;
    console.log("Draw");
    result_p.innerHTML= "it's a draw, lucky you 😏"; 
    if (counter % 5 ===0 ){
        actionMessage_Id.innerHTML = "make your choice please and mind your mask 😷"; 
    }
    else {
        actionMessage_Id.innerHTML = "make your choice please";
    }
    document.getElementById(userChoice.charAt(0).toLowerCase()).classList.add("orange-glow");

    setTimeout(() => {document.getElementById(userChoice.charAt(0).toLowerCase()).classList.remove("orange-glow")},300);

}
/*
the lose function where we increment the counter that will show mind your mask every five clicks,
increment the user sore,
update the user score on the webpage,
add a class red-glow to our choices for 0.3s period of time
*/
function lose(userChoice, computerChoice){
    counter++;
    console.log("user lose");
    computerScore++;
    compScore_span.innerHTML = computerScore;
    result_p.innerHTML= computerChoice + smallcomputererWord  + " beats " + userChoice + smallUserWord+" You lose 😈";
    if (counter % 5 ===0 ){
        actionMessage_Id.innerHTML = "make your choice please and mind your mask 😷"; 
    }
    else {
        actionMessage_Id.innerHTML = "make your choice please";
    }

    document.getElementById(userChoice.charAt(0).toLowerCase()).classList.add("red-glow");

    setTimeout(() => {document.getElementById(userChoice.charAt(0).toLowerCase()).classList.remove("red-glow")},300);

}
/*
the win function where we increment the counter that will show mind your mask every five clicks,
increment the user sore,
update the user score on the webpage,
add a class green-glow to our choices for 0.3s period of time
*/
function win(userChoice, computerChoice){
    counter++;
    console.log("user wins");
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML= userChoice + smallUserWord + " beats " + computerChoice +smallcomputererWord +" You win 😑 ";
    if (counter % 5 ===0 ){
    actionMessage_Id.innerHTML = "make your choice please and mind your mask 😷"; 
    }
    else {
        actionMessage_Id.innerHTML = "make your choice please";
    }

    document.getElementById(userChoice.charAt(0).toLowerCase()).classList.add("green-glow"); 
    
    setTimeout(() => {document.getElementById(userChoice.charAt(0).toLowerCase()).classList.remove("green-glow")},300);

}
/*********************/
/*
the main function where we will take the choice of the user to run the game function and decide who wins
*/
function main(){
    
rock_div.addEventListener("click",() => game('Rock'))
paper_div.addEventListener("click",() => game('Paper'))
scissors_div.addEventListener("click",() => game('Scissors'))
}



main();


