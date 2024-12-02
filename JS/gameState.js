let chaosKing = document.getElementById("chaosKing");
let battleStart = document.getElementById("battleStart");

let vecht = true;
let superAttack = false;

function startGame(){
    battleStart.play();
    battleStart.volume = 0.5;
    setTimeout(() => {
        chaosKing.play();
        chaosKing.volume = 0.5;
    },1200)


    document.getElementById('start').style.display = "none";
    document.getElementById('scherm').style.display = "block";
    vecht = false;
    document.getElementById("kris").classList.add("kris-battle-intro");
    setTimeout(() => {
        document.getElementById("kris").classList.remove("kris-battle-intro");
    },1000)
}

function menu(){
    defending = false;
    vecht = false;
    superAttack = false;
    
    let chanceToSuperAttack = Math.round(Math.random() * 4);

    if(chanceToSuperAttack == 1){
        hintPlayer("it is looking really mad right now");
        superAttack = true;
    }

    enemyAttackScreenSlideUp();
    setTimeout(() => {
        enemyDiv.classList.remove("enemy-during-attack");
    },1000) //timer before the menu controls come back
}

function fight(){
    moveX = 0;
    moveY = 0;
    player.style.left = 0 + "px";
    player.style.top = 0 + "px";
    vecht = true;
    enemyDiv.classList.add("enemy-attack");
    enemyAttackScreenSlideDown();
    setTimeout(() => {
        enemyDiv.classList.add("enemy-attack");
        attackChooser();
        setTimeout(() => {
            enemyDiv.classList.remove("enemy-attack");
            enemyDiv.classList.add("enemy-during-attack");
        },400)
    },800) // timer gives you time to adjust to that you are playing
}