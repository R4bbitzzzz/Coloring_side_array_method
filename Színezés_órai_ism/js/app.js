// alert("asdfa")

//Számokat tartalmazó négyzetek létrehozás
/* const makeBoxes = () => {
    let boxList = [];
    for (let i = 1; i < 16; i++) {
        boxList.push(`<div id="box-${i}" class="box">${i}</div>`);
    }
    return boxList;
}; */

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
        {number: 15}
    ];
    const content = data.map( ({number}) => `<div id="${number}" class="box">${number}</div>` );
    return content
}

const getInputValue = () =>{
    return document.querySelector("#num").value;
}

const checkValue = () =>{
    const value = getInputValue();
    if(!value.trim()){
        return [false,0];
    }
    if(isNaN(value)){
        return [false,0];
    }
    const currentValue = Number(value)
    if(currentValue < 1 ||currentValue > 15 ){
        return [false,0];
    }
    return[true,currentValue]
}

const rndNum = () =>{
    return Math.floor(Math.random()*256)
}

const randomColor = () =>{
    const r = rndNum();
    const g = rndNum();
    const b = rndNum();
    return [r,g,b]
}

function sendErrorMessage(){
    alert("Helytelen értéket adott meg!")
}

const coloringBox = () =>{
    const [isValid, number] = checkValue();
    if(!isValid){
        sendErrorMessage();
        return;
    }
    const boxes = document.querySelectorAll(".box")
   
    const box = Array.from(boxes).find(b => Number(b.id) === number);
    const [r,g,b] = randomColor();
    box.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function clearInput(){
    const inputElement = document.querySelector("#num")
    inputElement.textContent = "";
    inputElement.focus()
}

const coloring = () =>{
    const button = document.querySelector(".card button:nth-child(3)")
    
    button.addEventListener("click",coloringBox);
    const [isValid, number] = checkValue();
    if(!isValid) {
        sendErrorMessage();
        return;
    }
    const boxes = document.querySelectorAll(".box");
    const box = Array.from(boxes).find((b => Number(b.id) === number));
    const [r, g, b] = createRGBColor();
    box.style.backgroundColor = `rgb(${r}, ${g}), ${b})`;
}

const reset = ()=>{
    const torol = document.querySelector(".card button:nth-child(4)")
    torol.addEventListener("click",()=>{
        renderBoxes();
        clearInput();
    })
}

//A négyzetek megjelenítése a HTML-ben
const renderBoxes = () => {
    const boxesContainer = document.querySelector(".boxes");
    boxesContainer.innerHTML = "";
    boxesContainer.innerHTML = makeBoxes().join('');
    //const boxes = document.querySelectorAll(".box")
    //console.log("boxlista1: ",boxes);
};
//Az oldal betöltésekor inicializálódik a weboldal
//document.addEventListener("DOMContentLoaded", renderBoxes);

//ezek a kódsorok hamarabb funak le mint a callback részek ezért itt még nem létezik a renderelt tartalom
//const boxes = document.querySelectorAll(".box")
//console.log("boxlista1: ",boxes);

document.addEventListener("DOMContentLoaded", () =>{
    renderBoxes();
    coloring();
    reset();
   
});
