const passboto = document.querySelector(".passboto");
const passboto2 = document.querySelector(".passboto2");
const passboto3 = document.querySelector(".passboto3");

function passarEx() {
    window.location.href = "./exercici2.html";
}

function passarEx2() {
    window.location.href = "./exercici3.html";

}

function passarEx3() {
    window.location.href = "./index.html";
}

if (passboto) {
passboto.addEventListener("click", passarEx);

}

if (passboto2) {
    passboto2.addEventListener("click", passarEx2)
}

if (passboto3) {
    passboto3.addEventListener("click", passarEx3)
}