class Arrow{
    constructor(X, Y){
        this.spawnX = X;
        this.spawnY = Y;
        this.hitBoxLengthRight = Math.ceil(window.innerWidth * 0.01); //this is almost perfect right has to be on bottom and right 
        this.hitBoxLengthLeft = Math.ceil(window.innerWidth * 0.0015); //this is almost perfect left has to be on top and left
        this.targetLeft = parseInt(player.style.left);
        this.targetTop = parseInt(player.style.top);
        this.shoot = this.shoot.bind(this);
        this.speed = 5;
    }

    spawn(){
        // console.log("spawnX: " + this.spawnX);
        // console.log("spawnY: " + this.spawnY);
        console.log("playerLeft: " + this.targetLeft);
        console.log("playerTop: " + this.targetTop);

        this.arrow = document.createElement('div');
        this.arrow.style.width = "10px";
        this.arrow.style.height = "10px";
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
        requestAnimationFrame(this.shoot);
    }

    remove(){
        console.log('i have been removed');
    }
}