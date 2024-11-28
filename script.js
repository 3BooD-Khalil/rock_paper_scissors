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