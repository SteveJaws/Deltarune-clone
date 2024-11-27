let player;
let bottom;
let immune = false;
let health = 100;
document.getElementById('healthDisplay').innerHTML = health;

window.addEventListener('DOMContentLoaded', () => {
    player = document.createElement('div');
    player.style.width = '2vw';
    player.style.height = '2vw';
    player.style.position = 'absolute';
    player.style.left = 0 + "px";
    player.style.top = 0 + "px";
    player.style.display = "flex";
    player.style.alignItems = "center";
    player.style.justifyContent = "center";
    player.classList.add('player-soul');
    player.id = 'player';

    document.getElementById('enemyAttackScreen').appendChild(player);

    // let playerCore = document.createElement('div');
    // playerCore.id = "playerCore";
    // playerCore.style.width = '10px';
    // playerCore.style.height = '10px';
    // playerCore.style.backgroundColor = 'purple';
    // playerCore.style.display = "flex";
    // playerCore.style.alignItems = "center";
    // playerCore.style.justifyContent = "center";

    // player.appendChild(playerCore);

    //these are only for visible hitbox refrence can remove when not want to see the hitbox

    // let playerCorePoint1 = document.createElement('div');
    // playerCorePoint1.id = "playerCorePoint1";
    // playerCorePoint1.style.width = '5px';
    // playerCorePoint1.style.height = '5px';
    // playerCorePoint1.style.backgroundColor = 'pink';
    // playerCorePoint1.style.position = "absolute";
    // playerCorePoint1.style.bottom = '25px'

    // playerCore.appendChild(playerCorePoint1);

    // let playerCorePoint2 = document.createElement('div');
    // playerCorePoint2.id = "playerCorePoint2";
    // playerCorePoint2.style.width = '5px';
    // playerCorePoint2.style.height = '5px';
    // playerCorePoint2.style.backgroundColor = 'pink';
    // playerCorePoint2.style.position = "absolute";
    // playerCorePoint2.style.top = '25px'

    // playerCore.appendChild(playerCorePoint2);

    // let playerCorePoint3 = document.createElement('div');
    // playerCorePoint3.id = "playerCorePoint3";
    // playerCorePoint3.style.width = '5px';
    // playerCorePoint3.style.height = '5px';
    // playerCorePoint3.style.backgroundColor = 'pink';
    // playerCorePoint3.style.position = "absolute";
    // playerCorePoint3.style.left = '25px'

    // playerCore.appendChild(playerCorePoint3);

    // let playerCorePoint4 = document.createElement('div');
    // playerCorePoint4.id = "playerCorePoint4";
    // playerCorePoint4.style.width = '5px';
    // playerCorePoint4.style.height = '5px';
    // playerCorePoint4.style.backgroundColor = 'pink';
    // playerCorePoint4.style.position = "absolute";
    // playerCorePoint4.style.right = '25px'

    // playerCore.appendChild(playerCorePoint4);

    //these are only for visible hitbox refrence can remove when not want to see the hitbox

})

function takeDamage(){
    if(immune == false){
        health--;
        document.getElementById('healthDisplay').innerHTML = health;
        immune = true;

        setTimeout(() => {
            immune = false;
        },500) //length of immune timer after getting hit
    }
    else{
        return;
    }
}