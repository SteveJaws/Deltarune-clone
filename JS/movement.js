let scherm = document.getElementById('enemyAttackScreen');

let moveX = 0;
let moveY = 0;
let keyRight = false;
let keyLeft = false;
let keyUp = false;
let keyDown = false;

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
    if(keyRight){
        if(moveX < scherm.clientWidth - parseInt(player.clientWidth)){
            if(keyUp || keyDown){
                moveX += 2.5 * 0.7 * (window.innerWidth / 2000);
            }
            else{
                moveX += 2.5 * (window.innerWidth / 2000);
            }
            player.style.left = moveX + 'px';
        }
    }
    if(keyLeft){
        if(moveX > scherm.clientWidth - scherm.clientWidth){
            if(keyUp || keyDown){
                moveX -= 2.5 * 0.7 * (window.innerWidth / 2000);
            }
            else{
                moveX -= 2.5 * (window.innerWidth / 2000);
            }

            player.style.left = moveX + 'px';
        }
    }
    if(keyUp){
        if(moveY > scherm.clientHeight - scherm.clientHeight){
            if(keyRight || keyLeft){
                moveY -= 2.5 * 0.7 * (window.innerWidth / 2000);
            }
            else{
                moveY -= 2.5 * (window.innerWidth / 2000);
            }
            player.style.top = moveY + 'px';
        }
    }
    if(keyDown){
        if(moveY < scherm.clientHeight - parseInt(player.clientHeight)){
            if(keyRight || keyLeft){
                moveY += 2.5 * 0.7 * (window.innerWidth / 2000);
            }
            else{
                moveY += 2.5 * (window.innerWidth / 2000);
            }
            player.style.top = moveY + 'px';
        }
    }
    
}

setInterval(loop, 10);