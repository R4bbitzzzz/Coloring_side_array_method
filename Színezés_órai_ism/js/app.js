// alert("asdfa")
//Számokat tartalmazó négyzetek létrehozása.
const makeBoxes = () => {
    let boxList = [];
    for (let i = 1; i < 16; i++) {
        boxList.push(`<div id="box-${i}" class="box">${i}</div>`);
    }
    return boxList;
};

const renderBoxes = () => {
    const boxesContainer = document.querySelector(".boxes");
    boxesContainer.innerHTML = "";
    boxesContainer.innerHTML = makeBoxes().join('');
};

//Oldal betöltésekor inicializálodik a weboldal.
document.addEventListener("DOMContentLoaded", renderBoxes);