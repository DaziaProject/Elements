const laLlum = document.querySelector(".Titleclass");
const body = document.querySelector(".bodystyle");
const llumBoto = document.querySelector(".llumbutton");
let esModeFosc = false;

laLlum.style.color = "black";
body.style.backgroundColor = "white";

function activarModeFosc() {
    laLlum.style.color = "white";
    body.style.backgroundColor = "black";
    llumBoto.textContent = "MODE CLAR";
    esModeFosc = true;
}

function activarModeClar() {
    laLlum.style.color = "black";
    body.style.backgroundColor = "white";
    llumBoto.textContent = "MODE FOSC";
    esModeFosc = false;
}

function canviarMode() {
    if (esModeFosc === false) {
        activarModeFosc();
    } else {
        activarModeClar();
    }
}

llumBoto.addEventListener("click", canviarMode);
