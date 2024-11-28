let options = document.getElementById("options");
let audio = document.getElementById("menuMove");
audio.volume = 0.2;
let optionsArray = ["fight", "act", "item", "spare", "defend"];
let select = 0;
let menuItemArray = [];

window.addEventListener("DOMContentLoaded", () => {
    for(let i = 0; i < 5; i++){
        let block = document.createElement("div");
        block.style.width = "4vw";
        block.style.height = "4vw";
        block.classList.add('normal-block');
        block.id = optionsArray[i];

        menuItemArray.push(block);

        options.appendChild(block);
    }   
    menuItemArray[select].classList.add('selected-block');
})

document.addEventListener("keydown", (e) => {
    menuItemArray[select].classList.remove('selected-block');
    menuItemArray[select].classList.add('normal-block');
    if (e.key === 'ArrowRight' && vecht == false){
        audio.play();
        select++;
        if(select > 4){
            select = 0;
        }
    }
    if (e.key === 'ArrowLeft' && vecht == false){
        audio.play();
        select--;
        if(select < 0){
            select = 4;
        }
    }
    if (e.key === 'z' && vecht == false){
        audio.play();
        let chosenItem = menuItemArray[select].id;
        if(chosenItem == "fight"){
            fight();
        }
    }
    menuItemArray[select].classList.remove('normal-block');
    menuItemArray[select].classList.add('selected-block');
})