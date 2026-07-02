import { soils } from "./terra-data.js";

let selectedSoilId = 1;

let currentSoils = soils;

let mirageAlertShown = false;



const soilDetail = document.querySelector(".soil-detail");
const soilMessage = document.querySelector(".soil-message")

const fertileButton = document.querySelector(".soilboto1")
const sandyButton = document.querySelector(".soilboto2")

const improveButton = document.querySelector(".improve-button")


fertileButton.addEventListener("click", () => {
    selectedSoilId = 1;
    renderSoil();
});

sandyButton.addEventListener("click", () => {
    selectedSoilId = 2;
    renderSoil();
});

function getSelectedSoil() {
    return currentSoils.find((soil) => {
        return soil.id === selectedSoilId;
    });
}
function renderSoil() {
    const selectedSoil = getSelectedSoil();
    
    const { name, img, canPlant } = selectedSoil;

    const canPlantText = canPlant
    ? "Apta per a plantar"
    : "No apta per a plantar"

    const hasInvalidSoil = currentSoils.some((soil) => {
        return soil.canPlant === false;
    });
    
    const screenMessage = hasInvalidSoil
    ? "Encara hi ha terres no aptes per plantar"
    : "Totes les terres són aptes per plantar";
    
    soilDetail.innerHTML = `
    <h3>${name}</h3>   
    <img src="${img}" style="width: 500px;">
    <p>${canPlantText}</p>
    `
    fertileButton.disabled = selectedSoilId === 1;
    sandyButton.disabled = selectedSoilId === 2;
    improveButton.disabled = canPlant;

    soilMessage.textContent = screenMessage;

    if (hasInvalidSoil === false && mirageAlertShown === false) {
        mirageAlertShown = true;
    
        setTimeout(() => {
            alert("Llàstima, el oasi era un miratge");
        }, 3000);
    }
}

renderSoil();

improveButton.addEventListener("click", () => {
    const selectedSoil = getSelectedSoil();
  

    const improvedSoil = {
        ...selectedSoil,
        name: "Oasi Millorat",
        img: "./assets/oasis.jpg",
        canPlant: true
    };

    const updatedSoils = currentSoils.map((soil) => {
        if (soil.id === selectedSoil.id) {
            return improvedSoil;
        }

        return soil;
    });

    currentSoils = updatedSoils;
    renderSoil();
});