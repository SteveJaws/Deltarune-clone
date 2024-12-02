let actOptions;
let order = 4;
let crying = false;

fetch("./JS/act.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        actOptions = data;
    })

function loadActs(){
    for(let i = 0; i < actOptions.actOptions.length; i++){
        let item = document.createElement('div');
        item.classList.add('item')
        item.id = "act" + i;

        consoleDiv.appendChild(item);

        let itemSelectDiv = document.createElement('div');
        itemSelectDiv.classList.add('item-select');
        itemSelectDiv.id = i;

        item.appendChild(itemSelectDiv);

        let itemName = document.createElement('div');
        itemName.classList.add("item-name");
        itemName.innerHTML = actOptions.actOptions[i].name;

        item.appendChild(itemName);

        getLength(actOptions.actOptions.length - 1);
    }
}

function useAct(actNumber){
    let special = false;
    if(actOptions.actOptions[actNumber].order == order){
        console.log("correct");
        order++;
        special = true;
    }
    if(order == 5){
        crying = true;
    }
    kris.classList.add("kris-act");
    setTimeout(() => {
        kris.classList.remove("kris-act");

        vecht = true;
        let console = document.getElementById('consoleDiv');
        let textConsole = document.getElementById('textConsole');

        console.style.display = "none";
        textConsole.style.display = "flex";

        textConsole.innerHTML = actOptions.actOptions[actNumber].text;

        setTimeout(() => {
            if(special != true){
                textConsole.innerHTML = actOptions.actOptions[actNumber].response;
            }
            else{
                textConsole.innerHTML = actOptions.actOptions[actNumber].special;
            }
            setTimeout(() => {
                console.style.display = "block";
                textConsole.style.display = "none";
                closeConsole();
                fight();
            },3000)
        },3000)
    },1000)
}

function hintPlayer(text){
    let message = text;

    vecht = true;

    let console = document.getElementById('consoleDiv');
    let textConsole = document.getElementById('textConsole');

    console.style.display = "none";
    textConsole.style.display = "flex";

    textConsole.innerHTML = message;

    setTimeout(() => {
        console.style.display = "block";
        textConsole.style.display = "none"; 
        vecht = false;
    },3000)
}