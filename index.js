let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newBtn=document.querySelector("#resetB");
let msgContainer=document.querySelector(".msg");
let message=document.querySelector("#message");
let turnO=true;

//2d array
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
enableBox();
msgContainer.classList.add("hide");
}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box");
        if(turnO){
            box.innerHTML="O";
            turnO=false;
        }else{
            box.innerHTML="X";
            turnO=true;
        }
       box.disabled=true;
       checkWinner();
    });
});
const disableBox=()=>{
   for( let box of boxes){
    box.disabled=true;
   }
}
const enableBox=()=>{
    for( let box of boxes){
     box.disabled=false;
     box.innerText="";
    }
 }
const showWinner=(winner)=>{
    message.innerText=`congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox()
}
const checkWinner=()=>
{
    for( let pattern of winPatterns)
    {
    //console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern//[2]].innerText);

     let pos1Val= boxes[pattern[0]].innerText;
     let pos2Val= boxes[pattern[1]].innerText;
     let pos3Val= boxes[pattern[2]].innerText;
       
     if(pos1Val !=""&& pos2Val !="" && pos3Val !=""){
          if(pos1Val==pos2Val&&pos2Val==pos3Val){
            console.log("winner",pos1Val);
            showWinner(pos1Val);
          }
     }
    }   
};

//const resetGame=
newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);