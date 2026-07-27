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

const countdownElement = document.getElementById("countdown");

if (countdownElement) {

    const countdown = setInterval(function () {

        const now = new Date().getTime();
        const distance = birthday - now;

        if (distance <= 0) {

            clearInterval(countdown);

            countdownElement.innerHTML = "Happy Birthday Monica ❤️🎂";

            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance % (1000 * 60 * 60)) / (1000 * 60)
        );

        // Fixed seconds calculation
        const seconds = Math.floor(
            (distance % (1000 * 60)) / 1000
        );

        countdownElement.innerHTML =
            days + " Days ❤️ " +
            hours + " Hours ❤️ " +
            minutes + " Minutes ❤️ " +
            seconds + " Seconds";

    }, 1000);

}


// Floating hearts

function startHearts() {

    setInterval(function () {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";
        heart.className = "heart";

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 25 + 20 + "px";

        document.body.appendChild(heart);

        setTimeout(function () {

            heart.remove();

        }, 5000);

    }, 300);

}


// Music button

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {

    musicBtn.onclick = function () {

        if (music.paused) {

            music.play();
            musicBtn.innerHTML = "⏸ Pause Music";

        } else {

            music.pause();
            musicBtn.innerHTML = "🎵 Play Music";

        }

    };

}


// Gift surprise

const gift = document.getElementById("giftBtn");

if (gift) {

    gift.onclick = function () {

        createFireworks();

        alert("Happy Birthday Monica Princy ❤️🎆");

    };

}


// Fireworks effect

function createFireworks() {

    for (let i = 0; i < 40; i++) {

        let fire = document.createElement("div");

        fire.innerHTML = "✨";

        fire.style.position = "fixed";
        fire.style.left = Math.random() * 100 + "vw";
        fire.style.top = Math.random() * 80 + "vh";
        fire.style.fontSize = "30px";
        fire.style.animation = "explode 1s";

        document.body.appendChild(fire);

        setTimeout(() => {

            fire.remove();

        }, 1000);

    }

}
