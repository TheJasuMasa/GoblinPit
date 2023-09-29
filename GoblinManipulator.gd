extends Node2D

var yVelocity = 0
var xVelocity = 0
var window = DisplayServer.window_get_size()

var windowX = window[0]
var windowY = window[1]
var collisionPadding = 10

var packedTotemBarScene = preload("res://scenes/ui/TotemBar.tscn")
var totemBar = packedTotemBarScene.instantiate()

# Called when the node enters the scene tree for the first time.
func _ready():
	var greeblax = Goblin.new("Greeblax") 
	add_child(totemBar)
	greeblax.take_damage(10)	
	

	print(windowX, windowY)
	
	

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	if Input.is_action_just_pressed("AddTotem"):
		totemBar.add_totem()
		
		
	if Input.is_action_pressed("VelociUp"):
		yVelocity -= .1
		
	if Input.is_action_pressed("VelociDown"):
		yVelocity += .1
		
	if Input.is_action_pressed("VelociLeft"):
		xVelocity -= .1		

	if Input.is_action_pressed("VelociRight"):
		xVelocity += .1
	
	
	if $Sprite2D.position.x > windowX - collisionPadding:
		$AudioStreamPlayer2D.play()
		xVelocity = 0
		$Sprite2D.position.x -= collisionPadding
	
	if $Sprite2D.position.x < 0 + collisionPadding:
		$AudioStreamPlayer2D.play()
		xVelocity = 0
		$Sprite2D.position.x += collisionPadding

	if $Sprite2D.position.y >= windowY:
		$AudioStreamPlayer2D.play()
		yVelocity = 0
		$Sprite2D.position.y -= (collisionPadding)	
	
	if $Sprite2D.position.y <= 0:
		$AudioStreamPlayer2D.play()
		yVelocity = 0
		$Sprite2D.position.y += (collisionPadding)	
	
	$Sprite2D.position.x += xVelocity ;
	$Sprite2D.position.y  += yVelocity;
