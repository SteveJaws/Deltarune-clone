let vecht = true;

function startGame(){
    document.getElementById('start').style.display = "none";
    document.getElementById('scherm').style.display = "block";
    vecht = false;
}

function menu(){
    enemyAttackScreenSlideUp();
    setTimeout(() => {
        vecht = false;
    },1000) //timer before the menu controls come back
}

function fight(){
    moveX = 0;
    moveY = 0;
    player.style.left = 0 + "px";
    player.style.top = 0 + "px";
    vecht = true;
    enemyAttackScreenSlideDown();
    setTimeout(() => {
        attackChooser();
    },800) // timer gives you time to adjust to that you are playing
}