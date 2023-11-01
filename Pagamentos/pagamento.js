let tColorA = document.getElementById('tColorA'),
tColorB = document.getElementById('tColorB'),
tColorC = document.getElementById('tColorC'),
iconA = document.querySelector('.fa-credit-card'),
iconB = document.querySelector('.fa-landmark'),
iconC = document.querySelector('.fa-wallet'),
cDetails = document.querySelector('.card-details');


function doFun(){
    tColorA.style.color = "greenyellow";
    tColorB.style.color = "#444";
    tColorC.style.color = "#444";
    iconA.style.color = "greenyellow";
    iconB.style.color = "#aaa";
    iconC.style.color = "#aaa";
    cDetails.style.display = "block";
}


