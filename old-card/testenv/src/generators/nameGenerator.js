import { getRandomIndex } from "../utils/random";
import { nameDefs } from "./nameDefs";
import { makeUppercase } from "../utils/makeUppercase";

//Generate a random name from an array of names
// I use the word 'nomen' as to not conflict with the commonly used 'name' in programming
export const generateNomen = (arr) => {
  return arr[getRandomIndex(arr)];
};

//Generate any combination of names given an array of patterns (specified in namedefs)
//An anthroponym refers to a single unit of a full name i.e. first name, middle name, title etc...
export const generateFullNomen = (raceNomenDef) => {
  const nomenPattern = generateNomen(raceNomenDef.nameStructures);
  let fullNomen = nomenPattern.reduce((acc, i) => {
    if (i - 1 < 0) {
      return acc + " ";
    } else {
      const anthroponym = Object.values(raceNomenDef.anthroponyms[i - 1])[0];
      return acc + generateNomen(anthroponym);
    }
  }, "");
  return makeUppercase(fullNomen);
};

export function generateName(race) {
  switch (race) {
    case "goblin":
      return generateFullNomen(nameDefs.goblin);
    case "ork":
      return generateFullNomen(nameDefs.ork);
    case "gremlin":
      return generateFullNomen(nameDefs.gremlin);
    case "hobgoblin":
      return generateFullNomen(nameDefs.hobgoblin);
    case "bugbear":
      return generateFullNomen(nameDefs.bugbear);
    case "ogre":
      return generateFullNomen(nameDefs.ogre);
    case "troll":
      return generateFullNomen(nameDefs.troll);
  }

  //----Beware all ye who enter The UnderSpaghet---//

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

// let nameStructure =
//   nameStructureArray[getRandomIndex(goblinNames.nameStructureArray)];

// if (nameStructure == "first") {
//   let name = firstNameCompounds[getRandomIndex(firstNameCompounds)];
//   console.log(name);
//   return name;
// } else if (nameStructure == "firstfirst") {
//   let name =
//     firstNameCompounds[getRandomIndex(firstNameCompounds)] +
//     firstNameCompounds[getRandomIndex(firstNameCompounds)].toLowerCase();
//   console.log(name);
//   return name;
// } else if (nameStructure == "firstfirst noun") {
//   let name =
//     firstNameCompounds[getRandomIndex(firstNameCompounds)] +
//     firstNameCompounds[getRandomIndex(firstNameCompounds)].toLowerCase() +
//     " " +
//     occupationNoun[getRandomIndex(occupationNoun)];
//   console.log(name);
//   return name;
// } else if (nameStructure == "firstfirst nounverb") {
//   let name =
//     firstNameCompounds[getRandomIndex(firstNameCompounds)] +
//     firstNameCompounds[getRandomIndex(firstNameCompounds)].toLowerCase() +
//     " " +
//     occupationNoun[getRandomIndex(occupationNoun)] +
//     rearVerb[getRandomIndex(rearVerb)].toLowerCase();
//   console.log(name);
//   return name;
// } else if (nameStructure == "first nounverb") {
//   let name =
//     firstNameCompounds[getRandomIndex(firstNameCompounds)] +
//     " " +
//     occupationNoun[getRandomIndex(occupationNoun)] +
//     rearVerb[getRandomIndex(rearVerb)].toLowerCase();
//   console.log(name);
//   return name;
// } else if (nameStructure == "first noun") {
//   let name =
//     firstNameCompounds[getRandomIndex(firstNameCompounds)] +
//     " " +
//     occupationNoun[getRandomIndex(occupationNoun)];
//   console.log(name);
//   return name;
// } else {
//   console.log("Failure");
// }
