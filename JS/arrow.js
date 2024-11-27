class Arrow{
    constructor(X, Y){
        this.spawnX = X;
        this.spawnY = Y;
        this.hitBoxLengthRight = Math.ceil(window.innerWidth * 0.02); //this is almost perfect right has to be on bottom and right 
        this.hitBoxLengthLeft = Math.ceil(window.innerWidth * 0.007); //this is almost perfect left has to be on top and left
        this.targetLeft = parseInt(player.style.left);
        this.targetTop = parseInt(player.style.top);
        this.shoot = this.shoot.bind(this);
        this.speed = 1.7;
        this.dead = false;
    }

    spawn(){
        this.arrow = document.createElement('div');
        this.arrow.style.width = "4vw";
        this.arrow.style.height = "4vw";
        this.arrow.style.position = "absolute";
        this.arrow.style.left = this.spawnX + "px";
        this.arrow.style.top = this.spawnY + "px";
        this.arrow.classList.add("spade-projectile");

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

        if(this.moveRight == true && this.moveDown == true){
            this.arrow.style.rotate = "130deg";
        }
        if(this.moveRight == true && this.moveUp == true){
            this.arrow.style.rotate = "50deg";
        }
        if(this.moveLeft == true && this.moveDown == true){
            this.arrow.style.rotate = "230deg";
        }
        if(this.moveLeft == true && this.moveUp == true){
            this.arrow.style.rotate = "310deg";
        }
    }

    shoot(){
        if(this.dead == true){
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

        if(currentLeft > scherm.clientWidth || currentLeft < scherm.clientWidth - scherm.clientWidth || currentTop > scherm.clientHeight || currentTop < scherm.clientHeight - scherm.clientHeight){
            this.explode();
        }

        requestAnimationFrame(this.shoot);
    }

    explode(){
        this.remove();
        for(let i = 0; i < 3; i++){
            let ball = document.createElement('div');
            ball.style.width = "1vw";
            ball.style.height = "1vw";
            ball.style.position = "absolute";
            ball.style.left = parseInt(this.arrow.style.left) + "px";
            ball.style.top = parseInt(this.arrow.style.top) + "px";
            ball.style.backgroundColor = "white";
            ball.style.borderRadius = "50%";
    
            // Randomize the direction and speed of each ball
            let speedX = (Math.random() - 0.5) * 2; // Random speed between -1 and 1 for x direction
            let speedY = (Math.random() - 0.5) * 2; // Random speed between -1 and 1 for y direction
    
            // Apply the movement to the ball
            function moveBall() {
                let currentLeft = parseFloat(ball.style.left);
                let currentTop = parseFloat(ball.style.top);
    
                ball.style.left = currentLeft + speedX + "px";
                ball.style.top = currentTop + speedY + "px";
    
                // Continue moving the ball
                requestAnimationFrame(moveBall);
            }
    
            // Start moving the ball
            moveBall();
    
            document.getElementById('enemyAttackScreen').appendChild(ball);
    
            // Remove the ball after 2 seconds
            setTimeout(() => {
                ball.remove();
            }, 5000);
        }
        this.dead = true;
    }
    

    remove(){
        this.dead = true;
        this.arrow.remove();
    }
}