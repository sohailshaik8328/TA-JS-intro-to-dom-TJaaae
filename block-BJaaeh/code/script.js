setInterval(setClock, 1000)
let hourHand = document.querySelector('.hour')
let minuteHand = document.querySelector('.minute')
let secondHand = document.querySelector('.second')


function setClock(){
    let currentDate = new Date();
    let secondRatio = currentDate.getSeconds() / 60;
    let minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    let hourRatio = (minuteRatio + currentDate.getHours()) / 12
    setRotation(secondHand, secondRatio)
    setRotation(minuteHand, minuteRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(elem, rotationRatio){
    elem.style.setProperty(`--rotation`, rotationRatio * 360)
}

setClock()