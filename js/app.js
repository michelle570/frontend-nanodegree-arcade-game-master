// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x < 500 ? this.x += this.speed * dt : this.x = -100;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
var Player = function(x, y) {
    this.x = x;
    this.y = y;

    this.sprite = 'images/char-cat-girl.png';
};

Player.prototype.update = function() {
    //handled in handleInput
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// This class requires an update(), render()* and
// a handleInput() method.

Player.prototype.handleInput = function(key) {
    console.log(key);
    console.log(this.x + " " + this.y )
    //switch statement for each key and how much to move.
    //this is the enemy movement this.x < 500 ? this.x += this.speed * dt : this.x = -100;
    if (key == "left" && this.x > 0) {
      this.x -= 100;
    }
    if (key == "right" && this.x < 400) {
        this.x += 100;
    }
    if (key == "up" &&  this.y > 0) {
      this.y -= 85;
    }
    if (key == "down" &&  this.y < 400) {
      this.y += 85;
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//starting positions
let allEnemies = [new Enemy(100, 220, 120), new Enemy(200, 140, 150), new Enemy(0, 55, 250)];
let player = new Player(200,400);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
