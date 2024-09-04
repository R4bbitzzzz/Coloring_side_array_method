// alert("asdfa")
//Számokat tartalmazó négyzetek létrehozása.
const makeBoxes = () => {
    let boxList = [];
    for (let i = 1; i < 16; i++) {
        boxList.push(`<div id="box-${i}" class="box">${i}</div>`);
    }
    return boxList;
};
//Négyzetek megjelenítése HTML-ben
const renderBoxes = () => {
    const boxesContainer = document.querySelector(".boxes");
    boxesContainer.innerHTML = "";
    boxesContainer.innerHTML = makeBoxes().join('');

    //const boxes = document.querySelectorAll(".box") 
    //console.log(`boxLists2`,boxes); //log
};

//Oldal betöltésekor inicializálodik a weboldal.
//document.addEventListener("DOMContentLoaded", renderBoxes);
//ezek a sorok hamarabb futnak le mint a callback függvények, ezért itt még nem létezik a renderelt tartalom.
//const boxes = document.querySelectorAll(".box") 
//console.log(`boxLists1 `,boxes); //log

document.addEventListener("DOMContentLoaded", () =>{
    renderBoxes();
    const boxes = document.querySelectorAll(".box") 
    console.log(`boxLists3`,boxes); //log
});