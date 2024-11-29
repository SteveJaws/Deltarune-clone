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
    closeConsole();
}