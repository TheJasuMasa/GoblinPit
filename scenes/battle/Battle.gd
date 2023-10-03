extends Node2D
class_name Battle_Control

var currentTurn: int
var playerOne: Goblin
var playerTwo: Goblin
var currentPlayer: Goblin

#Compact the battlemap scenene in compose it here
#Figure out how sprites are placed

#Suuuuper basic turn counter
func end_turn():
	currentTurn += 1
	if currentPlayer == playerOne:
		currentPlayer = playerTwo
	if currentPlayer == playerTwo:
		currentPlayer = playerOne
	

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
