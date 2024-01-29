let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice =()=>{
    const options=["rock","paper","scissors"];
   const randidx= Math.floor(Math.random()*3);
   return options[randidx];
};
const drawGame =() =>{
    msg.innerText="Game was draw";
    msg.style.backgroundColor="#081b31";
};
const showWinner =(userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`You Win!  Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";

    }else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`You Lost! ${compchoice} beats  Your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playGame =(userchoice) =>{
const compchoice=gencompchoice();
if(userchoice===compchoice){
  drawGame();
}else{
    let userwin=true;
    if(userchoice==='rock'){
        userwin=compchoice==='paper'?false:true;

    }else if(userchoice==='scissors'){
        userwin=compchoice==='rock'?false:true;
    }else{
        userwin=compchoice==='scissors'?false:true;
    }
    showWinner(userwin,userchoice,compchoice);
}
};
choices.forEach((choice) =>{
    choice.addEventListener('click',() => {
        const userchoice=choice.getAttribute("id");
        playGame(userchoice);
    })
})
