const PLAYER_JUMP_SPEED = 5
const PLAYER_MOVE_SPEED = 5
const FLOOR_OFFSET = 10
const FLOOR_DEPTH = 50
const NUMBER_OF_SPIKES = 36
const compositeStructure = Matter.Composite.create({
	composites: [Matter.Composite.create(),
	Matter.Composite.create(),
	Matter.Composite.create()]
})
const NUMBER_OF_SUBCOMPS = 3
