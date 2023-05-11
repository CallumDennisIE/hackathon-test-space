enemy = {
    "destroyable": true
};

cover = {
    "destroyable": false
};



const targets = Array.from(document.getElementsByClassName('stormtrooper'));
const blockers = Array.from(document.getElementsByClassName('supply-crate'));
const body = document.getElementById('gameArea');
const scoreArea = document.getElementById('scoreArea');

score = 0;
scoreArea.innerHTML = score;

targets.forEach(target => {
    target.addEventListener('click', function handleClick(event) {
        if (enemy.destroyable) {
            target.setAttribute('style', 'display: none;');

            score += 10;
        }
        else {
            console.log("Hit Cover!");
        }

        scoreArea.innerHTML = score;
    });
});

blockers.forEach(blocker => {
    blocker.addEventListener('click', function handleClick(event) {
        if (cover.destroyable) {
            blocker.setAttribute('style', 'display: none;');

            score += 10;
        }
        else {
            console.log("Hit Cover!");
        }

        scoreArea.innerHTML = score;
    });
});

body.addEventListener('click', function playSound(event) {
    var audio = new Audio('Single_blaster_shot.mp3');
    audio.play();
});