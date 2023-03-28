//Go to the instructions.md file first thing!

function rockPaperScissors(user){
    choices = ['rock', 'paper', 'scissors'];
    computer = (Math.floor(Math.random() * 3));
    //console.log(computer);
  
    // This section checks for the the same tie games
    if (user === choices[computer]){
      console.log(choices[computer]);
      return ("it's a tie!");
    }
     // If the user wins return the string 'You win! I chose (computers choice goes here)'.
    else if (user === "rock" && choices[computer] === "scissors" || 
            user === "paper" && choices[computer] === "rock"||
            user === "scissors" && choices[computer] === "paper"){
      return (`You win! I chose ${choices[computer]}`);
    }
     // If the computer wins return the string 'You lose! I chose (computers choice goes here)'.
    else if (user === "paper" && choices[computer] === "scissors" || 
            user === "scissors" && choices[computer] === "rock"||
            user === "rock" && choices[computer] === "paper"){
      return (`You lose! I chose ${choices[computer]}`);
    }
  
    // If the user enters anything other than rock paper or scissors return the string 'I do not understand. Try entering rock, paper, or scissors'.  
    else if (user !== "rock" || user !== "paper" || user !== "scissors") {
      return ("I do not understand. Try entering rock, paper, or scissors")
    }
  }
  
  console.log(rockPaperScissors('pencil'));
  //console.log(rockPaperScissors('paper'));
  