// ================= LANGUAGE =================
let lang = "ru";

function updateLang() {
    document.querySelectorAll("[data-ru]").forEach(el => {
        el.innerText = el.getAttribute(`data-${lang}`);
    });

    document.getElementById("lang-toggle").innerText =
        lang === "ru" ? "EN" : "RU";
}

document.getElementById("lang-toggle").onclick = () => {
    lang = lang === "ru" ? "en" : "ru";
    updateLang();
};

// ================= THEME =================
document.getElementById("theme-toggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// ================= HERO BACKGROUND =================
const images = [
    "images/intro1.jpg","images/intro2.jpg","images/intro3.jpg",
    "images/intro4.jpg","images/intro5.jpg",
    "images/intro6.jpg","images/intro7.jpg",
    "images/intro8.jpg","images/intro9.jpg","images/intro10.jpg"
];

function setBg() {
    const img = images[Math.floor(Math.random() * images.length)];
    document.querySelector(".hero-bg").style.backgroundImage = `url(${img})`;
}

setInterval(setBg, 10000);
setBg();

// ================= ARTICLES =================
const articles = [
    {
        id: 1,
        title_ru: "Здоровый образ жизни",
        title_en: "Healthy lifestyle",
        author: "Polina",
        img: "images/article1.jpg",
        text_ru: "Текст статьи...",
        text_en: "Article text..."
    },
    {
        id: 2,
        title_ru: "Благотворительность",
        title_en: "Charity",
        author: "Karina",
        img: "images/article2.jpg",
        text_ru: "Текст...",
        text_en: "Text..."
    }
];

// ================= VIEW =================
function showLatest() {
    document.getElementById("panel").classList.remove("hidden");
    document.getElementById("panel-title").innerText =
        lang === "ru" ? "Последние статьи" : "Latest articles";

    renderArticles(articles);
}

function showWeekly() {
    document.getElementById("panel").classList.remove("hidden");
    document.getElementById("panel-title").innerText =
        lang === "ru" ? "По неделям" : "By weeks";

    renderArticles(articles);
}

function renderArticles(list) {
    const box = document.getElementById("articles");
    box.innerHTML = "";

    list.forEach(a => {
        const div = document.createElement("div");
        div.className = "article-card";

        div.innerHTML = `
            <h3>${lang === "ru" ? a.title_ru : a.title_en}</h3>
            <p>${a.author}</p>
        `;

        div.onclick = () => {
            localStorage.setItem("article", JSON.stringify(a));
            window.location.href = "article.html";
        };

        box.appendChild(div);
    });
}

// ================= ARTICLE PAGE =================
if (window.location.pathname.includes("article.html")) {
    const a = JSON.parse(localStorage.getItem("article"));

    document.getElementById("title").innerText =
        lang === "ru" ? a.title_ru : a.title_en;

    document.getElementById("author").innerText = a.author;
    document.getElementById("img").src = a.img;

    document.getElementById("text").innerText =
        lang === "ru" ? a.text_ru : a.text_en;
}

// ================= INIT =================
updateLang();
setBg();
