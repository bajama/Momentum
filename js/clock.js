const clockContainer = document.querySelector(".clockContainer"),
  clock = clockContainer.querySelector(".js-clock")

function readClock(){
 const date = new Date()
 const hours = date.getHours()
 const minutes = date.getMinutes()
 const seconds = date.getSeconds()
 const time = `${hours<10 ? `0${hours}` : hours}:${minutes<10 ? `0${minutes}` : minutes}:${seconds<10 ? `0${seconds}` : seconds}`
 clock.innerHTML = time
 return
}

function init(){
readClock()
setInterval(readClock,1000)
return
}
init()