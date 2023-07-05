function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle(`light`);

    const img = document.querySelector("#profile img");
    const imgGlobo = document.querySelector(".skills-globo img");
    const imgTimer = document.querySelector(".skills-timer img");
    const imgTheBest = document.querySelector(".skills-theBest img");

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/logo-ecosis-branco.png");
        imgGlobo.setAttribute("src", "./assets/globo-branco.png");
        imgTimer.setAttribute("src", "./assets/timer-branco.png");
        imgTheBest.setAttribute("src", "./assets/the-best-branco.png");
    } else {
        img.setAttribute("src", "./assets/logo-ecosis-preto.png");
        imgGlobo.setAttribute("src", "./assets/globo.png");
        imgTimer.setAttribute("src", "./assets/timer.png");
        imgTheBest.setAttribute("src", "./assets/the-best.png");
    }
}
