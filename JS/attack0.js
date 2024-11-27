let arrows = [];
let arrowChecker = false;
let timer = false;
let attack = false;

function attack0(){
    attack = true;
    let enemies = []; // this is for spawning lots of goons
    for(let i = 0; i < 10; i++){
        let enemy = new Enemy(Math.floor(Math.random() * (scherm.clientWidth - 150) + 150), Math.floor(Math.random() * (scherm.clientWidth - 150) + 150), Math.random() * 2.1);
        enemy.create();
        enemy.checkForPlayer();
        enemy.follow();

        enemies.push(enemy);
    }

    arrowSpawnSystem();

    setTimeout(() => { // timer to end the attack
        enemies.forEach((enemy) =>{
            enemy.enemy.remove();
            enemy.remove();
        })
        menu();
        attack = false;
    },20000) //length of attack
}

function arrowSpawnSystem(){
    if(attack == false){
        arrows.forEach((arrow) => {
            arrow.arrow.remove();
            arrow.remove();
        })
        arrows = [];
        return;
    }
    if(arrowChecker == false){
        arrowChecker = true;
        timer = false;

        let arrow = new Arrow(Math.floor(Math.random() * scherm.clientWidth), Math.floor(Math.random() * scherm.clientHeight));
        arrow.spawn();
        setTimeout(() => {
            arrow.shoot();
        },700)
        arrows.push(arrow);
    }
    if(timer == false){
        timer = true;
        setTimeout(() => {
            arrowChecker = false;
        },1000) // these are the seconds that it takes to spawn a new arrow
    }
    arrowRepeater();   
}

function arrowRepeater(){
    if(arrowChecker == false){
        arrowSpawnSystem();
    }
    else{
        requestAnimationFrame(arrowRepeater);
    }
}   