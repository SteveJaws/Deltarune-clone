let player;
let bottom;

window.addEventListener('DOMContentLoaded', () => {
    player = document.createElement('div');
    player.style.width = '25px';
    player.style.height = '25px';
    player.style.backgroundColor = 'red';    
    player.style.position = 'absolute';
    player.id = 'player';

    
    document.getElementById('enemyAttackScreen').appendChild(player);
})

let enemy = {
    hp: 100,

    attack(){
        console.log('Enemy attacks');
    }
}