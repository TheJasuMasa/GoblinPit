import { getRandomIndex } from "../utils/random";

export function generateName(race) {
  if (race == "goblin") {
    let firstNameCompounds = [
      "Blat",
      "Bug",
      "Bok",
      "Cus",
      "Cram",
      "Dag",
      "Dan",
      "Dog",
      "Flea",
      "Flank",
      "Flax",
      "Flunk",
      "Gak",
      "Gax",
      "Gorb",
      "Gort",
      "Grah",
      "Greeb",
      "Greeg",
      "Grub",
      "Grum",
      "Lok",
      "Luk",
      "Plort",
      "Rub",
      "Sag",
      "Spak",
      "Splat",
      "Tug",
      "Tuk",
      "Wab",
      "Zab",
      "Zap",
      "Zax",
      "Zeeb",
      "Zig",
      "Zorb",
      "Zort",
    ];
    let occupationNoun = [
      "Animal",
      "Bag",
      "Barrel",
      "Beast",
      "Bug",
      "Cat",
      "Club",
      "Choppah",
      "Cobble",
      "Dark",
      "Dirt",
      "Dog",
      "Foot",
      "Grease",
      "Grub",
      "Grunge",
      "Insect",
      "Knob",
      "Midge",
      "Mother",
      "Mud",
      "Mustard",
      "Pee",
      "Piss",
      "Poo",
      "Pot",
      "Sack",
      "Sad",
      "Seat",
      "Shovel",
      "Soup",
      "Sock",
      "Stew",
      "Sun",
      "Table",
      "Toilet",
      "Turd",
    ];
    let rearVerb = [
      "Bagger",
      "Banger",
      "Bearer",
      "Burner",
      "Carrier",
      "Chaser",
      "Chewer",
      "Chopper",
      "Cleaner",
      "Cobbler",
      "Delver",
      "Dropper",
      "Eater",
      "Gaper",
      "Gazer",
      "Gouger",
      "Grabber",
      "Grungler",
      "Guzzler",
      "Hugger",
      "Lover",
      "Muncher",
      "Mutilator",
      "Pincher",
      "Polisher",
      "Puncher",
      "Sagger",
      "Seperator",
      "Singer",
      "Slapper",
      "Spreader",
      "Shoveler",
    ];
    let nameStructureArray = [
      "first",
      "firstfirst",
      "first noun",
      "first nounverb",
      "firstfirst noun",
      "firstfirst nounverb",
    ];
    let nameStructure = nameStructureArray[getRandomIndex(nameStructureArray)];

    if (nameStructure == "first") {
      let name = firstNameCompounds[getRandomIndex(firstNameCompounds)];
      console.log(name);
      return name;
    } else if (nameStructure == "firstfirst") {
      let name =
        firstNameCompounds[getRandomIndex(firstNameCompounds)] +
        firstNameCompounds[getRandomIndex(firstNameCompounds)].toLowerCase();
      console.log(name);
      return name;
    } else if (nameStructure == "firstfirst noun") {
      let name =
        firstNameCompounds[getRandomIndex(firstNameCompounds)] +
        firstNameCompounds[getRandomIndex(firstNameCompounds)].toLowerCase() +
        " " +
        occupationNoun[getRandomIndex(occupationNoun)];
      console.log(name);
      return name;
    } else if (nameStructure == "firstfirst nounverb") {
      let name =
        firstNameCompounds[getRandomIndex(firstNameCompounds)] +
        firstNameCompounds[getRandomIndex(firstNameCompounds)].toLowerCase() +
        " " +
        occupationNoun[getRandomIndex(occupationNoun)] +
        rearVerb[getRandomIndex(rearVerb)].toLowerCase();
      console.log(name);
      return name;
    } else if (nameStructure == "first nounverb") {
      let name =
        firstNameCompounds[getRandomIndex(firstNameCompounds)] +
        " " +
        occupationNoun[getRandomIndex(occupationNoun)] +
        rearVerb[getRandomIndex(rearVerb)].toLowerCase();
      console.log(name);
      return name;
    } else if (nameStructure == "first noun") {
      let name =
        firstNameCompounds[getRandomIndex(firstNameCompounds)] +
        " " +
        occupationNoun[getRandomIndex(occupationNoun)];
      console.log(name);
      return name;
    } else {
      console.log("Failure");
    }
  }
  // else if (race == ork){

  // }
  // else if (race == gremlin){

  // }
  // else if (race == hobgoblin){

  // }
  // else if (race == bugbear){

  // }
  // else if (race == ogre){

  // }
  // else if (race == troll){

  // }
}
