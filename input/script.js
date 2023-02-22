inputGet = document.getElementById("input");
inputACTIVE = document.querySelector("input");
pTag = document.querySelector(".all span")
buttonSubmit = document.getElementById("submit");
timeTag = document.querySelector(".span1 span");
resetButton = document.getElementById("clear");

let timer,
maxTime = 10,
timeLeft = maxTime;
isTyping = 0
buttonSubmit.addEventListener('click',()=>{
    spanInput();
})

function spanInput(){
    let inputValue = inputGet.value;

    let spanTag = `<li><span>${inputValue}</span></li>`;
    pTag.innerHTML += spanTag;
    inputGet.value = '';
    inputGet.focus();
}

function timeCounting(){
    if(!isTyping){
        timer =setInterval(startTimer,1000)
        isTyping = true; 
    }
}
function startTimer(){
    if(timeLeft>0){
        timeLeft--;    
        timeTag.innerText = timeLeft;    
    }else{
        clearInterval(timer)
    }
}

function resetTimer(){
    if(!inputGet.value){
        timeLeft = maxTime;
        timeTag.innerText = timeLeft;
        inputGet.focus();
        isTyping = 0;
        clearInterval(timer)
    }
}

function resetClear(){
    
        timeLeft = maxTime;
        timeTag.innerText = timeLeft;
        inputGet.focus();
        inputGet.value = '';
        isTyping = 0;
        clearInterval(timer)
    }

inputACTIVE.addEventListener("input",timeCounting)
buttonSubmit.addEventListener('click',resetTimer)
resetButton.addEventListener('click',resetClear)






























// btnCheck.addEventListener("click",()=>{
//     let value = inputt.value.trim();
//     // if(inputt.value === ''){
//     //     alert("your input is empty pls field that");
//     // }else{
//     //     result.innerText = value.length ==0 ? "EMPTY" : inputt.value;
//     // }

//     result.innerText = `<span>${value}</span>`;
//     inputt.value ='';
//     inputt.focus();
//     });
// let bgInput = document.getElementById("focus");
// bgInput.addEventListener("focus",()=>{
//     change(inputt);
// });
// function change(inputt){
//     inputt.style.background = 'lightgreen';    
// }  