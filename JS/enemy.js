let enemyHP = 100;

function dealDamage(damage){
    console.log("enemy has " + enemyHP + " HP");
    enemyHP = enemyHP - damage;
    if(enemyHP <= 0){
        alert('youwin');
    }else{
        console.log("now the enemy has: " + enemyHP + " HP");
    }

    document.getElementById('consoleDiv').style.display = "block";
    fightConsole.style.display = "none";

    document.getElementById("damageNumberEnemy").style.display = "block";
    document.getElementById("damageNumberEnemy").innerHTML = damage;
    setTimeout(() => {
        document.getElementById("damageNumberEnemy").style.display = "none";

        setTimeout(() => {
            fight();
            consoleOpen = false;
        },500)
    },1990)

    
}