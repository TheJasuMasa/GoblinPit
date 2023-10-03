extends Control

var turn_format = "Turn: {turn}"
var current_player_format = "Current Player: {player}"

var turn_label = "Turn: 1"
var current_player = "Greeblax"


func update_UI_data(player: String, turn: String):
	%CurrentPlayer.text = current_player_format.format({"player": player})
	%CurrentTurn.text = turn_format.format({"turn": turn})
