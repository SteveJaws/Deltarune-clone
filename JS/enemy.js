

class Enemy {
    constructor(speed){
        this.speed = speed;
        this.follow = this.follow.bind(this);
    }

    create(){
        console.log('creating enemy');
        this.enemy = document.createElement('div');
        this.enemy.style.width = "10px";
        this.enemy.style.height = "10px";
        this.enemy.style.backgroundColor = "black";
        this.enemy.style.position = "absolute";

        document.getElementById('enemyAttackScreen').appendChild(this.enemy);
    }

    follow(){
        console.log("getting ready to follow");

        this.enemy.style.left = parseInt(player.style.left) + "px";
        this.enemy.style.top = parseInt(player.style.top) + "px";

        requestAnimationFrame(this.follow);
    }
}