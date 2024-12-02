let fightConsole = document.getElementById("fightConsole");
let pressed = false;

let healthBarEnemy = document.getElementById("healthBarEnemy");
let healthBarEnemyInside = document.getElementById("healthBarEnemyInside");

let easyMaker = innerWidth * 0.015;

function myAttack() {
    healthBarEnemy.style.display = "block";
    fightConsole.style.display = 'flex';
    document.getElementById('consoleDiv').style.display = "none";
    pressed = false;
    let movingBar = document.createElement('div');
    movingBar.style.width = "0.3vw";
    movingBar.style.height = "1.2vw";
    movingBar.style.position = "absolute";
    movingBar.style.right = "0px";
    movingBar.style.backgroundColor = "rgba(0,255,255,1)";
    
    fightConsole.appendChild(movingBar);

    moveBar(movingBar);

    let movingBarTarget = document.createElement('div');
    movingBarTarget.style.width = "1vw";
    movingBarTarget.style.height = "2vw";
    movingBarTarget.style.position = "absolute";
    movingBarTarget.style.left = "5vw";
    movingBarTarget.classList.add('colorFade');

    fightConsole.appendChild(movingBarTarget);

    checkHitBox(movingBar, movingBarTarget, true);
}

// Set up the keypress detection once
document.addEventListener("keydown", (e) => {
    if (e.key === 'z' && !pressed) {
        pressed = true; // Prevent multiple hits
    }
});

function moveBar(movingBar) {
    if(pressed == true){
        return;
    }
    let speed = window.innerWidth * 0.005;
    let currentRight = parseInt(movingBar.style.right);

    movingBar.style.right = currentRight + speed + "px";

    requestAnimationFrame(() => moveBar(movingBar));
}

function checkHitBox(movingBar, movingBarTarget, check) {
    if (!check) {
        return;
    }

    let movingBarInfo = movingBar.getBoundingClientRect();
    let targetInfo = movingBarTarget.getBoundingClientRect();

    if (pressed) {
        // Check for collision
        if (
            movingBarInfo.left < targetInfo.right + easyMaker &&
            movingBarInfo.right > targetInfo.left - easyMaker
        ) {
            dealDamage(30);
        } else {
            dealDamage(15);
        }

        setTimeout(() => {
            movingBar.remove();
        },1000)
        return;
    }

    requestAnimationFrame(() => checkHitBox(movingBar, movingBarTarget, true));
}