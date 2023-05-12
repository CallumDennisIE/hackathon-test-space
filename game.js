const game = document.getElementById('gameArea');

createEnemy('center', 'moveLeft', 'sizeSml');

createEnemy('left', 'moveRight', 'sizeBig');

createEnemy('right', 'moveLeft', 'sizeMed');

function createEnemy(position, moveDirection, spriteSize) {

    if (spriteSize == "sizeSml") {
        size = 100;
    } else if (spriteSize == "sizeMed") {
        size = 200;
    } else {
        size = 300;
    }

    if (moveDirection == "moveLeft") {
        movement = size * -1;
    } else {
        movement = size;
    }


    enemyContainer = document.createElement('div');
    enemyContainer.classList.add('enemyContainer');
    enemyContainer.classList.add(position);
    game.appendChild(enemyContainer);

    enemy = document.createElement('span');
    enemy.classList.add('enemy');
    enemy.classList.add(moveDirection);
    enemy.classList.add('animate');

    if (spriteSize == 'sizeSml') {
        if (moveDirection == "moveLeft") {
            enemy.style.setProperty('animation-name', 'moveSmlLeft');
        } else {
            enemy.style.setProperty('animation-name', 'moveSmlRight');
        }
    } else if (spriteSize == 'sizeMed') {
        if (moveDirection == "moveLeft") {
            enemy.style.setProperty('animation-name', 'moveMedLeft');
        } else {
            enemy.style.setProperty('animation-name', 'moveMedRight');
        }
    } else {
        if (moveDirection == "moveLeft") {
            enemy.style.setProperty('animation-name', 'moveBigLeft');
        } else {
            enemy.style.setProperty('animation-name', 'moveBigRight');
        }
    }




    enemyContainer.appendChild(enemy);

    enemySprite = document.createElement('img');
    enemySprite.setAttribute('src', 'StormTrooper.webp');
    enemySprite.style.setProperty('width', size.toString() + 'px');
    enemy.appendChild(enemySprite);

    cover = document.createElement('span');
    cover.classList.add('cover');
    cover.style.setProperty('right', size.toString() + 'px');
    enemyContainer.appendChild(cover);

    coverSprite = document.createElement('img');
    coverSprite.setAttribute('src', 'rebel_supply_crate.webp');
    coverSprite.style.setProperty('width', size.toString() + 'px');
    cover.appendChild(coverSprite);

    document.documentElement.style.setProperty('--size', size.toString() + 'px');
}