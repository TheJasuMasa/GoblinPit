extends CharacterBody2D

class_name Goblin

var entity_name: String
var health: int
var sprite: String

func _init(charName: String, sprite_path: String):
	entity_name = charName 
	health = 50
	sprite = sprite_path
	#var totemCollection: Array[Totem] = []
	#var currentTotems: Array[Totem] = []

func take_damage(amount: int):
	health -= amount
	print(entity_name, " took ", amount, " points of damage and has ", health, " points remaining")
	
# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass


