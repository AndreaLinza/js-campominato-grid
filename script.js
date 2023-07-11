// /**
//  * @type {HTMLSelectElement}
//  */
// const squareCountsSelect = document.querySelector("[name='squareCounts']")
// const btnPlay = document.getElementById("btn-play")

// /**
//  * @type {HTMLElement}
//  */
// const gridContainer = document.querySelector(".grid-container")

// btnPlay.addEventListener("click", onClick)

// function onClick() {

//     const squareCounts = parseInt(squareCountsSelect.value)
//     console.log(squareCounts)

//     const gridList = createGrid(squareCounts)
//     console.log(gridList)

//     printGrid(gridContainer, gridList)

// }


// /**
//  * 
//  * @param {string} squareContent Contenuto testuale da inserire all'interno del quadrato
//  * @param {number} squareCounts Numero totale di quadrati da creare
//  * @returns {HTMLDivElementElement}
//  */
// function singleSquare(squareContent, squareCounts) {

//     const square = document.createElement("div")

//     const squarePerRow = Math.sqrt(squareCounts)

//     square.classList.add("grid-square")
//     square.textContent = squareContent
//     square.style.flexBasis = `calc(100% / ${squarePerRow} )`

//     return square
// }

// /**
//  * @param {number} squaresNumber Dato un numero di celle, crea tutta la griglia
//  * @returns {HTMLDIVElement[]}
//  */
// function createGrid(squaresNumber) {

//     const grid = []

//     for (let i = 0; i < squaresNumber; i++) {
//         const newSquare = singleSquare("sqr" + i, squaresNumber)

//         grid.push(newSquare);

//     }

//     return grid
// }

// /**
//  * aggiunge ad un elemento html, la lista dei quadrati
//  * @param {HTMLElement} container
//  * @param {HTMLElement[]} squaresList
//  */
// function printGrid(container, squaresList) {

//     for (let i = 0; i < squaresList.length; i++){
//         container.append(squaresList[i])
//     }

// }


// Creo una griglia di X quadrati per riga

/**
 * @type {HTMLSelectElement}
 */
const squareCountsSelect = document.querySelector("[name='squareCounts']");
const btnStart = document.querySelector("#btn-start");

/**
 * @type {HTMLElement}
 */
const gridContainer = document.querySelector(".grid-container");

// Quando ad una funzione dobbiamo passare come argomento un altra funzione,
// oltre a scrivere direttamente la function anonima,
// possiamo creare una funzione nominata, e passare come argomento SOLO il nome della function nominata
// Nel caso di funzioni nominate, queste NON DEVONO aspettarsi argomenti.
btnStart.addEventListener("click", onBtnClick);

/* btnStart.addEventListener("click", function () {
  // codice da eseguire al click
}) */

function onBtnClick() {
    // codice da eseguire al click

    // Leggo il valore della select
    const squareCounts = parseInt(squareCountsSelect.value);

    console.log("valore scelto", squareCounts);

    // devo generare la griglia. Questa viene generata in modo virtuale,
    // sotto forma di array, MA NON VIENE aggiunta al DOM automaticamente
    const gridList = createGrid(squareCounts);

    console.log(gridList);

    // invoco la funzione che si occuperà di aggiungere al DOM i vari quadrati
    printGrid(gridContainer, gridList);
}

/**
 * Genera un singolo quadrato e lo ritorna
 *
 * @param {string} squareContent Contenuto testuale da inserire all'interno del quadrato creato
 * @param {number} squareCounts Numero totale di quadrati da creare
 * @returns {HTMLDivElement}
 */
function createSingleSquare(squareContent, squareCounts) {
    const square = document.createElement("div");

    const squaresPerRow = Math.sqrt(squareCounts);

    square.classList.add("grid-square");
    square.textContent = squareContent;
    square.style.flexBasis = `calc(100% / ${squaresPerRow})`;

    square.addEventListener("click", function () {
        square.classList.toggle("bg-success");
    });

    // Output
    return square;
}

/**
 * Dato un numero di celle, crea tutta la griglia.
 * @param {number} squaresNumber Numero di quadrati da creare all'interno della griglia
 * @returns {HTMLDivElement[]}
 */
function createGrid(squaresNumber) {
    const grid = [];

    for (let i = 0; i < squaresNumber; i++) {
        // salvo in una variabile l'output della funzione createSingleSquare
        const newSquare = createSingleSquare("sqr" + i, squaresNumber);

        grid.push(newSquare);
    }

    // Output
    return grid;
}

/**
 * Aggiunge ad un elemento html, la lista dei quadrati
 * @param {HTMLElement} container
 * @param {HTMLDivElement[]} squaresList
 */
function printGrid(container, squaresList) {
    // reset del contenuto del container per evitare che ci siano altri div creati precedentemente
    container.innerHTML = "";

    for (let i = 0; i < squaresList.length; i++) {
        container.append(squaresList[i]);
    }
}