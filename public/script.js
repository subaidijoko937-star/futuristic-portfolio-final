const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});

/* SCROLL ANIMATION */

const cards = document.querySelectorAll(
    ".glass-card, .skill-card, .project-card"
);

window.addEventListener("scroll", () => {

    cards.forEach((card) => {

        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 100) {

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});

/* INITIAL STATE */

cards.forEach((card) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all .6s ease";

});