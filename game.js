// Define the area that the game will be contianed within
const game = document.getElementById('gameArea');

// Spawn the enemies
createEnemy('center', 'moveLeft', 'sizeSml');
createEnemy('left', 'moveRight', 'sizeBig');
createEnemy('right', 'moveLeft', 'sizeMed');


// Function to create enemies
function createEnemy(position, moveDirection, spriteSize) {

    // Set the size of the sprites based on the 3 sizes.
    if (spriteSize == "sizeSml") {
        size = 100;
    } else if (spriteSize == "sizeMed") {
        size = 200;
    } else {
        size = 300;
    }

    // Inverse the direction of movement animation if moving left
    if (moveDirection == "moveLeft") {
        movement = size * -1;
    } else {
        movement = size;
    }

    // Create the div that will contain the enemy and cover
    enemyContainer = document.createElement('div');
    enemyContainer.classList.add('enemyContainer');
    // Position the enemy container
    enemyContainer.classList.add(position);
    game.appendChild(enemyContainer);

    // Create the span that will contain the enemy sprite image
    enemy = document.createElement('span');
    enemy.classList.add('enemy');
    enemy.classList.add(moveDirection);
    enemy.classList.add('animate');

    // Set the correct animation based on the size and movement of the enemy
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

    // Create the image element that will show the enemy sprite
    enemySprite = document.createElement('img');
    enemySprite.setAttribute('src', 'StormTrooper.webp');
    enemySprite.style.setProperty('width', size.toString() + 'px');
    enemy.appendChild(enemySprite);

    // Create the span that will contain the cover sprite image
    cover = document.createElement('span');
    cover.classList.add('cover');
    cover.style.setProperty('right', size.toString() + 'px');
    enemyContainer.appendChild(cover);

    // Create the image element that will show the cover sprite
    coverSprite = document.createElement('img');
    coverSprite.setAttribute('src', 'rebel_supply_crate.webp');
    coverSprite.style.setProperty('width', size.toString() + 'px');
    cover.appendChild(coverSprite);
}