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

        let itemHealthPoints = document.createElement('div');
        itemHealthPoints.classList.add('item-health-points');
        itemHealthPoints.innerHTML = items.items[i].healthPoints + " HP";

        item.appendChild(itemHealthPoints);

        let itemAmount = document.createElement('div');
        itemAmount.classList.add('item-amount');
        itemAmount.innerHTML = "X" + items.items[i].amount;
        itemAmount.id = "amount" + i;

        item.appendChild(itemAmount);

        getLength(items.items.length - 1);
    }
}

function useItem(itemNumber){
    kris.classList.add("kris-item");
    setTimeout(() => {
        kris.classList.remove("kris-item");
        let amount = parseInt(items.items[itemNumber].amount);
        if(amount > 0){
            amount--;
            items.items[itemNumber].amount = amount;
            document.getElementById("amount" + itemNumber).innerHTML = "X" + amount;
            heal(items.items[itemNumber].healthPoints);
        }
    },1000)
    
}