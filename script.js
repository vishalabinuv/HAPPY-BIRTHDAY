// Password unlock
function checkPassword() {
    const password = document.getElementById("password").value;
    const correctPassword = "20.02.2026";

    if (password === correctPassword) {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("main").style.display = "block";
        startHearts();
    } else {
        document.getElementById("error").innerHTML = "Wrong password ❤️";
    }
}


// Countdown to birthday
const birthday = new Date("July 31, 2026 00:00:00").getTime();

setInterval(function () {

    let now = new Date().getTime();
    let distance = birthday - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000)) / 1000);

    document.getElementById("countdown").innerHTML =
        days + " Days ❤️ " +
        hours + " Hours ❤️ " +
        minutes + " Minutes ❤️ " +
        seconds + " Seconds";

}, 1000);


// Floating hearts
function startHearts(){

    setInterval(function(){

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random()*100 + "vw";
        heart.style.bottom = "-20px";
        heart.style.fontSize = Math.random()*25 + 20 + "px";
        heart.style.animation = "float 5s linear";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },5000);

    },300);
}


// Music button
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if(musicBtn){

musicBtn.onclick = function(){

    if(music.paused){
        music.play();
        musicBtn.innerHTML="⏸ Pause Music";
    }
    else{
        music.pause();
        musicBtn.innerHTML="🎵 Play Music";
    }

}

}


// Surprise fireworks
const gift = document.getElementById("giftBtn");

if(gift){

gift.onclick=function(){

    alert("Happy Birthday Monica Princy ❤️🎆");

}

}
