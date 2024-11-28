console.log("Meow 🐱")


function getComputerChoice(){
    let x=Math.floor(Math.random()*3);
    if(x===0){
        return "rock";
    }
        
    else if (x===1){
        return "paper";
    }
        
    else if(x===2){
        return "scissors";
    }
        

}

let comp=getComputerChoice();
console.log(comp);
function humanChoice(){
    let x= prompt("Choose: 1 for Rock,2 for Paper or 3 for Scissors");
    
    if (x==1){
        return "Rock";
    }
        else if (x==2)
        return "Paper";
    else if (x==3)
        return "Scissors";
    else
    return "Invalid Number";
}
console.log(humanChoice());