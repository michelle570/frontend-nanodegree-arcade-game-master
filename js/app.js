let loses = 0;
let wins = 0;

const winSpan = document.querySelector('#wins');
const lossSpan = document.querySelector('#loses');

// Enemies our player must avoid
var Enemy = function(x, y, speed, sprite) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = sprite;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter which will ensure the game runs at the same speed for all computers.
    this.x < 500 ? this.x += this.speed * dt : this.x = -100;
    //check collitions
    checkCollisions(this.x, this.y);
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
// This class requires an update(), render()* and a handleInput() method.

Player.prototype.handleInput = function(key) {
    //console.log(key);
  //  console.log(this.x + " " + this.y );
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
    //console.log(this.x + " " + this.y );
    //check if at water & is safe
    if (this.y < 0) {
      console.log("at water");
    //  alert("Congratulations!");
      wins += 1;
      resetPositions();
      console.log(wins);
      winSpan.textContent = wins;
    }

};

function checkCollisions(x,y) {
  //verify x & y against each enemy's x & y.

  if (player.x >= (x-50) && player.x <= (x+50) && player.y >= (y-20) && player.y <= (y+20)) {
    //alert("Oh NO!!!!");
    loses -= 1;
    lossSpan.textContent = loses * -1;
    resetPositions();
  }
};

function resetPositions() {
  player.x = 200;
  player.y = 400;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//starting positions
let allEnemies = [new Enemy(100, 220, 120, "images/enemy-bug-purple.png"), new Enemy(200, 140, 150, "images/enemy-bug-blue.png"), new Enemy(0, 55, 250, "images/enemy-bug-green.png")];
let player = new Player(200,400);


//const scoreSpan = document.querySelector('#deck');
//const winSpan = document.querySelector('#wins');
//const lossSpan = document.querySelector('#loses');

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
