let player;
let bottom;

window.addEventListener('DOMContentLoaded', () => {
    player = document.createElement('div');
    player.style.width = '2vw';
    player.style.height = '2vw';
    player.style.backgroundColor = 'red'; 
    player.style.position = 'absolute';
    player.style.position.left = 0 + "px";
    player.style.position.top = 0 + "px";
    player.style.display = "flex";
    player.style.alignItems = "center";
    player.style.justifyContent = "center";
    player.id = 'player';

    document.getElementById('enemyAttackScreen').appendChild(player);

    playerCore = document.createElement('div');
    playerCore.style.width = '10px';
    playerCore.style.height = '10px';
    playerCore.style.backgroundColor = 'purple';

    player.appendChild(playerCore);
})