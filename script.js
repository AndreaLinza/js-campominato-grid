`use strict`
// Creo le variabili
const boxSelect = document.querySelector("[name='boxCounts']")
const btnClick = document.getElementById("btn-play");
const gridContainer = document.querySelector(".grid-container")

// creo il pulsante per giocare
btnClick.addEventListener("click", onClick)

// creo la funzione del pulsante
function onClick() {

    const boxCounts = parseInt(boxSelect.value)

    const gridList = gridBox(boxCounts)

    printContainer(gridContainer, gridList)

    return

}


/**
 * 
 * @param {string} boxContent  
 * @returns 
*/

//Creo la funzione per creare una singola cella 
function singleBox(boxContent, boxRadRow) {
    const box = document.createElement("div")
    box.classList.add("grid-box")
    box.textContent = boxContent

    const boxRad = radCountBox(boxRadRow)
    //const boxForRow = Math.sqrt(boxRad) 
    box.style.flexBasis = `calc(100% / ${boxRad})`

    box.addEventListener("click", boxClick)


    //creo una funzione per rendere interagibili i box creati in precedenza
    function boxClick() {


        box.classList.toggle("bg-info")
        if(box.classList.contains("bg-info")){
            console.log(box.innerHTML)
            
        }else{
            console.log(`deselezione della cella ${box.innerHTML}` )
        }

    }

    return box

}

//Creo la funzione per calcolarmi la radice quadrata della larghezza delle box
function radCountBox(boxRow) {
    const boxForRow = Math.sqrt(boxRow)

    return boxForRow
}


// Creo la grigli dove inserire le box create con la funzione singleBox
function gridBox(numberCell) {

    const grid = []

    for (let i = 1; i < numberCell; i++) {
        const newBox = singleBox(i, numberCell)
        grid.push(newBox)
    }

    return grid
}


/**
 * Aggiunge ad un elemento html la griglia dei quadrati
 * @param {HTMLElement} container 
 * @param {HTMLDivElementElement[]} gridBox 
 */
function printContainer(container, gridBox) {
    for (let i = 0; i < gridBox.length; i++) {
        container.append(gridBox[i])
    }
}
