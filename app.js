// Guess the Number GAME
let max = prompt("Enter the Max Number you want to guess till");
let maxi=Math.floor(Math.random()*max)+1;
let guess = prompt("Guess the Number");
while(true){
    if(guess=="Quit"){
        console.log("Quiting the Game, Thanks for Perticipation!")
        break;
   }
    if(guess==maxi){
        console.log("Congraculations!! You Won the Game with correct guess " + maxi)
        break;  
    }else if(guess<maxi){
       guess=prompt("BadLuck! Your Guess is too Small, Try Again!")
    }else{
        guess=prompt("BadLuck! Your Guess is too High, Try Again!")
    }
}
