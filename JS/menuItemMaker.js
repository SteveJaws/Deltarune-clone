let options = document.getElementById("options");
let audio = document.getElementById("menuMove");
audio.volume = 0.2;
let optionsArray = ["fight", "act", "item", "spare", "defend"];
let imgArray = ["sword", "act", "item", "mercy", "defend"];
let select = 0;
let scrollSelect = 0;
let menuItemArray = [];
let consoleOpen = false;
let bagOpen = false;
let actsOpen = false;
let consoleLength;

window.addEventListener("DOMContentLoaded", () => {
    for(let i = 0; i < 5; i++){
        let block = document.createElement("div");
        block.style.width = "4vw";
        block.style.height = "4vw";
        block.classList.add('normal-block');
        block.classList.add(imgArray[i] + "_orange");
        block.id = optionsArray[i];

        menuItemArray.push(block);

        options.appendChild(block);
    }   
    menuItemArray[select].classList.add('selected-block');
    menuItemArray[select].classList.add(imgArray[select] + "_yellow");
})

document.addEventListener("keydown", (e) => {
    menuItemArray[select].classList.remove(imgArray[select] + "_yellow");
    if (e.key === 'ArrowRight' && vecht == false && consoleOpen == false){
        audio.play();
        select++;
        if(select > 4){
            select = 0;
        }
    }
    if (e.key === 'ArrowLeft' && vecht == false && consoleOpen == false){
        audio.play();
        select--;
        if(select < 0){
            select = 4;
        }
    }
    if(e.key === "ArrowDown" && vecht == false && consoleOpen == true){
        audio.play();
        if(scrollSelect < consoleLength){
            document.getElementById(scrollSelect).classList.remove('item-selected');
            scrollSelect++;
            document.getElementById(scrollSelect).classList.add('item-selected');
            document.getElementById(scrollSelect).scrollIntoView();
        }
    }
    if(e.key === "ArrowUp" && vecht == false && consoleOpen == true){
        audio.play();
        if(scrollSelect > 0){
            document.getElementById(scrollSelect).classList.remove('item-selected');
            scrollSelect--;        
            document.getElementById(scrollSelect).classList.add('item-selected');
            document.getElementById(scrollSelect).scrollIntoView();
        }
    }
    if (e.key === 'z' && vecht == false){
        audio.play();
        let chosenItem = menuItemArray[select].id;
        if(chosenItem == "fight" && consoleOpen == false){
            myAttack();
            consoleOpen = true;
        }
        if(consoleOpen == true && bagOpen == true){
            useItem(scrollSelect);
        }
        if(consoleOpen == true && actsOpen == true){
            useAct(scrollSelect);
        }
        if(chosenItem == "item" && consoleOpen == false){
            loadBag();
            consoleOpen = true;
            bagOpen = true;
            document.getElementById(scrollSelect).classList.add('item-selected');
        }
        if(chosenItem == "act"){
            loadActs();
            consoleOpen = true;
            actsOpen = true;
            document.getElementById(scrollSelect).classList.add('item-selected');
        }
        if(chosenItem == "defend"){
            defending = true;

            kris.classList.add("kris-guard");
            setTimeout(() => {
                kris.classList.remove("kris-guard");
            },1000) 

            fight();
        }
        if(chosenItem == "spare"){
            hintPlayer("it only wants to hurt you");
            
            setTimeout(() => {
                fight();
            },3300)
        }
    }
    if(e.key === 'x' && vecht == false){
        audio.play();
        if(bagOpen == true){
            closeConsole();
        }
        if(actsOpen == true){
            closeConsole();
        }
    }
    menuItemArray[select].classList.add(imgArray[select] + "_yellow");
})

function closeConsole(){
    scrollSelect = 0;
    let div = document.getElementById("consoleDiv");
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    consoleOpen = false;
    bagOpen = false;
    actsOpen = false;
}

function getLength(givenLength){
    consoleLength = givenLength;
}