let enemyHP = 100;
healthBarEnemyInside.style.width = enemyHP + "%";

let enemyDiv = document.getElementById("enemyDiv");

function dealDamage(damage){
    kris.classList.remove("kris-slash");
    enemyDiv.classList.add("enemy-hurt");
    console.log("enemy has " + enemyHP + " HP");
    enemyHP = enemyHP - damage;
    if(enemyHP <= 0){
        console.log('you win');
    }else{
        console.log("now the enemy has: " + enemyHP + " HP");
    }

    healthBarEnemyInside.style.width = enemyHP + "%";

    document.getElementById('consoleDiv').style.display = "block";
    fightConsole.style.display = "none";

    document.getElementById("damageNumberEnemy").style.display = "block";
    document.getElementById("damageNumberEnemy").innerHTML = damage;
    setTimeout(() => {
        document.getElementById("damageNumberEnemy").style.display = "none";

        setTimeout(() => {
            enemyDiv.classList.remove("enemy-hurt");
            fight();
            healthBarEnemy.style.display = "none";
            consoleOpen = false;
        },500)
    },1990)

    
}