extends Resource

var totemName: String
var totemDescription:  String
var damageRange: Dictionary 

func _init(name: String, description: String, damage: Dictionary):
	totemName = name
	totemDescription = description
	damageRange = damage
	pass

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.
	
# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
