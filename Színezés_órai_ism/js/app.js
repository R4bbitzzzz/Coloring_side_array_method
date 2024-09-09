// alert("asdfa")
//Számokat tartalmazó négyzetek létrehozása.
// const makeBoxes = () => {
//     let boxList = [];
//     for (let i = 1; i < 16; i++) {
//         boxList.push(`<div id="box-${i}" class="box">${i}</div>`);
//     }
//     return boxList;
// };

const makeBoxes = () =>{
    const data = [
        {number: 1},
        {number: 2},
        {number: 3},
        {number: 4},
        {number: 5},
        {number: 6},
        {number: 7},
        {number: 8},
        {number: 9},
        {number: 10},
        {number: 11},
        {number: 12},
        {number: 13},
        {number: 14},
        {number: 15},   
    ];
    const content = data.map(({number}) => `<div id="box-${number}" class="box">${number}</div>`);
}

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
    //const boxes = document.querySelectorAll(".box") 
    //console.log(`boxLists3`,boxes); //log
});

