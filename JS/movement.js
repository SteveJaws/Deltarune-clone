let scherm = document.getElementById('enemyAttackScreen');

let moveX = 0;
let moveY = 0;
let keyRight = false;
let keyLeft = false;
let keyUp = false;
let keyDown = false;
let multiplier = window.innerWidth / 100;
let speed = 0.2 * multiplier;
let playerIsDead = false;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' && vecht == true) {
        keyRight = true;
    }
    if (e.key === 'ArrowLeft' && vecht == true) {
        keyLeft = true;
    }
    if(e.key === 'ArrowUp' && vecht == true){
        keyUp = true;
    }
    if(e.key === 'ArrowDown' && vecht == true){
        keyDown = true;
    }
});

document.addEventListener('keyup', (e) => {
    if (e.key === 'ArrowRight'){
        keyRight = false;
    }
    if (e.key === 'ArrowLeft'){
        keyLeft = false;
    }
    if(e.key === 'ArrowUp'){
        keyUp = false;
    }
    if(e.key === 'ArrowDown'){
        keyDown = false;
    }
});

function loop(){
    if(keyRight && playerIsDead == false){
        if(moveX < scherm.clientWidth - parseInt(player.clientWidth)){
            if(keyUp || keyDown){
                moveX += speed * 0.7;
            }
            else{
                moveX += speed;
            }
            player.style.left = moveX + 'px';
        }
    }
    if(keyLeft && playerIsDead == false){
        if(moveX > scherm.clientWidth - scherm.clientWidth){
            if(keyUp || keyDown){
                moveX -= speed * 0.7;
            }
            else{
                moveX -= speed;
            }

            player.style.left = moveX + 'px';
        }
    }
    if(keyUp && playerIsDead == false){
        if(moveY > scherm.clientHeight - scherm.clientHeight){
            if(keyRight || keyLeft){
                moveY -= speed * 0.7;
            }
            else{
                moveY -= speed;
            }
            player.style.top = moveY + 'px';
        }
    }
    if(keyDown && playerIsDead == false){
        if(moveY < scherm.clientHeight - parseInt(player.clientHeight)){
            if(keyRight || keyLeft){
                moveY += speed * 0.7;
            }
            else{
                moveY += speed;
            }
            player.style.top = moveY + 'px';
        }
    }
    
}

function playerDeath(){
    playerIsDead = true;
}

setInterval(loop, 10);