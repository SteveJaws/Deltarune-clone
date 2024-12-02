let player;
let bottom;
let immune = false;
let health = 100;
let defending = false;
document.getElementById('healthNumber').innerHTML = health;
document.getElementById('healthBar').style.width = health + "%";

window.addEventListener('DOMContentLoaded', () => {
    player = document.createElement('div');
    player.style.width = '1.5vw';
    player.style.height = '1.5vw';
    player.style.position = 'absolute';
    player.style.left = 0 + "px";
    player.style.top = 0 + "px";
    player.style.display = "flex";
    player.style.alignItems = "center";
    player.style.justifyContent = "center";
    player.classList.add('player-soul');
    player.id = 'player';

    document.getElementById('enemyAttackScreen').appendChild(player);
})

function takeDamage(damage){
    if(defending == true){
        damage = damage - 3;
    }
    if(immune == false){
        health = health - damage;
        document.getElementById('damageNumber').innerHTML = damage;
        document.getElementById('damageNumber').style.display = "block";
        setTimeout(() => {
            document.getElementById('damageNumber').style.display = "none";
        },990)
        document.getElementById('healthBar').style.width = health + "%";
        
        if(health < 0){
            document.getElementById('healthNumber').innerHTML = 0;
        }
        else{
            document.getElementById('healthNumber').innerHTML = health;
        }
        immune = true;

        setTimeout(() => {
            immune = false;
        },500) //length of immune timer after getting hit
        if(health <= 0){ //checks if player is dead
            document.getElementById('healthBar').style.width = 0 + "%";
            playerDeath();
            setTimeout(() => {
                player.remove();
                setTimeout(() => {
                    window.location.reload();
                },1000)
            },1000)
        }
    }
    else{
        return;
    }
}

function heal(healAmount){
    health = health + healAmount;
    if(health > 100){
        health = 100;
    }

    document.getElementById('healNumber').innerHTML = healAmount;
    document.getElementById('healNumber').style.display = "block";
    document.getElementById('healthBar').style.width = health + "%";
    document.getElementById('healthNumber').innerHTML = health;

    setTimeout(() => {
        fight();
        document.getElementById('healNumber').style.display = "none";
    },1990)
}