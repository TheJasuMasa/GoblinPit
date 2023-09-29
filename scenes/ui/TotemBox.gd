extends HBoxContainer

var packedTotemSCN = preload("res://scenes/entities/totems/Totem.tscn")

func add_totem_child():
	add_child(packedTotemSCN.instantiate())

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
