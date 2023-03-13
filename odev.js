let username = prompt("Adınızı Giriniz");
let myName = document.getElementById('myName');
let myClock = document.getElementById('myClock');
let clock = document.querySelector(".clock");


myName.innerHTML = username

const gunler = ["pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi"];

const d = new Date();
let day =gunler[d.getDay()]


clock.innerHTML = day

function showTime() {
    const today = new Date();
    let saat = today.getHours();
    let dakika = today.getMinutes();
    let saniye = today.getSeconds();
    dakika = checkTime(dakika);
    saniye = checkTime(saniye);
    myClock.innerHTML = saat + "-" +dakika +"-" +   saniye +  "-"+ day ;
    setTimeout(showTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
    showTime()