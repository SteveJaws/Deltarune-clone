class Arrow{
    constructor(X, Y){
        this.spawnX = X;
        this.spawnY = Y;
        this.hitBoxLengthRight = Math.ceil(window.innerWidth * 0.03); //this is almost perfect right has to be on bottom and right 
        this.hitBoxLengthLeft = Math.ceil(window.innerWidth * 0.003); //this is almost perfect left has to be on top and left
        this.targetLeft = parseInt(player.style.left);
        this.targetTop = parseInt(player.style.top);
        this.shoot = this.shoot.bind(this);
        this.speed = 1.4;
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

        this.spadeSprite = document.createElement("div");
        this.spadeSprite.style.width = "100%";
        this.spadeSprite.style.height = "100%";
        this.spadeSprite.style.left = parseInt(this.arrow.style.left) + "px";
        this.spadeSprite.style.top = parseInt(this.arrow.style.top) + "px";
        this.spadeSprite.classList.add('spade-sprite');

        this.arrow.appendChild(this.spadeSprite);

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
            this.spadeSprite.style.rotate = "130deg";
            this.speed = this.speed * 1.2;
        }
        if(this.moveRight == true && this.moveUp == true){
            this.spadeSprite.style.rotate = "40deg";
        }
        if(this.moveLeft == true && this.moveDown == true){
            this.spadeSprite.style.rotate = "230deg";
            this.speed = this.speed * 1.2;
        }
        if(this.moveLeft == true && this.moveUp == true){
            this.spadeSprite.style.rotate = "310deg";
        }
    }

    shoot(){
        if(this.dead == true){
            return;
        }
        let currentLeft = parseInt(this.arrow.style.left);
        let currentTop = parseInt(this.arrow.style.top);
        let arrowRect = this.arrow.getBoundingClientRect();
        let playerRect = player.getBoundingClientRect();

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

        let padding = Math.ceil(window.innerWidth * 0.004) * -1; // Increase this value for more forgiving hitboxes -15

        if (
            arrowRect.left - padding < playerRect.right + padding &&  // Expand the left edge
            arrowRect.right + padding > playerRect.left - padding &&  // Expand the right edge
            arrowRect.top - padding < playerRect.bottom + padding &&  // Expand the top edge
            arrowRect.bottom + padding > playerRect.top - padding     // Expand the bottom edge
        ) {
            takeDamage(10);
        }

        if(currentLeft > scherm.clientWidth || currentLeft < scherm.clientWidth - scherm.clientWidth || currentTop > scherm.clientHeight || currentTop < scherm.clientHeight - scherm.clientHeight){
            this.explode();
        }

        requestAnimationFrame(this.shoot);
    }

    explode() {
        this.remove();
        for (let i = 0; i < 3; i++) {
            let ball = document.createElement('div');
            ball.style.width = "1vw";
            ball.style.height = "1vw";
            ball.style.position = "absolute";
            ball.style.left = parseInt(this.arrow.style.left) + "px";
            ball.style.top = parseInt(this.arrow.style.top) + "px";
            ball.style.backgroundColor = "white";
            ball.style.borderRadius = "50%";
    
            // Append the ball to the screen
            document.getElementById('enemyAttackScreen').appendChild(ball);
    
            // Randomize ball direction
            let speedX = (Math.random() - 0.5) * 2; // Between -1 and 1
            let speedY = (Math.random() - 0.5) * 2;
    
            // Collision detection function
            function checkCollision() {
                let ballRect = ball.getBoundingClientRect();
                let playerRect = player.getBoundingClientRect();
    
                // Check overlap
                if (
                    ballRect.left < playerRect.right && 
                    ballRect.right > playerRect.left &&
                    ballRect.top < playerRect.bottom &&
                    ballRect.bottom > playerRect.top
                ) {
                    takeDamage(5);
                }
            }
    
            // Ball movement logic
            function moveBall() {
                let currentLeft = parseFloat(ball.style.left);
                let currentTop = parseFloat(ball.style.top);
    
                ball.style.left = currentLeft + speedX + "px";
                ball.style.top = currentTop + speedY + "px";
    
                // Check for collision during movement
                checkCollision();
    
                // Continue moving
                requestAnimationFrame(moveBall);
            }
    
            // Start moving the ball
            moveBall();
    
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