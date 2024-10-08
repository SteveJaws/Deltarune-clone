let scherm = document.getElementById('enemyAttackScreen');

let moveX = 0;
let moveY = 0;
let keyRight = false;
let keyLeft = false;
let keyUp = false;
let keyDown = false;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
        keyRight = true;
    }
    if (e.key === 'ArrowLeft') {
        keyLeft = true;
    }
    if(e.key === 'ArrowUp'){
        keyUp = true;
    }
    if(e.key === 'ArrowDown'){
        keyDown = true;
    }
});

document.addEventListener('keyup', (e) => {
    console.log(moveX);
    if (e.key === 'ArrowRight') {
        keyRight = false;
    }
    if (e.key === 'ArrowLeft') {
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
                moveX += 3 * 0.7;
            }
            else{
                moveX += 3;
            }
            player.style.left = moveX + 'px';
        }
    }
    if(keyLeft){
        if(moveX > scherm.clientWidth - scherm.clientWidth){
            if(keyUp || keyDown){
                moveX -= 3 * 0.7;
            }
            else{
                moveX -= 3;
            }

            player.style.left = moveX + 'px';
        }
    }
    if(keyUp){
        if(moveY > scherm.clientHeight - scherm.clientHeight){
            if(keyRight || keyLeft){
                moveY -= 3 * 0.7;
            }
            else{
                moveY -= 3;
            }
            player.style.top = moveY + 'px';
        }
    }
    if(keyDown){
        if(moveY < scherm.clientHeight - parseInt(player.clientHeight)){
            if(keyRight || keyLeft){
                moveY += 3 * 0.7;
            }
            else{
                moveY += 3;
            }
            player.style.top = moveY + 'px';
        }
    }
    
}

setInterval(loop, 10);