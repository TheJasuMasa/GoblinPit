extends Resource
class_name Totem_Claw

var name = "Claw"
var description = "Swipe at your foe with gnarled filth-encrusted claws"
var target = "single-target"
var damageMin = 0
var damageMax = 4

func rollDamage(): 
	var rng = RandomNumberGenerator.new()
	return randf_range(damageMin, damageMax)

func attack(attacker: Goblin, target: Goblin):
	var dmg = rollDamage()
	dmg = int(round(dmg))
	print(attacker.entity_name, " claws ", target.entity_name, " for ", dmg, " damage!")
	target.take_damage(dmg)
