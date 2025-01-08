
const elemresult=document.querySelector(".result")
let stats=JSON.parse(localStorage.getItem('score')) || {
    win :0,
    loss:0,
    draw:0
}
document.querySelector(".stats").innerHTML=`Wins : ${stats.win}  Loss : ${stats.loss}  Ties : ${stats.draw}`


function game(userchoice) {
    const computerguess=pickComputermove()
    let result;

    if (userchoice == computerguess) {
        result="draw";
        
    } else if(userchoice ==="rock" && computerguess === "paper"){            
        result="loss"
        
    }else if(userchoice ==="rock" && computerguess === "scissors"){
        result="win"
      
    }
    
    else if(userchoice ==="paper" && computerguess === "rock"){
        result="win"
        
    }else if(userchoice ==="paper" && computerguess === "scissors"){
        result="loss"
        
    }

    else if(userchoice ==="scissors" && computerguess === "rock"){
        result="loss"
       
    }else if(userchoice ==="scissors" && computerguess === "paper"){
        result="win"
    }

    if (result=="win") {
        stats.win+=1
    }else if (result == "loss"){
        stats.loss+=1
    }else if (result == "draw"){
        stats.draw+=1
    }
    
    localStorage.setItem('score',JSON.stringify(stats))
    
    elemresult.innerHTML=`${result}`


    document.querySelector(".moves").innerHTML=`You  <img style='width:50px' src='${userchoice}.png'>, <img style='width:50px' src='${computerguess}.png'>Computer `


    document.querySelector(".stats").innerHTML=`Wins : ${stats.win}  Loss : ${stats.loss}  Ties : ${stats.draw}`

    
}



function pickComputermove()
    {
        let computermove=' '
        let randomnumber=Math.random()

        if (randomnumber>=0 && randomnumber <=1/3) {
            computermove="rock";
        } else if(randomnumber>=1/3 && randomnumber <=2/3){
            computermove="paper"
        }
        else{
            computermove="scissors"
        }
        return computermove;
    }