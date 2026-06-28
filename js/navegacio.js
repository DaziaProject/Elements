const passboto = document.querySelector(".passboto");
const passboto2 = document.querySelector(".passboto2");

function passarEx() {
    window.location.href = "./exercici2.html";
}

function passarEx2() {
    window.location.href = "./exercici3.html";

}


if (passboto) {
passboto.addEventListener("click", passarEx);

}

if (passboto2) {
    passboto2.addEventListener("click", passarEx2)
}