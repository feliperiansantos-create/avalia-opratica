// ======================================
// BOTÃO DE TEMA
// ======================================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "☀";
    } else {
        themeButton.textContent = "☾";
    }

});


// ======================================
// FATALITY INTERATIVO
// ======================================

const fatalityButton = document.getElementById("fatalityButton");
const fatalityMessage = document.getElementById("fatalityMessage");

const messages = [
    "FATALITY!",
    "FINISH HIM!",
    "GET OVER HERE!",
    "FLAWLESS VICTORY!",
    "MORTAL KOMBAT!"
];

fatalityButton.addEventListener("click", () => {

    const randomIndex = Math.floor(Math.random() * messages.length);

    fatalityMessage.textContent = messages[randomIndex];

    fatalityMessage.style.animation = "none";

    void fatalityMessage.offsetWidth;

    fatalityMessage.style.animation = "fatalityEffect .5s ease";

});


// ======================================
// ANIMAÇÃO DO FATALITY
// ======================================

const style = document.createElement("style");

style.textContent = `
    @keyframes fatalityEffect {

        0% {
            opacity: 0;
            transform: scale(2);
            color: white;
        }

        50% {
            opacity: 1;
            transform: scale(1.2);
            color: #ff0000;
        }

        100% {
            opacity: 1;
            transform: scale(1);
        }

    }
`;

document.head.appendChild(style);


// ======================================
// ANIMAÇÃO AO ENTRAR NA TELA
// ======================================

const elements = document.querySelectorAll(
    ".character-card, .timeline-item, .content-section"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "opacity .8s ease, transform .8s ease";

    observer.observe(element);

});


// ======================================
// MENU ATIVO
// ======================================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === `#${current}`) {
            link.style.color = "#d71920";
        }

    });

});
