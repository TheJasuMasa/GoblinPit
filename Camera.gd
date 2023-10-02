extends Camera2D

const ZOOMRATE = 8.0
const MINZOOM = 0.1
const MAXZOOM = 2.0
const ZOOMINCREMENT = 0.1

var targetZoom = 1.0



func _unhandled_input(event: InputEvent):
	if event is InputEventMouseMotion:
		if event.button_mask == MOUSE_BUTTON_MASK_MIDDLE:
			position -= event.relative * zoom
	if event is InputEventMouseButton:
		if event.button_index == MOUSE_BUTTON_WHEEL_UP:
			zoomOut()
		if event.button_index == MOUSE_BUTTON_WHEEL_DOWN:
			zoomIn()
			
			
func zoomOut():
	targetZoom = max(targetZoom + ZOOMINCREMENT, MAXZOOM)
	set_physics_process(true)
	
func zoomIn():
	targetZoom = max(targetZoom - ZOOMINCREMENT, MINZOOM)
	set_physics_process(true)
	
func _physics_process(delta):
	zoom = lerp(zoom, targetZoom * Vector2.ONE, ZOOMRATE * delta)
	set_physics_process(not is_equal_approx(zoom.x, targetZoom))
	
# Called when the node enters the scene tree for the first time.
func _ready():
	print('dick') # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
