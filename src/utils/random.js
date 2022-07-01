export function getRandomIndex(array) {
  let random = Math.floor(Math.random() * array.length);
  return random;
}

export function getRandomValue(factor) {
  return Math.floor(Math.random() * factor) + 1;
}

