// ===============================
// Loading Screen
// ===============================

window.addEventListener("load", () => {

    setTimeout(() => {

        const loading = document.getElementById("loading");

        loading.style.opacity = "0";

        loading.style.pointerEvents = "none";

        setTimeout(() => {

            loading.style.display = "none";

        }, 1000);

    }, 1800);

});

// ===============================
// Nickname Animation
// ===============================

const names = [

    "Cudyyyy ❤️",

    "Bbbyyy ❤️",

    "Bubu ❤️",

    "Duggu ❤️",

    "My Home ❤️",

    "My Safe Place ❤️",

    "My Favourite Human ❤️",

    "Sejal ❤️"

];

let currentName = 0;

const nickname = document.getElementById("nickname");

setInterval(() => {

    currentName++;

    if (currentName >= names.length)

        currentName = 0;

    nickname.style.opacity = 0;

    nickname.style.transform = "translateY(20px)";

    setTimeout(() => {

        nickname.innerHTML = names[currentName];

        nickname.style.opacity = 1;

        nickname.style.transform = "translateY(0px)";

    }, 400);

}, 2500);

// ===============================
// Love Reasons
// ===============================

const reasons = [

"You make ordinary days feel extraordinary.",

"Your smile fixes my worst days.",

"You understand me without words.",

"I love your laugh.",

"I love how excited you get.",

"You make distance feel smaller.",

"You are my peace.",

"You make me want to become a better man.",

"You are my favourite notification.",

"I still smile remembering our first Instagram reel conversation.",

"I love every silly fight because we always choose each other.",

"You make my heart feel at home.",

"I love saying good morning to you.",

"I love saying good night to you.",

"I love hearing your voice.",

"I love calling you Cudyyyy.",

"I love your beautiful eyes.",

"I love how lucky I feel because of you.",

"My world became brighter after meeting you.",

"I love you for simply being you."

];

const reasonBtn = document.getElementById("reasonBtn");

const reasonBox = document.getElementById("reasonBox");

let reasonIndex = 0;

reasonBtn.onclick = () => {

    reasonIndex++;

    if(reasonIndex>=reasons.length)

        reasonIndex=0;

    reasonBox.style.opacity=0;

    reasonBox.style.transform="translateY(20px)";

    setTimeout(()=>{

        reasonBox.innerHTML=reasons[reasonIndex];

        reasonBox.style.opacity=1;

        reasonBox.style.transform="translateY(0px)";

    },300);

};

// ===============================
// Floating Hearts
// ===============================

document.addEventListener("click",(e)=>{

    for(let i=0;i<5;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=(e.clientX+(Math.random()*60-30))+"px";

        heart.style.top=(e.clientY+(Math.random()*60-30))+"px";

        heart.style.fontSize=(18+Math.random()*20)+"px";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },4000);

    }

});

// ===============================
// Shooting Stars
// ===============================

function shootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.top=Math.random()*300+"px";

    star.style.left=(window.innerWidth+100)+"px";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2500);

}

setInterval(shootingStar,5000);

// ===============================
// Enter Button Scroll
// ===============================

document.getElementById("enterBtn").onclick=()=>{

    document.getElementById("story").scrollIntoView({

        behavior:"smooth"

    });

};
// ===============================
// PHOTO LIGHTBOX
// ===============================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");

document.querySelectorAll(".photo img").forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";

        lightboxImage.src = img.src;

        document.body.style.overflow = "hidden";

    });

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

    document.body.style.overflow = "auto";

});

// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {

    threshold: 0.15

});

document.querySelectorAll("section").forEach(sec => {

    sec.style.opacity = "0";

    sec.style.transform = "translateY(70px)";

    sec.style.transition = "1s";

    observer.observe(sec);

});

document.querySelector(".hero").style.opacity = "1";
document.querySelector(".hero").style.transform = "translateY(0px)";

// ===============================
// HAPPY GIRLFRIEND DAY POPUP
// ===============================

setTimeout(() => {

    const popup = document.createElement("div");

    popup.innerHTML = `

<div style="
position:fixed;
inset:0;
background:rgba(0,0,0,.85);
display:flex;
justify-content:center;
align-items:center;
z-index:999999;
">

<div style="
background:#111827;
padding:45px;
border-radius:25px;
max-width:650px;
width:90%;
text-align:center;
color:white;
border:1px solid rgba(255,255,255,.2);
box-shadow:0 20px 70px rgba(0,0,0,.5);
">

<h1 style="font-size:48px;margin-bottom:20px;color:#ff8db8;">
Happy Girlfriend's Day ❤️
</h1>

<p style="font-size:20px;line-height:36px;">

Dear Cudyyyy,

Thank you for turning one random Instagram reel into the most beautiful chapter of my life.

Distance may stop me from handing you flowers today,

but it could never stop me from making something with my whole heart.

This little universe is only for you.

❤️

</p>

<button id="closePopup" style="margin-top:30px;">

Continue Our Story

</button>

</div>

</div>

`;

    document.body.appendChild(popup);

    document.getElementById("closePopup").onclick = () => {

        popup.remove();

    };

}, 3500);

// ===============================
// SECRET MESSAGE
// ===============================

let loveCounter = 0;

document.addEventListener("keydown", e => {

    if (e.key.toLowerCase() === "l") {

        loveCounter++;

    }

    if (loveCounter >= 5) {

        loveCounter = 0;

        alert("❤️ Surprise ❤️\n\nNo matter where life takes us, you'll always be my favourite destination.\n\nLove you, Cudyyyy.");

    }

});
particlesJS("particles-js", {

"particles":{

"number":{

"value":120,

"density":{

"enable":true,

"value_area":1000

}

},

"color":{

"value":"#ffffff"

},

"shape":{

"type":"circle"

},

"opacity":{

"value":0.7,

"random":true

},

"size":{

"value":3,

"random":true

},

"line_linked":{

"enable":false

},

"move":{

"enable":true,

"speed":0.8,

"direction":"none",

"random":true,

"straight":false,

"out_mode":"out"

}

},

"interactivity":{

"events":{

"onhover":{

"enable":true,

"mode":"repulse"

},

"onclick":{

"enable":true,

"mode":"push"

}

},

"modes":{

"repulse":{

"distance":120

},

"push":{

"particles_nb":5

}

}

},

"retina_detect":true

});
const song = document.getElementById("ourSong");

const playButton = document.getElementById("playMusic");

playButton.onclick = () => {

if(song.paused){

song.play();

playButton.innerHTML="⏸ Pause";

}

else{

song.pause();

playButton.innerHTML="▶ Play Our Song";

}

};