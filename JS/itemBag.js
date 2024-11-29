let consoleDiv = document.getElementById('consoleDiv');
let items;
fetch("./JS/items.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        items = data;
    })

function loadBag(){
    for(let i = 0; i < items.items.length; i++){
        let item = document.createElement('div');
        item.classList.add('item')
        item.id = "item" + i;

        consoleDiv.appendChild(item);

        let itemSelectDiv = document.createElement('div');
        itemSelectDiv.classList.add('item-select');
        itemSelectDiv.id = i;

        item.appendChild(itemSelectDiv);

        let itemName = document.createElement('div');
        itemName.classList.add("item-name");
        itemName.innerHTML = items.items[i].name;

        item.appendChild(itemName);
    }
    //de rest van de divs moeten in item komen op volgorde
}