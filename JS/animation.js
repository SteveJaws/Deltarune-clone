let playArea = document.getElementById('enemyAttackScreen');


function enemyAttackScreenSlideDown(){
    playArea.style.display = "Block";
    playArea.classList.add('slide-down');
    setTimeout(() => {
        playArea.classList.remove('slide-down');
    }, 490)
}

function enemyAttackScreenSlideUp(){
    playArea.classList.add('slide-up');
    setTimeout(() => {
        playArea.style.display = "none";
        playArea.classList.remove('slide-up');
    }, 490)
}