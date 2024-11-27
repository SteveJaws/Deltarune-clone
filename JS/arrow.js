class Arrow{
    constructor(X, Y){
        this.spawnX = X;
        this.spawnY = Y;
        this.hitBoxLengthRight = Math.ceil(window.innerWidth * 0.02); //this is almost perfect right has to be on bottom and right 
        this.hitBoxLengthLeft = Math.ceil(window.innerWidth * 0.007); //this is almost perfect left has to be on top and left
        this.targetLeft = parseInt(player.style.left);
        this.targetTop = parseInt(player.style.top);
        this.shoot = this.shoot.bind(this);
        this.speed = 4.2;
        this.dead = false;
    }

    spawn(){
        this.arrow = document.createElement('div');
        this.arrow.style.width = "1vw";
        this.arrow.style.height = "1vw";
        this.arrow.style.backgroundColor = "white";
        this.arrow.style.position = "absolute";
        this.arrow.style.left = this.spawnX + "px";
        this.arrow.style.top = this.spawnY + "px";

        document.getElementById('enemyAttackScreen').appendChild(this.arrow);

        this.moveRight = false;
        this.moveLeft = false;
        this.moveUp = false;
        this.moveDown = false;
        this.currentLeft = parseInt(this.arrow.style.left);
        this.currentTop  = parseInt(this.arrow.style.top);
        

        if(this.currentLeft < this.targetLeft){
            this.moveRight = true;
        }
        else if(this.currentLeft > this.targetLeft){
            this.moveLeft = true;
        }

        if(this.currentTop < this.targetTop){
            this.moveDown = true;
        }
        else if(this.currentTop > this.targetTop){
            this.moveUp = true;
        }
    }

    shoot(){
        if(this.dead == true){
            console.log('i am dead');
            return;
        }
        let hitSide = false;
        let hitTop = false;
        let targetLeft = parseInt(player.style.left);
        let targetTop = parseInt(player.style.top);
        let currentLeft = parseInt(this.arrow.style.left);
        let currentTop = parseInt(this.arrow.style.top);

        if(this.moveRight == true){
            this.arrow.style.left = currentLeft + this.speed + "px";
        }
        if(this.moveLeft == true){
            this.arrow.style.left = currentLeft - this.speed + "px";
        }
        if(this.moveUp == true){
            this.arrow.style.top = currentTop - this.speed + "px";
        }
        if(this.moveDown == true){
            this.arrow.style.top = currentTop + this.speed + "px";
        }

        //here i am gonna check if the arrow touches the player if thats the case damage them ofcourse

        if(!(currentLeft < targetLeft - this.hitBoxLengthLeft || currentLeft > targetLeft + this.hitBoxLengthRight)){
            hitSide = true;
        }
        else{
            hitSide = false;
        }

        if(!(currentTop < targetTop - this.hitBoxLengthLeft || currentTop > targetTop + this.hitBoxLengthRight)){
            hitTop = true;
        }
        else{
            hitTop = false;
        }

        if(hitSide == true && hitTop == true && this.dead == false){
            takeDamage();
        }

        requestAnimationFrame(this.shoot);
    }

    remove(){
        this.dead = true;
    }
}