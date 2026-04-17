// ===== LANG =====
let lang = "ru";

function updateLang(){
    document.querySelectorAll("[data-ru]").forEach(el=>{
        el.innerText = el.getAttribute(`data-${lang}`);
    });

    document.getElementById("lang-toggle").innerText =
        lang === "ru" ? "EN" : "RU";
}

document.getElementById("lang-toggle").onclick = () => {
    lang = lang === "ru" ? "en" : "ru";
    updateLang();
};

// ===== THEME =====
let dark = false;

document.getElementById("theme-toggle").onclick = () => {
    dark = !dark;
    document.body.classList.toggle("dark", dark);
};

// ===== NAV =====
function goToArticles(){
    window.location.href = "article.html";
}

function goHome(){
    window.location.href = "index.html";
}

// ===== PRO BACKGROUND SLIDER =====
const images = [
    "images/intro1.jpg",
    "images/intro2.jpg",
    "images/intro3.jpg",
    "images/intro4.jpg",
    "images/intro5.jpg",
    "images/intro6.jpg",
    "images/intro7.jpg",
    "images/intro8.jpg",
    "images/intro9.jpg",
    "images/intro10.jpg"
];

const bg = document.querySelector(".bg");

function setRandomBg(){
    const img = images[Math.floor(Math.random() * images.length)];
    bg.style.backgroundImage = `url(${img})`;
}

setRandomBg();
setInterval(setRandomBg, 10000);

// init
updateLang();