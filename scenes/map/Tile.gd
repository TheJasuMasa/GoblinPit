extends Node

class_name Tile

var position: Vector2
var zHeight: int
var contains = null

func _init(pos:Vector2, height:int, content):
	position = pos
	zHeight = height
	contains = content
