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
        let enemy = new Enemy(Math.floor(Math.random() * scherm.clientWidth), Math.floor(Math.random() * scherm.clientHeight), Math.floor(Math.random() * 6));
        enemy.create();
        enemy.checkForPlayer();
        enemy.follow();

        enemies.push(enemy);
    }
    setTimeout(() => {
        enemies.forEach((enemy) =>{
            if(enemy.enemy){
                enemy.enemy.remove();
            }
        })
    },5000)
}