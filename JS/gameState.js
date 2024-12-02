let vecht = true;

function startGame(){
    document.getElementById('start').style.display = "none";
    document.getElementById('scherm').style.display = "block";
    vecht = false;
}

function menu(){
    enemyAttackScreenSlideUp();
    setTimeout(() => {
        enemyDiv.classList.remove("enemy-during-attack");
        vecht = false;
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