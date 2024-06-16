// User and Computer Score initialization.
let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
const uScore = document.querySelector('#userScore');
const cScore = document.querySelector('#comScore');

// Computer Choice
const randomChoice = ()=>{
    let choices = ['Rock','Paper','Scissors'];
    let idx = Math.floor(Math.random() * 3);
    return choices[idx];
}


// PlayGame() Function
const playGame = (userChoice) =>{
    //Calling the random function to generate computer choice otherwise we have to put the choice here
   const comChoice = randomChoice();
   console.log(`User choice : ${userChoice}`);
   console.log(`Computer choice : ${comChoice}`)
   //Checking the conditon who will win here
    let userWin = null;
   if (userChoice === comChoice) {
        //Checking  Draw Match
        console.log(`Math Draw: Both choose ${userChoice}`);
        userWin = null;
   } else {
        // If not Draw
        if(userChoice === 'Rock'){
            //Scissors,Paper
            userWin = comChoice === 'Paper' ? false : true;
        }else if(userChoice === 'Paper'){
            //Rock,Scissors
            userWin = comChoice ==='Scissors' ? false : true;
        }else{
            //Rock,Paper
            userWin = comChoice === 'Rock' ? false : true;
        }
   }
   showWinner(comChoice,userChoice,userWin);
}


// ShowWinner() Function
const showWinner = (comChoice,userChoice,userWin) =>{
    //Now Accessing the msgWinner and Score Updation onFrontend
    if(userWin === null){
        console.log('Math Draw');
        msg.textContent = `Match Draw !! you both choose ${userChoice}..Try again`
        msg.style.backgroundColor = 'blue'
    }else{
        if(userWin === true){
            userScore++;
            uScore.innerText = userScore;
            msg.style.backgroundColor = 'green' 
            msg.textContent = `YOU WINS !! Your ${userChoice} beats ${comChoice}`
            msg.classList.add('userWin')
        }else{
            comScore++;
            cScore.innerText = comScore;
            uScore.innerText = userScore;
            msg.textContent = `COM WINS !! ${comChoice} beats your ${userChoice}`
            msg.style.backgroundColor = '#081b31'
        }
    }
}

choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice = choice.getAttribute('id');
        //Here calling PlayGame(userChoice) => Otherwise we can't find the userChoice out of the Loop
        playGame(userChoice);
    })
})