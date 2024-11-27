class Enemy {
    constructor(left, top, speed){
        if(speed < 1){
            this.speed = 1;
        }
        else{
            this.speed = speed;
        }
        this.hitBoxLengthRight = Math.ceil(window.innerWidth * 0.01); //this is almost perfect 
        this.hitBoxLengthLeft = Math.ceil(window.innerWidth * 0.0025); //this is almost perfect
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
        if(this.dead == true){
            return;
        }
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

        //checks if the enemy touches the player on the sides
        if(!(currentLeft < targetLeft - this.hitBoxLengthLeft || currentLeft > targetLeft + this.hitBoxLengthRight)){
            hitSide = true;
        }
        else{
            hitSide = false;
        }

        //checks if the enemy touches the player on the top or bottom
        if(!(currentTop < targetTop - this.hitBoxLengthLeft || currentTop > targetTop + this.hitBoxLengthRight)){
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