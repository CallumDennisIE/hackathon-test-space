const game = document.getElementById('gameArea');

createEnemy('center', 'slideLeft', '800', 'px');

function createEnemy(position, moveDirection, size, units) {
    enemyContainer = document.createElement('div');
    enemyContainer.classList.add('enemyContainer');
    enemyContainer.classList.add(position);
    game.appendChild(enemyContainer);

    enemy = document.createElement('span');
    enemy.classList.add('enemy');
    enemy.classList.add('animate');
    enemyContainer.appendChild(enemy);

    enemySprite = document.createElement('img');
    enemySprite.setAttribute('src', 'StormTrooper.webp');
    enemy.appendChild(enemySprite);

    cover = document.createElement('span');
    cover.classList.add('cover');
    enemyContainer.appendChild(cover);

    coverSprite = document.createElement('img');
    coverSprite.setAttribute('src', 'rebel_supply_crate.webp');
    cover.appendChild(coverSprite);


    if (moveDirection == 'slideRight') {
        movement = size;
    } else {
        movement = size * -1;
    }

    document.documentElement.style.setProperty('--movement', movement.toString() + units);
    document.documentElement.style.setProperty('--size', size.toString() + units);
}