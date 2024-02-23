let levelData = [{
	physics: [new Physics()],
	player: [new Player({ color: { r: 0, g: 255, b: 0, a: 0 } })],
	obstacles: [new Obstacle(10, 200, 150, 50), new Obstacle(250, 350, 200, 50), new Obstacle(475, 100, 50, 225), new Obstacle(75, 475, 50, 25), new Obstacle(250, 575, 50, 25), new Obstacle(450, 550, 100, 25), new Obstacle(650, 550, 25, 25), new Obstacle(800, 500, 25, 25), new Obstacle(950, 450, 25, 25), new Obstacle(1100, 400, 25, 25)]
},
{
	physics: [new Physics({ restitution: 0.01 })],
	player: [new Player({ position: { x: 100, y: 110 } })],
	obstacles: [new Obstacle(0, 100, 100, 100), new Obstacle(200, 200, 150, 50), new Obstacle(400, 300, 100, 50), new Obstacle(600, 400, 200, 50), new Obstacle(800, 250, 50, 200)]
},
{
	physics: [new Physics({ restitution: 0.01 })],
	player: [new Player({ position: { x: 100, y: 110 } })],
	obstacles: [new Obstacle(50, 200, 100, 100), new Obstacle(250, 300, 150, 50), new Obstacle(450, 150, 200, 200), new Obstacle(700, 400, 50, 50), new Obstacle(850, 500, 150, 50)]
},
{
	physics: [new Physics({ restitution: 0.01 })],
	player: [new Player({ position: { x: 100, y: 110 } })],
	obstacles: [new Obstacle(0, 100, 100, 100), new Obstacle(150, 200, 100, 50), new Obstacle(300, 300, 150, 50), new Obstacle(500, 250, 50, 200), new Obstacle(650, 400, 150, 50)]
},
]
