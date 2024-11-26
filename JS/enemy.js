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
        this.checkForPlayer = this.checkForPlayer.bind(this);
        this.dead = false;
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
        },350)
    }

    follow(){
        let hitSide = false;
        let hitTop = false;
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

        //checks if you have been hit from the side
        if(!(currentLeft < targetLeft - 5 || currentLeft > targetLeft + 5)){
            hitSide = true;
        }
        else{
            hitSide = false;
        }

        //checks if you have been hit from the top or bottom
        if(!(currentTop < targetTop - 5 || currentTop > targetTop + 5)){
            hitTop = true;
        }
        else{
            hitTop = false;
        }
        
        if(hitSide == true && hitTop == true && this.dead == false){
            takeDamage();
        }

        requestAnimationFrame(this.follow);
    }

    remove(){
        this.dead = true;
    }
}