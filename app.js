// Guess the Number GAME
let max = prompt("Enter the Max Number you want to guess till");
let maxi=Math.floor(Math.random()*max)+1;
let guess = prompt("Guess the Number");
while(true){
    if(guess=="Quit"){
        console.log("Quiting the Game, Thanks for Perticipation!")
        break;
10    }
    if(guess==maxi){
        console.log("Congraculations!! You Won the Game with correct guess " + maxi)
        break;  
    }else{
        guess=prompt("BadLuck! Try Again!")
    }
}
