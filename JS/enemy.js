

class Enemy {
    constructor(left, top, speed){
        console.log(speed);
        if(speed < 1){
            this.speed = 1;
        }
        else{
            this.speed = speed;
        }
        this.left = left;
        this.top = top;
        this.moveLeft = 0;
        this.moveTop = 0;
        this.follow = this.follow.bind(this);
        this.checkForPlayer = this.checkForPlayer.bind(this)
    }

    create(){
        this.enemy = document.createElement('div');
        this.enemy.style.width = "1vw";
        this.enemy.style.height = "1vw";
        this.enemy.style.backgroundColor = "black";
        this.enemy.style.position = "absolute";
        this.enemy.style.left = this.left + "px";
        this.enemy.style.top = this.top + "px";

        document.getElementById('enemyAttackScreen').appendChild(this.enemy);
    }

    checkForPlayer(){
        this.moveLeft = parseInt(player.style.left);
        this.moveTop = parseInt(player.style.top);
        

        setTimeout(() => {
            this.checkForPlayer();
        },500)
    }

    follow(){
        let currentLeft = parseInt(this.enemy.style.left);
        let currentTop = parseInt(this.enemy.style.top);
        let targetLeft = this.moveLeft;
        let targetTop = this.moveTop;
        if(currentLeft < targetLeft){
            this.enemy.style.left = currentLeft + this.speed + "px";
        }
        else if(currentLeft > targetLeft){
            this.enemy.style.left = currentLeft - this.speed + "px";
        }
        if(currentTop < targetTop){
            this.enemy.style.top = currentTop + this.speed + "px";
        }
        else if(currentTop > targetTop){
            this.enemy.style.top = currentTop - this.speed + "px";
        }

        // here i am gonna check if the enemy touches the player

        

        requestAnimationFrame(this.follow);
    }
}