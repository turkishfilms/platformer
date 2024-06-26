let levelData = [
	{
	physics: [new Physics()],
	player: [new Player({ lives:3,color: { r: 0, g: 255, b: 0, a: 255 }, position: { x: 50, y: 50 }, options: { restitution: 0, inertia: Infinity} })],
	obstacles: [
		new Obstacle({ x:10,y: 200,w: 150,h: 50,sprite:"clay",isDisappearing:true, isEndBlock:true }), 
		new Obstacle({ x:250,y: 350,w: 200,h: 50,sprite:"dark" }), 
		new Obstacle({ x:475,y: 100,w: 50,h: 225,sprite:"dark" }),
		new Obstacle({ x:75,y: 475,w: 50,h: 25,sprite:"dark" }), 
		new Obstacle({ x:250,y: 575,w: 50,h: 25,sprite:"dark" }), 
		new Obstacle({ x:450,y: 550,w: 100,h: 25,sprite:"dark" }), 
		new Obstacle({ x:650,y: 550,w: 25,h: 25,sprite:"dark" }), 
		new Obstacle({ x:800,y: 500,w: 25,h: 25,sprite:"dark" }), 
		new Obstacle({ x:950,y: 450,w: 25,h: 25,sprite:"dark" }), 
		new Obstacle({ x:1100,y: 400,w: 25,h: 25,sprite:"gemWhite", isEndBlock:true  })],
	redraw:true,
	backdrop: "clay"
},
{
	physics: [new Physics({ restitution: 0.01 })],
	player: [new Player({ lives:3,color: { r: 0, g: 255, b: 0, a: 255 }, options: { restitution: 0, inertia: Infinity } })],
	obstacles: [
		new Obstacle({ x:0,y: 100,w: 100,h: 100,sprite:"cryskull" }),
		new Obstacle({ x:200,y: 200,w: 150,h: 50,sprite:"cryskull" }),
		new Obstacle({ x:50,y: 250,w: 150,h: 50,sprite:"cryskull" }),
		new Obstacle({ x:400,y: 300,w: 100,h: 50,sprite:"cryskull",isDisappearing:true }),
		new Obstacle({ x:600,y: 400,w: 200,h: 50,sprite:"cryskull",isDisappearing:true }),
		new Obstacle({ x:800,y: 120,w: 50,h: 200,sprite:"cryskull" }),
		new Obstacle({ x:980,y: 270,w: 25,h:25,sprite:"gemWhite", isEndBlock:true })]
,
	redraw:true,
	backdrop: "underWaterAbyss"
},
{
	physics: [
		new Physics({ restitution: 0.01 })],
	player: [
		new Player({ color: { r: 0, g: 255, b: 0, a: 255 }, options: { restitution: 0, inertia: Infinity } })],
	obstacles: [
		new Obstacle({ x:50,y: 200,w: 100,h: 100,sprite:"cryskull" }),
		new Obstacle({ x:250,y: 300,w: 150,h: 50,sprite:"cryskull" }),
		new Obstacle({ x:100,y: 300,w: 150,h: 50,sprite:"cryskull" }),
		new Obstacle({ x:450,y: 150,w: 200,h: 200,sprite:"cryskull" }),
		new Obstacle({ x:700,y: 400,w: 50,h: 50,sprite:"cryskull", isDisappearing:true }),
		new Obstacle({ x:850,y: 500,w: 150,h: 50,sprite:"gemWhite",isDisappearing:true}),
		new Obstacle({ x:875,y: 500,w: 10,h: 10,sprite:"gemWhite",isEndBlock:true })
	],

	redraw:true,
	backdrop: "crypt1"
},
{//4
	physics: [
		new Physics({ restitution: 0.01 })],
	player: [
		new Player({ position:{y:50,x:100}, color: { r: 0, g: 255, b: 0, a: 255 }, options: { restitution: 0, inertia: Infinity } })],
	obstacles: [
		new Obstacle({ x:0,y: 100,w: 100,h: 100,sprite:"cryskull" }),
		new Obstacle({ x:150,y: 200,w: 100,h: 50,sprite:"cryskull" }),
		new Obstacle({ x:300,y: 300,w: 150,h: 50,sprite:"cryskull" }),
		new Obstacle({ x:500,y: 250,w: 50,h: 200,sprite:"cryskull",isDisappearing:true }),
		new Obstacle({ x:650,y: 400,w: 10, h: 10,sprite:"gemWhite"}),
		new Obstacle({ x:650,y: 400,w: 25, h: 25,sprite:"gemWhite",isEndBlock:true })
	],

	redraw:true,
	backdrop: "crypt2"
},
{
	physics: [
		new Physics({ restitution: 0.01 })],
	player: [new Player({ color: { r: 0, g: 255, b: 0, a: 255 }, lives: 1, position: { x: 100, y: 300 }, options: { restitution: 0, inertia: Infinity } })],
	obstacles: [
		new Obstacle({ x:100,y: 400,w: 125,h: 50,sprite:"cryskull" }),
		new Obstacle({ x:325,y: 575,w: 10,h: 10,sprite:"cryskull" }),
		new Obstacle({ x:450,y: 500,w: 10,h: 10,sprite:"cryskull" }),
		new Obstacle({ x:575,y: 575,w: 10,h: 10,sprite:"cryskull" }),
		new Obstacle({ x:750,y: 475,w: 10,h: 10,sprite:"cryskull" }),
		new Obstacle({ x:1150,y: 475,w: 10,h: 10,sprite:"gemWhite",isDisappearing:true, isEndBlock:true })],
	redraw:true,
	backdrop: "crypt3"
}
]
