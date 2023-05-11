const targets = Array.from(document.getElementsByClassName('stormtrooper'));
const blockers = Array.from(document.getElementsByClassName('supply-crate'));
const body = document.getElementById('gameArea');
const scoreArea = document.getElementById('scoreArea');
const maxAmmoArea = document.getElementById('maxAmmoArea');
const currentAmmoArea = document.getElementById('currentAmmoArea');

enemy = {
    "destroyable": true
};

cover = {
    "destroyable": false
};

score = 0;
scoreArea.innerHTML = score;

maxAmmo = 6;
currentAmmo = 6;
maxAmmoArea.innerHTML = maxAmmo;
currentAmmoArea.innerHTML = currentAmmo;


targets.forEach(target => {
    target.addEventListener('click', function handleClick(event) {
        if (currentAmmo > 0) {
            if (enemy.destroyable) {
                target.setAttribute('style', 'display: none;');
                score += 10;
            }
            else {
                console.log("Hit Cover!");
            }

            scoreArea.innerHTML = score;
        }

    });
});

blockers.forEach(blocker => {
    blocker.addEventListener('click', function handleClick(event) {
        if (currentAmmo > 0) {
            if (cover.destroyable) {
                blocker.setAttribute('style', 'display: none;');

                score += 10;
            }
            else {
                console.log("Hit Cover!");
            }

            scoreArea.innerHTML = score;
        }
    });
});

body.addEventListener('click', function playSound(event) {
    if (currentAmmo > 0) {
        var audio = new Audio('Single_blaster_shot.mp3');
        audio.play();
        currentAmmo -= 1;
        currentAmmoArea.innerHTML = currentAmmo;
    } else {
        var audio_out = new Audio('ammo-out.mp3');
        audio_out.play();
    }

});