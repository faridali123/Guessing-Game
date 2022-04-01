//initializing some value
let totalAttemps = 5;
let attemps = 0;
let totalWons = 0;
let totallost = 0;

//selecting elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const farid = document.createElement("p");
const remainingAttemps = cardBody.querySelector(".remainingAttemps");

form.addEventListener("submit",function(event){
    event.preventDefault();
    attemps++;
    if(attemps == 5){
        guessingNumber.disabled = true;
        document.getElementById("guessingNumber").style.backgroundColor="#EE3536";
        checkButton.disabled = true;
    }if(attemps < 6){
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttemps.innerHTML=`Remaining Attemps: ${totalAttemps-attemps}`;
    }
    guessingNumber.value="";
});
function checkResult(guessingNumber){
    const randomNumber = getRandomNumber(5);
    if (guessingNumber==randomNumber) {
        resultText.innerHTML=`You have won`;
        totalWons++;
    }else{
        resultText.innerHTML=`
        you have lost, random number was:${randomNumber}`;
        totallost++;
    }
    lostWonMessage.innerHTML=`Won: ${totalWons},Lost: ${totallost}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
    farid.innerHTML=`Developed by Farid`;
    farid.classList.add("farid");
    cardBody.appendChild(farid);
}

function getRandomNumber(limit){
    return Math.floor(Math.random()*limit)+1;
}
