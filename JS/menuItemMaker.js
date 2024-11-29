let options = document.getElementById("options");
let audio = document.getElementById("menuMove");
audio.volume = 0.2;
let optionsArray = ["fight", "act", "item", "spare", "defend"];
let imgArray = ["sword", "act", "item", "mercy", "defend"];
let select = 0;
let scrollSelect = 0;
let menuItemArray = [];
let consoleOpen = false;

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
        if(scrollSelect < items.items.length - 1){
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
            fight();
        }
        if(consoleOpen == true){
            useItem(scrollSelect);
        }
        if(chosenItem == "item" && consoleOpen == false){
            loadBag();
            consoleOpen = true;
            document.getElementById(scrollSelect).classList.add('item-selected');
        }

    }
    if(e.key === 'x' && vecht == false){
        audio.play();
        if(consoleOpen == true && vecht == false){
            consoleClose();
        }
    }
    menuItemArray[select].classList.add(imgArray[select] + "_yellow");
})

function consoleClose(){
    for(let i = 0; i < items.items.length; i++){
        console.log('removing item')
        document.getElementById('item' + i).remove();
    }
    consoleOpen = false;
}