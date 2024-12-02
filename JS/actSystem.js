let actOptions;
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
            textConsole.innerHTML = actOptions.actOptions[actNumber].response;
            setTimeout(() => {
                console.style.display = "block";
                textConsole.style.display = "none";
                closeConsole();
                fight();
            },3000)
        },3000)
    },1600)
}

function hintPlayer(){
    vecht = true;
    let message = "it is looking really mad right now";
    //voor nu is message geharcoded maar als ik meerdere hints ga toevoegen kan ik message gewoon doormiddel van if statement gevarieerd maken

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