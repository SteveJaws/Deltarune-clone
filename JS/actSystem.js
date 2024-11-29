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
    }
}

function useAct(actNumber){
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
}