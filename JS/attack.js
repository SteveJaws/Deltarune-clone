function attackChooser(){
    // let attackNumber = Math.floor(Math.random() * 3);
    // if(attackNumber == 0){
    //     attack0();
    // }
    // else if(attackNumber == 1){
    //     console.log("chose attack 1");
    // }
    // else if(attackNumber == 2){
    //     console.log("chose attack 2");
    // }
    attack0();
}

function attack0(){
    let enemies = [];
    for(let i = 0; i < 10; i++){
        let enemy = new Enemy(Math.floor(Math.random() * (scherm.clientWidth - 150) + 150), Math.floor(Math.random() * (scherm.clientWidth - 150) + 150), Math.floor(Math.random() * 3));
        enemy.create();
        enemy.checkForPlayer();
        enemy.follow();

        enemies.push(enemy);
    }
    setTimeout(() => {
        enemies.forEach((enemy) =>{
            enemy.enemy.remove();
            enemy.remove();
            menu();
        })
    },20000) //length of attack
}