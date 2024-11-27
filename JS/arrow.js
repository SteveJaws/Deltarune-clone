class Arrow{
    constructor(X, Y){
        this.spawnX = X;
        this.spawnY = Y;
        this.hitBoxLengthRight = Math.ceil(window.innerWidth * 0.01); //this is almost perfect right has to be on bottom and right 
        this.hitBoxLengthLeft = Math.ceil(window.innerWidth * 0.0015); //this is almost perfect left has to be on top and left
        this.targetLeft = parseInt(player.style.left);
        this.targetTop = parseInt(player.style.top);
    }

    spawn(){
        // console.log("spawnX: " + this.spawnX);
        // console.log("spawnY: " + this.spawnY);
        console.log("playerLeft: " + this.targetLeft);
        console.log("playerTop: " + this.targetTop);

        let arrow = document.createElement('div');
        arrow.style.width = "10px";
        arrow.style.height = "10px";
        arrow.style.backgroundColor = "white";
        arrow.style.left = this.spawnX + "px";
        arrow.style.top = this.spawnY + "px";
    }

    remove(){
        console.log('i have been removed');
    }
}