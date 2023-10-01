extends Control

class_name Totem 

var totem_name: String = "Different"
var totem_description: String = "Also Different to a degree"

# Called when the node enters the scene tree for the first time.
func _ready():
	%Name.text = totem_name
	%Description.text = totem_description


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
