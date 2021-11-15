let username = prompt("Adınız Nedir?")

let myName=document.querySelector("#myName")

myName.innerHTML=`${username}`

const weekday = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];

function tarihSaat() {
    let day= `${weekday[new Date().getDay()]}`
    let myClock=document.querySelector("#myClock")
myClock.innerHTML= `${new Date().toLocaleTimeString()}  ${day}`
}

setInterval(tarihSaat, 1000);