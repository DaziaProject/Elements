const waters = [
    {
        title: "Aigua de mar",
        tipus: "Aigua salada",
        potable: false,
        img: "./assets/mar.jpg" 
    },
{
         title: "Aigua de riu",
        tipus: "Aigua dolça",
        potable: true,
        img:"./assets/riu.jpg" 
},
{
    title: "Aigua estancada",
   tipus: "Aigua conataminada",
   potable: false,
   img:"./assets/stagn.jpg" 
},
{
    title: "Aigua de pluja",
   tipus: "Aigua destilada",
   potable: true,
   img: "./assets/rain.jpg" 
},
{
    title: "Aigua subterrànea",
   tipus: "Aigua mineral",
   potable: true,  
   img: "./assets/under.jpg" 
},
{
    title: "Gel",
   tipus: "Aigua sòlida",
   potable: false,
   img: "./assets/ice.jpg" 
},
]



const DrinkableWater = waters.filter(function(water) {
    return water.potable === true;
    
});

const NonDrinkableWater = waters.filter(function(water) {
    return water.potable === false;
});

const waterContainer = document.querySelector(".waterlist")

function renderWaters(waterList) {

const waterCards = waterList.map(function(water) {
return `
<div class="water-card" style = "color: rgb(199, 255, 255);">
    <h2>${water.title}</h2>
    <p>${water.tipus}</p>
    <img style= "width:100%;" src="${water.img}"></img>
</div>`
});

waterContainer.innerHTML = waterCards.join("");}

const BotoTot= document.querySelector(".showall")
const BotoPotable = document.querySelector(".showdrinkable")
const BotoNoPotable = document.querySelector(".shownotdrinkable")

BotoTot.addEventListener("click", function() { 
    renderWaters(waters);
    actualitzarBoto("totes")
});

BotoPotable.addEventListener("click", function() { 
    renderWaters(DrinkableWater);
    actualitzarBoto("potables")
});

BotoNoPotable.addEventListener("click", function() { 
    renderWaters(NonDrinkableWater);
    actualitzarBoto("nopotables")
});

renderWaters(waters)
actualitzarBoto("totes")

function actualitzarBoto(vistaActual) {
    BotoTot.disabled = vistaActual === "totes"
    BotoPotable.disabled = vistaActual === "potables"
    BotoNoPotable.disabled = vistaActual === "nopotables"
}
