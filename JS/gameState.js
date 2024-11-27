let vecht = false;

function menu(){
    vecht = false;
    enemyAttackScreenSlideUp();
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