import { getRandomIndex } from "./utils/random";

//function getRandomIndex(array){
//    let random = Math.floor(Math.random()*array.length)
//    return random
//}

export function generateName(race){
    if (race == 'goblin'){

        let firstNameCompounds = [
            'Blat','Bug','Cus','Dag','Dog','Flea','Flax','Gak','Gax','Greeb','Grum','Plort',
            'Spak','Tug','Zab','Zap','Zax','Zeeb','Zig','Zorb','Zort',];
        let occupationNoun = [
            'Animal','Bag','Bug','Cat','Choppah','Cobble','Dirt','Dog','Grease','Grunge','Pee',
            'Piss','Poo','Seat','Shovel','Table','Toilet','Turd'];
        let rearVerb = [
            'Bagger','Burner','Chaser','Chopper','Cleaner','Eater','Gaper','Gouger','Grabber','Grungler',
            'Guzzler','Lover','Muncher','Polisher','Puncher','Seperator','Spreader','Shoveler'];
        let nameStructureArray = [
            'first','firstfirst','first noun','first nounverb','firstfirst noun', 'firstfirst nounverb']
        let nameStructure = nameStructureArray[getRandomIndex(nameStructureArray)]

        if (nameStructure == 'first'){
            let name = firstNameCompounds[getRandomIndex(firstNameCompounds)]
            console.log(name)
            return name
        }
        else if (nameStructure == 'firstfirst'){
            let name = firstNameCompounds[getRandomIndex(firstNameCompounds)] + firstNameCompounds[getRandomIndex(firstNameCompounds)].toLowerCase()
            console.log(name)
            return name
        }
        else if (nameStructure == 'firstfirst noun'){
            let name = firstNameCompounds[getRandomIndex(firstNameCompounds)] + firstNameCompounds[getRandomIndex(firstNameCompounds)].toLowerCase() + ' ' + occupationNoun[getRandomIndex(occupationNoun)]
            console.log(name)
            return name
        }
        else if (nameStructure == 'firstfirst nounverb'){
            let name = firstNameCompounds[getRandomIndex(firstNameCompounds)] + firstNameCompounds[getRandomIndex(firstNameCompounds)].toLowerCase() + ' ' + occupationNoun[getRandomIndex(occupationNoun)] + rearVerb[getRandomIndex(rearVerb)].toLowerCase()
            console.log(name)
            return name
        }
        else if (nameStructure == 'first nounverb'){
            let name = firstNameCompounds[getRandomIndex(firstNameCompounds)] + ' ' + occupationNoun[getRandomIndex(occupationNoun)] + rearVerb[getRandomIndex(rearVerb)].toLowerCase()
            console.log(name)
            return name
        }
        else if (nameStructure == 'first noun'){
            let name = firstNameCompounds[getRandomIndex(firstNameCompounds)] + ' ' + occupationNoun[getRandomIndex(occupationNoun)]
            console.log(name)
            return name
        }
        else {
            console.log('Failure')
        }
       
    };
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

