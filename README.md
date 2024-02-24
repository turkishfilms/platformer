# Platformer Game

This is a platformer game built using p5.js and Matter.js.

## Installation

Before running the game, make sure you have Node.js installed on your machine. Then, follow these steps:

1. Clone this repository to your local machine.

>   `git clone https://github.com/turkishfilms/platformer.git`

2. Navigate to the project directory in your terminal.

>   `cd platformer`

3. Run the following command to install the necessary dependencies:

```bash
npm install
```

## Usage


To start the game execute the command:

```bash
npm start
```

Then open localhost port 3011 (127.0.0.1:3011) in a web browser.


## Controls

Use the 'd' key to move the player right.  
Use the 'a' key to move the player left.  
Use the 'w' key to make the player jump.  
Press '3' to go to the previous level.  //doesn't work
Press '4' to go to the next level.  //doesn't work
Press '5' to clear all obstacles from the current level.  //freezes game with error

PhysicsHandler.js:58 Uncaught TypeError: Cannot read properties of undefined (reading 'bodies')
    at PhysicsHandler.getPlayerBody (PhysicsHandler.js:58:23)
    at PlayerHandler.updatePlayer (PlayerHandler.js:19:38)
    at GameHandler.nextFrame (gameHandler.js:31:22)
    at draw (index.js:29:7)
    at e.default.redraw (p5.min.js:2:542441)
    at _draw (p5.min.js:2:462354)

Assuming because no objects on first level


Press 'q' to pause/unpause the game.  

## Files Structure

index.html: HTML file containing the game structure and script references.  
static/js: Directory containing JavaScript files for game logic.  
static/js/class: Directory containing JavaScript files for various game classes.  
static/js/level: Directory containing JavaScript files defining level data and obstacles.  
static/js/constants.js: File containing constant values used in the game.  
static/js/index.js: Main JavaScript file initializing the game.  
package.json: File containing metadata and dependencies information.  
README.md: This file, containing information about the game and how to run it.  

## Dependencies

This project uses the following dependencies:

p5.js: JavaScript library for creative coding and visualization.  
Matter.js: JavaScript physics engine for simulating rigid bodies.  
Express: Fast, unopinionated, minimalist web framework for Node.js.  

## Credits

This game was created by CodingGang.

