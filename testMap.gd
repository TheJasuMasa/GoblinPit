extends Node2D

# Packs the scene into a variable
var testGobboScene = preload("res://scenes/entities/goblins/test_gobbo.tscn")
var validTileMarker = preload("res://scenes/ui/green_tile_marker.tscn")

var gobboList = []
var neighborTiles = []
var selected = false

#JUSITN DOING STUFF HERE = IGNORE
var greeblax = Goblin.new("Greeblax")
var grooblox = Goblin.new("Grooblox")
var claw = Totem_Claw.new()
#END JUSTIN DOING STUFF HERE


# Called when the node enters the scene tree for the first time.
func _ready():
	
	# How one can access custom data on a tile.
	# print($TileMap.get_cell_tile_data(0,$TileMap.get_used_cells(0)[0]).get_custom_data('zHeight'))
	
	# Creates a node that is an instance of the packed scene
	var testGobbo1 = testGobboScene.instantiate()
	var testGobbo2 = testGobboScene.instantiate()
	gobboList = [testGobbo1, testGobbo2]
	
	
	for i in range(0,gobboList.size()):
		# Adds the scenes as children of the main node
		add_child(gobboList[i])
		# Harcode position
		gobboList[i].position = $TileMap.map_to_local(Vector2(10+(i*2),10))
		# Uses a signal to detect when the mouse enters/exits the sprite
		gobboList[i].mouse_entered.connect(drawOutline.bind(gobboList[i].get_node('sprite')))
		gobboList[i].mouse_exited.connect(removeOutline.bind(gobboList[i].get_node('sprite')))
		# Uses a singal to detect when the mouse clicks on a sprite
		gobboList[i].input_event.connect(_on_character_body_2d_input_event)
		
		
		
		# Very verbose, but gets the custom data of a given tile by coordinate
		#$TileMap.get_cell_tile_data(0,$TileMap.local_to_map(gobboList[i].position)).get_custom_data('contains') = gobboList[i]
		#print($TileMap.get_cell_tile_data(0,$TileMap.local_to_map(gobboList[i].position)).get_custom_data('contains'))
		
		
	# Flip for effect and to learn how to get children of an instance.
	# Affects offset due to the sprite having free space so that needs to be accounted for.
	testGobbo2.get_node('sprite').flip_h = true
	
	# Changing the second gobbo's sprite cause why not.
	testGobbo2.get_node('sprite').texture = load("res://Old Assets/sprites/gobboTest4.png")
	
	#iterateLayers(Vector2(10,10))
	
	# Draws outlines using shaders
func drawOutline(sprite):
	sprite.material = ShaderMaterial.new()
	sprite.material.shader = load("res://shaders/test_gobbo.gdshader")
func removeOutline(sprite):
	sprite.material.shader = null
	sprite.material = null
	


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	# Gets the tile coordinates from mouse position
	# print($TileMap.local_to_map(get_global_mouse_position()))
	# print(get_global_mouse_position())
	
	# Snaps mouse cursor graphic to tile positions
	#$mouseCursor.position = $TileMap.map_to_local($TileMap.local_to_map(get_global_mouse_position()))
	iterateLayers($TileMap.local_to_map(get_global_mouse_position()))	
	
	if Input.is_action_just_pressed("rightClick") and selected == true:
		clearNodes(get_tree().get_nodes_in_group('markers'))
		neighborTiles = []
		selected = false


# Iterate through every layer of a given coordinate and in this case currently gets the zHeight of every layer
# Snaps the cursor to the cell under a mouse and increased the height based on the layer's zHeight data
func iterateLayers(tileCoords):
	for layer in range(0,$TileMap.get_layers_count()):
		if $TileMap.get_cell_tile_data(layer, tileCoords) != null:
			$mouseCursor.position.x = $TileMap.map_to_local($TileMap.local_to_map(get_global_mouse_position())).x
			$mouseCursor.position.y = $TileMap.map_to_local($TileMap.local_to_map(get_global_mouse_position())).y - (8*$TileMap.get_cell_tile_data(layer, tileCoords).get_custom_data('zHeight'))

func _on_character_body_2d_input_event(viewport, event, shape_idx):
	if event is InputEventMouseButton and selected == false:
		if event.button_index == MOUSE_BUTTON_LEFT and event.pressed:
			selected = true
			getGobbo($TileMap.local_to_map(event.position))

func getGobbo(tile):
	for gobbo in gobboList:
		if $TileMap.local_to_map(gobbo.position) == tile:
			for i in range (0,4):
				neighborTiles.append(validTileMarker.instantiate())
				add_child(neighborTiles[i])
				neighborTiles[i].add_to_group('markers')
				neighborTiles[i].position = $TileMap.map_to_local($TileMap.get_surrounding_cells($TileMap.local_to_map(gobbo.position))[i])


func clearNodes(nodeArray):
	for node in nodeArray:
		node.free()
