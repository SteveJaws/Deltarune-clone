function attackChooser(){
    // let attackNumber = Math.floor(Math.random() * 3);
    // if(attackNumber == 0){
    //     attack0();
    // }
    // else if(attackNumber == 1){
    //     console.log("chose attack 1");
    // }
    // else if(attackNumber == 2){
    //     console.log("chose attack 2");
    // }
    attack0();
}

function attack0(){
    let enemy1 = new Enemy("test");
    enemy1.create();
    enemy1.follow();
}