/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/uuid/dist/esm-browser/regex.js":
/*!******************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/regex.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://testenv/../node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/rng.js":
/*!****************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/rng.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://testenv/../node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/stringify.js":
/*!**********************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/stringify.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"../node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://testenv/../node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/v4.js":
/*!***************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/v4.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"../node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"../node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://testenv/../node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "../node_modules/uuid/dist/esm-browser/validate.js":
/*!*********************************************************!*\
  !*** ../node_modules/uuid/dist/esm-browser/validate.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"../node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://testenv/../node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "../src/generators/morphotypeDefs.js":
/*!*******************************************!*\
  !*** ../src/generators/morphotypeDefs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"humanoid\": () => (/* binding */ humanoid)\n/* harmony export */ });\nconst humanoid = {\r\n  head: [\"neck\", \"lEye\", \"rEye\", \"nose\", \"jaw\", \"tongue\"],\r\n  lEye: [\"head\"],\r\n  rEye: [\"head\"],\r\n  nose: [\"head\"],\r\n  jaw: [\"head\"],\r\n  tongue: [\"head\"],\r\n  neck: [\"torso\"],\r\n  torso: [\"neck\", \"abdomen\", \"lArm\", \"rArm\"],\r\n  lArm: [\"torso\"],\r\n  rArm: [\"torso\"],\r\n  abdomen: [\"lLeg\", \"rLeg\"],\r\n  lLeg: [\"abdomen\"],\r\n  rLeg: [\"abdomen\"],\r\n};\r\n\n\n//# sourceURL=webpack://testenv/../src/generators/morphotypeDefs.js?");

/***/ }),

/***/ "../src/generators/nameDefs.js":
/*!*************************************!*\
  !*** ../src/generators/nameDefs.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"nameDefs\": () => (/* binding */ nameDefs)\n/* harmony export */ });\nconst nameDefs = {\r\n  goblin: {\r\n    anthroponyms: [\r\n      {\r\n        firstNameCompounds: [\r\n          \"Blat\",\r\n          \"Bug\",\r\n          \"Bok\",\r\n          \"Cus\",\r\n          \"Cram\",\r\n          \"Dag\",\r\n          \"Dan\",\r\n          \"Dog\",\r\n          \"Flea\",\r\n          \"Flank\",\r\n          \"Flax\",\r\n          \"Flunk\",\r\n          \"Gak\",\r\n          \"Gax\",\r\n          \"Gorb\",\r\n          \"Gort\",\r\n          \"Grah\",\r\n          \"Greeb\",\r\n          \"Greeg\",\r\n          \"Grub\",\r\n          \"Grum\",\r\n          \"Lok\",\r\n          \"Luk\",\r\n          \"Plort\",\r\n          \"Rub\",\r\n          \"Sag\",\r\n          \"Spak\",\r\n          \"Splat\",\r\n          \"Tug\",\r\n          \"Tuk\",\r\n          \"Wab\",\r\n          \"Zab\",\r\n          \"Zap\",\r\n          \"Zax\",\r\n          \"Zeeb\",\r\n          \"Zig\",\r\n          \"Zorb\",\r\n          \"Zort\",\r\n        ],\r\n      },\r\n      {\r\n        occupationNoun: [\r\n          \"Animal\",\r\n          \"Bag\",\r\n          \"Barrel\",\r\n          \"Beast\",\r\n          \"Bug\",\r\n          \"Cat\",\r\n          \"Club\",\r\n          \"Choppah\",\r\n          \"Cobble\",\r\n          \"Dark\",\r\n          \"Dirt\",\r\n          \"Dog\",\r\n          \"Foot\",\r\n          \"Grease\",\r\n          \"Grub\",\r\n          \"Grunge\",\r\n          \"Insect\",\r\n          \"Knob\",\r\n          \"Midge\",\r\n          \"Mother\",\r\n          \"Mud\",\r\n          \"Mustard\",\r\n          \"Pee\",\r\n          \"Piss\",\r\n          \"Poo\",\r\n          \"Pot\",\r\n          \"Sack\",\r\n          \"Sad\",\r\n          \"Seat\",\r\n          \"Shovel\",\r\n          \"Soup\",\r\n          \"Sock\",\r\n          \"Stew\",\r\n          \"Sun\",\r\n          \"Table\",\r\n          \"Toilet\",\r\n          \"Turd\",\r\n        ],\r\n      },\r\n      {\r\n        rearVerb: [\r\n          \"Bagger\",\r\n          \"Banger\",\r\n          \"Bearer\",\r\n          \"Burner\",\r\n          \"Carrier\",\r\n          \"Chaser\",\r\n          \"Chewer\",\r\n          \"Chopper\",\r\n          \"Cleaner\",\r\n          \"Cobbler\",\r\n          \"Delver\",\r\n          \"Dropper\",\r\n          \"Eater\",\r\n          \"Gaper\",\r\n          \"Gazer\",\r\n          \"Gouger\",\r\n          \"Grabber\",\r\n          \"Grungler\",\r\n          \"Guzzler\",\r\n          \"Hugger\",\r\n          \"Lover\",\r\n          \"Muncher\",\r\n          \"Mutilator\",\r\n          \"Pincher\",\r\n          \"Polisher\",\r\n          \"Puncher\",\r\n          \"Sagger\",\r\n          \"Seperator\",\r\n          \"Singer\",\r\n          \"Slapper\",\r\n          \"Spreader\",\r\n          \"Shoveler\",\r\n        ],\r\n      },\r\n    ],\r\n    nameStructures: [\r\n      [1],\r\n      [1, 1],\r\n      [1, 0, 2],\r\n      [1, 0, 2, 3],\r\n      [1, 1, 0, 2],\r\n      [1, 1, 0, 2, 3],\r\n    ],\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://testenv/../src/generators/nameDefs.js?");

/***/ }),

/***/ "../src/generators/nameGenerator.js":
/*!******************************************!*\
  !*** ../src/generators/nameGenerator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateFullNomen\": () => (/* binding */ generateFullNomen),\n/* harmony export */   \"generateName\": () => (/* binding */ generateName),\n/* harmony export */   \"generateNomen\": () => (/* binding */ generateNomen)\n/* harmony export */ });\n/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/random */ \"../src/utils/random.js\");\n/* harmony import */ var _nameDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nameDefs */ \"../src/generators/nameDefs.js\");\n/* harmony import */ var _utils_makeUppercase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/makeUppercase */ \"../src/utils/makeUppercase.js\");\n\r\n\r\n\r\n\r\n//Generate a random name from an array of names\r\n// I use the word 'nomen' as to not conflict with the commonly used 'name' in programming\r\nconst generateNomen = (arr) => {\r\n  return arr[(0,_utils_random__WEBPACK_IMPORTED_MODULE_0__.getRandomIndex)(arr)];\r\n};\r\n\r\n//Generate any combination of names given an array of patterns (specified in namedefs)\r\n//An anthroponym refers to a single unit of a full name i.e. first name, middle name, title etc...\r\nconst generateFullNomen = (raceNomenDef) => {\r\n  const nomenPattern = generateNomen(raceNomenDef.nameStructures);\r\n  let fullNomen = nomenPattern.reduce((acc, i) => {\r\n    if (i - 1 < 0) {\r\n      return acc + \" \";\r\n    } else {\r\n      const anthroponym = Object.values(raceNomenDef.anthroponyms[i - 1])[0];\r\n      return acc + generateNomen(anthroponym);\r\n    }\r\n  }, \"\");\r\n  return (0,_utils_makeUppercase__WEBPACK_IMPORTED_MODULE_2__.makeUppercase)(fullNomen);\r\n};\r\n\r\nfunction generateName(race) {\r\n  switch (race) {\r\n    case \"goblin\":\r\n      return generateFullNomen(_nameDefs__WEBPACK_IMPORTED_MODULE_1__.nameDefs.goblin);\r\n    case \"ork\":\r\n      return generateFullNomen(_nameDefs__WEBPACK_IMPORTED_MODULE_1__.nameDefs.ork);\r\n    case \"gremlin\":\r\n      return generateFullNomen(_nameDefs__WEBPACK_IMPORTED_MODULE_1__.nameDefs.gremlin);\r\n    case \"hobgoblin\":\r\n      return generateFullNomen(_nameDefs__WEBPACK_IMPORTED_MODULE_1__.nameDefs.hobgoblin);\r\n    case \"bugbear\":\r\n      return generateFullNomen(_nameDefs__WEBPACK_IMPORTED_MODULE_1__.nameDefs.bugbear);\r\n    case \"ogre\":\r\n      return generateFullNomen(_nameDefs__WEBPACK_IMPORTED_MODULE_1__.nameDefs.ogre);\r\n    case \"troll\":\r\n      return generateFullNomen(_nameDefs__WEBPACK_IMPORTED_MODULE_1__.nameDefs.troll);\r\n  }\r\n\r\n  //----Beware all ye who enter The UnderSpaghet---//\r\n\r\n  // else if (race == ork){\r\n\r\n  // }\r\n  // else if (race == gremlin){\r\n\r\n  // }\r\n  // else if (race == hobgoblin){\r\n\r\n  // }\r\n  // else if (race == bugbear){\r\n\r\n  // }\r\n  // else if (race == ogre){\r\n\r\n  // }\r\n  // else if (race == troll){\r\n\r\n  // }\r\n}\r\n\r\n// let nameStructure =\r\n//   nameStructureArray[getRandomIndex(goblinNames.nameStructureArray)];\r\n\r\n// if (nameStructure == \"first\") {\r\n//   let name = firstNameCompounds[getRandomIndex(firstNameCompounds)];\r\n//   console.log(name);\r\n//   return name;\r\n// } else if (nameStructure == \"firstfirst\") {\r\n//   let name =\r\n//     firstNameCompounds[getRandomIndex(firstNameCompounds)] +\r\n//     firstNameCompounds[getRandomIndex(firstNameCompounds)].toLowerCase();\r\n//   console.log(name);\r\n//   return name;\r\n// } else if (nameStructure == \"firstfirst noun\") {\r\n//   let name =\r\n//     firstNameCompounds[getRandomIndex(firstNameCompounds)] +\r\n//     firstNameCompounds[getRandomIndex(firstNameCompounds)].toLowerCase() +\r\n//     \" \" +\r\n//     occupationNoun[getRandomIndex(occupationNoun)];\r\n//   console.log(name);\r\n//   return name;\r\n// } else if (nameStructure == \"firstfirst nounverb\") {\r\n//   let name =\r\n//     firstNameCompounds[getRandomIndex(firstNameCompounds)] +\r\n//     firstNameCompounds[getRandomIndex(firstNameCompounds)].toLowerCase() +\r\n//     \" \" +\r\n//     occupationNoun[getRandomIndex(occupationNoun)] +\r\n//     rearVerb[getRandomIndex(rearVerb)].toLowerCase();\r\n//   console.log(name);\r\n//   return name;\r\n// } else if (nameStructure == \"first nounverb\") {\r\n//   let name =\r\n//     firstNameCompounds[getRandomIndex(firstNameCompounds)] +\r\n//     \" \" +\r\n//     occupationNoun[getRandomIndex(occupationNoun)] +\r\n//     rearVerb[getRandomIndex(rearVerb)].toLowerCase();\r\n//   console.log(name);\r\n//   return name;\r\n// } else if (nameStructure == \"first noun\") {\r\n//   let name =\r\n//     firstNameCompounds[getRandomIndex(firstNameCompounds)] +\r\n//     \" \" +\r\n//     occupationNoun[getRandomIndex(occupationNoun)];\r\n//   console.log(name);\r\n//   return name;\r\n// } else {\r\n//   console.log(\"Failure\");\r\n// }\r\n\n\n//# sourceURL=webpack://testenv/../src/generators/nameGenerator.js?");

/***/ }),

/***/ "../src/generators/statDefs.js":
/*!*************************************!*\
  !*** ../src/generators/statDefs.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"goblinStatDefs\": () => (/* binding */ goblinStatDefs)\n/* harmony export */ });\n//vl = value, vr = variance, mlt = multiplier, bs = bias, dp = dependenies\r\n\r\nconst goblinStatDefs = {\r\n  base: {\r\n    strength: { vl: 5, vr: 2, bs: 0 },\r\n    stamina: { vl: 5, vr: 2, bs: 0 },\r\n    stamina: { vl: 5, vr: 2, bs: 0 },\r\n    skill: { vl: 5, vr: 2, bs: 0 },\r\n    deftness: { vl: 5, vr: 2, bs: 0 },\r\n    toughness: { vl: 5, vr: 2, bs: 0 },\r\n    grit: { vl: 5, vr: 2, bs: 0 },\r\n  },\r\n  second: {\r\n    consciousness: { dp: [\"toughness\", \"stamina\"], mlt: 1.5 }, //Tgh/Stam\r\n    morale: { dp: [\"grit\", \"toughness\"], mlt: 1.5 }, //Grit/Tgh\r\n    blood: { dp: [\"toughness\", \"strength\", \"stamina\"], mlt: 1.5 }, //Tgh\r\n    fatigue: { dp: [\"grit\", \"stamina\"], mlt: 1.5 }, //Grit/Stam\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://testenv/../src/generators/statDefs.js?");

/***/ }),

/***/ "../src/pathDefs.js":
/*!**************************!*\
  !*** ../src/pathDefs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PATHS\": () => (/* binding */ PATHS)\n/* harmony export */ });\nconst PATHS = {\r\n  music: \"assetz/audio/music\",\r\n  sfx: \"assetz/audio/SFX\",\r\n  cinematic: \"assetz/cinematic\",\r\n  OLD: \"assetz/OLD\",\r\n  site: \"assetz/site\",\r\n  sprites: \"assetz/sprites\",\r\n  tiles: \"assetz/tiles\",\r\n  UI: \"assetz/UI\",\r\n};\r\n\n\n//# sourceURL=webpack://testenv/../src/pathDefs.js?");

/***/ }),

/***/ "../src/utils/makeUppercase.js":
/*!*************************************!*\
  !*** ../src/utils/makeUppercase.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"makeUppercase\": () => (/* binding */ makeUppercase)\n/* harmony export */ });\nconst makeUppercase = (targetString) => {\r\n  const lowString = targetString.toLowerCase();\r\n  const splitString = lowString.split(\" \");\r\n  return splitString.reduce((acc, targetString) => {\r\n    if (acc) {\r\n      const upperString =\r\n        targetString.charAt(0).toUpperCase() + targetString.slice(1);\r\n      return acc + \" \" + upperString;\r\n    } else {\r\n      return targetString.charAt(0).toUpperCase() + targetString.slice(1);\r\n    }\r\n  }, \"\");\r\n};\r\n\n\n//# sourceURL=webpack://testenv/../src/utils/makeUppercase.js?");

/***/ }),

/***/ "../src/utils/random.js":
/*!******************************!*\
  !*** ../src/utils/random.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomIndex\": () => (/* binding */ getRandomIndex)\n/* harmony export */ });\nfunction getRandomIndex(array){\r\n    let random = Math.floor(Math.random()*array.length)\r\n    return random\r\n}\n\n//# sourceURL=webpack://testenv/../src/utils/random.js?");

/***/ }),

/***/ "./src/generators/Entity.js":
/*!**********************************!*\
  !*** ./src/generators/Entity.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Entity\": () => (/* binding */ Entity)\n/* harmony export */ });\n/* harmony import */ var _Stats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stats */ \"./src/generators/Stats.js\");\n/* harmony import */ var _utils_dataManip_Grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/dataManip/Grid */ \"./src/utils/dataManip/Grid.js\");\n/* harmony import */ var _Sprites__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sprites */ \"./src/generators/Sprites.js\");\n/* harmony import */ var _src_generators_morphotypeDefs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../src/generators/morphotypeDefs */ \"../src/generators/morphotypeDefs.js\");\n/* harmony import */ var _src_generators_statDefs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/generators/statDefs */ \"../src/generators/statDefs.js\");\n/* harmony import */ var _src_generators_nameGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../src/generators/nameGenerator */ \"../src/generators/nameGenerator.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! uuid */ \"../node_modules/uuid/dist/esm-browser/v4.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//Find a more succinct way to handle imports for entity generation\r\n\r\nclass Entity {\r\n  constructor(race) {\r\n    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n    this.race = race;\r\n    this.name = null;\r\n    this.stats = null;\r\n    this.sprite = null;\r\n    this.morphotype = null;\r\n\r\n    this.initializeEntity();\r\n  }\r\n\r\n  initializeEntity() {\r\n    this.morphotype = new _utils_dataManip_Grid__WEBPACK_IMPORTED_MODULE_1__.Graph(_src_generators_morphotypeDefs__WEBPACK_IMPORTED_MODULE_3__.humanoid);\r\n    this.name = (0,_src_generators_nameGenerator__WEBPACK_IMPORTED_MODULE_5__.generateName)(this.race);\r\n    this.stats = new _Stats__WEBPACK_IMPORTED_MODULE_0__.Stats(_src_generators_statDefs__WEBPACK_IMPORTED_MODULE_4__.goblinStatDefs);\r\n    this.sprite = new _Sprites__WEBPACK_IMPORTED_MODULE_2__.Sprites(this)\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://testenv/./src/generators/Entity.js?");

/***/ }),

/***/ "./src/generators/Sprites.js":
/*!***********************************!*\
  !*** ./src/generators/Sprites.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sprites\": () => (/* binding */ Sprites)\n/* harmony export */ });\n/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/random */ \"./src/utils/random.js\");\n/* harmony import */ var _spriteDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spriteDefs */ \"./src/generators/spriteDefs.js\");\n\r\n\r\n\r\nclass Sprites{\r\n    constructor(entity){ \r\n        this.entityId = entity.id\r\n        this.headPath = null\r\n        this.bodyPath = null\r\n        \r\n        this.headKey =  \"headSp\" + entity.id\r\n        this.bodyKey =  \"bodySp\" + entity.id\r\n        this.headAnimKey = \"headAnim\" + entity.id\r\n        this.bodyAnimKey = \"bodyAnim\" + entity.id\r\n\r\n        this.spriteList = null\r\n        this.animList = null\r\n\r\n        this.animFrames = _spriteDefs__WEBPACK_IMPORTED_MODULE_1__[entity.race].animFrames\r\n        this.animType = _spriteDefs__WEBPACK_IMPORTED_MODULE_1__[entity.race].animFrames[\"idle\"]\r\n        \r\n        this.initializePaths()\r\n    }\r\n\r\n    setRandomPath(obj, type){\r\n        this[obj] = _spriteDefs__WEBPACK_IMPORTED_MODULE_1__.goblin[type][(0,_utils_random__WEBPACK_IMPORTED_MODULE_0__.getRandomIndex)(_spriteDefs__WEBPACK_IMPORTED_MODULE_1__.goblin[type])]\r\n    }   \r\n\r\n    initializePaths(){\r\n        this.setRandomPath(\"headPath\", \"headTypes\")\r\n        this.setRandomPath(\"bodyPath\", \"bodyTypes\")\r\n    }\r\n\r\n    setSpritesheet(sceneObj,key,path,frameWidth,frameHeight){\r\n        sceneObj.load.spritesheet(key, path, {\r\n            frameWidth: frameWidth,\r\n            frameHeight: frameHeight,\r\n            endFrame: 4,\r\n            margin: 1,\r\n            spacing: 1,\r\n          });\r\n    }\r\n}\r\n    // createAnim(sceneObj,animKey,pathKey, animType){\r\n    //     let anim = {\r\n    //         key: animKey,\r\n    //         frames: sceneObj.anims.generateFrameNumbers(pathKey, {\r\n    //             start: this.animFrames[animType][0],\r\n    //             end: this.animFrames[animType][1],\r\n    //         }),\r\n    //         frameRate: 3,\r\n    //         repeat: -1,\r\n    //     }\r\n    //     sceneObj.anims.create(anim)\r\n    // }\r\n\r\n\r\n    // setAnimType(animType){\r\n    //     this.animType = pathNames[entity.race].animFrames[animType]\r\n    // }\r\n\r\n// ANIMATION FUNCTION //\r\n// animIdle(newKey, spritesheetKey, back) {\r\n//     if (back === false){\r\n//       let idle = {\r\n//         key: newKey,\r\n//         frames: this.anims.generateFrameNumbers(spritesheetKey, {\r\n//           start: 0,\r\n//           end: 1,\r\n//         }),\r\n//         frameRate: 3,\r\n//         repeat: -1,\r\n//       };\r\n//       this.anims.create(idle);\r\n//     }\r\n//     if (back === true){\r\n//       let idle = {\r\n//         key: newKey,\r\n//         frames: this.anims.generateFrameNumbers(spritesheetKey, {\r\n//           start: 2,\r\n//           end: 3,\r\n//         }),\r\n//         frameRate: 3,\r\n//         repeat: -1,\r\n//       };\r\n//       this.anims.create(idle);\r\n//     }\r\n//   }\r\n\r\n//   // CREATE STAGE //\r\n//  this.chungBody = this.add\r\n//  .sprite(0, 0, \"gobBody1\")\r\n//  .play(\"gobBody1Anim\")\r\n//  .setScale(1.25)\r\n//  .setInteractive()\r\n//  .setDepth(1);\r\n\r\n// this.chungHead = this.add\r\n//  .sprite(0, 0, \"gobHead1\")\r\n//  .play(\"gobHead1Anim\")\r\n//  .setScale(1.25)\r\n//  .setInteractive()\r\n//  .setDepth(1);\r\n\r\n \r\n\r\n//   this.chung.spritesList = [this.chungBody, this.chungHead]\r\n//   this.grung.spritesList = [this.grungBody, this.grungHead]\r\n\r\n//   // Putting Gobbo sprites in an array to put into a container.\r\n//   this.sprites = [this.chungHead, this.chungBody];\r\n  \r\n//   // Containe is useful because the outline plugin will work correctly on it. And other stuff, I dunno.\r\n//   this.containerboi = this.add.container();\r\n//   this.containerboi.add(this.sprites);\r\n//   this.containerboi.setDepth(1);\r\n\r\n//   // Combines both the body and head sprites into one object called 'stitch'\r\n//   // Doesn't need an x,y set here as it's constantly updated, second set of\r\n//   // nums is width and height of bounding box for things like selection. Is this needed?\r\n//   this.stitch = this.add.renderTexture(0, 0, 32, 42).setInteractive();\r\n//   // Draws the two sprites as one at location\r\n//   this.stitch.draw(\r\n//     [this.chungBody, this.chungHead],\r\n//     this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).x,\r\n//     this.currentMap.tileToWorldXY(this.chung.xPos, this.chung.yPos).y - 16\r\n//   );\n\n//# sourceURL=webpack://testenv/./src/generators/Sprites.js?");

/***/ }),

/***/ "./src/generators/Stats.js":
/*!*********************************!*\
  !*** ./src/generators/Stats.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Stats\": () => (/* binding */ Stats)\n/* harmony export */ });\n/* harmony import */ var _utils_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/random */ \"./src/utils/random.js\");\n\r\n\r\nclass Stats {\r\n  constructor(statDefs) {\r\n    this.strength = 0;\r\n    this.stamina = 0;\r\n    this.skill = 0;\r\n    this.deftness = 0;\r\n    this.toughness = 0;\r\n    this.grit = 0;\r\n    this.consciousness = 0;\r\n    this.morale = 0;\r\n    this.blood = 0;\r\n    this.fatigue = 0;\r\n\r\n    this.initializeBaseStats(statDefs);\r\n    this.initializeSecondaryStats(statDefs);\r\n  }\r\n\r\n  initializeBaseStats(statDefs) {\r\n    const baseStatArray = Object.keys(statDefs.base);\r\n    baseStatArray.forEach((stat) => {\r\n      const statValue = this.calculateStat(\r\n        statDefs.base[stat].vl,\r\n        statDefs.base[stat].vr\r\n      );\r\n      this.setStat(stat, statValue);\r\n    });\r\n  }\r\n\r\n  initializeSecondaryStats(statDefs) {\r\n    const secondaryStatArray = Object.keys(statDefs.second);\r\n    secondaryStatArray.forEach((stat) => {\r\n      const statObj = statDefs.second[stat];\r\n      console.log(statObj);\r\n      const sum = statObj.dp.reduce((acc, val) => {\r\n        return acc + this[val];\r\n      }, 0);\r\n      this.setStat(stat, Math.floor(sum * statObj.mlt));\r\n    });\r\n  }\r\n\r\n  calculateStat(vl, vr) {\r\n    const operator = Math.random();\r\n    if (operator > 0.5 && operator <= 1) {\r\n      return vl + (0,_utils_random__WEBPACK_IMPORTED_MODULE_0__.getRandomValue)(vr);\r\n    } else if (operator <= 0.5) {\r\n      return vl - (0,_utils_random__WEBPACK_IMPORTED_MODULE_0__.getRandomValue)(vr);\r\n    }\r\n  }\r\n\r\n  setStat(stat, val) {\r\n    this[stat] = val;\r\n  }\r\n\r\n  getStat(statString) {\r\n    return this[statString];\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://testenv/./src/generators/Stats.js?");

/***/ }),

/***/ "./src/generators/spriteDefs.js":
/*!**************************************!*\
  !*** ./src/generators/spriteDefs.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"goblin\": () => (/* binding */ goblin)\n/* harmony export */ });\n/* harmony import */ var _src_pathDefs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/pathDefs */ \"../src/pathDefs.js\");\n\r\n\r\n// List of sprite heads and body variations to staple together.\r\nconst goblin = {\r\n  headTypes: [\r\n    `${_src_pathDefs__WEBPACK_IMPORTED_MODULE_0__.PATHS.sprites}/gobboBody1SS.png`,\r\n    `${_src_pathDefs__WEBPACK_IMPORTED_MODULE_0__.PATHS.sprites}/gobboBody2SS.png`,\r\n  ],\r\n  bodyTypes:[\r\n    `${_src_pathDefs__WEBPACK_IMPORTED_MODULE_0__.PATHS.sprites}/gobboBody1SS.png`,\r\n    `${_src_pathDefs__WEBPACK_IMPORTED_MODULE_0__.PATHS.sprites}/gobboBody2SS.png`,\r\n  ],\r\n  frameWidth: 33,\r\n  frameHeight: 33,\r\n\r\n  animFrames: {\r\n    idle: [0, 1],\r\n    backIdle: [2, 3],\r\n    attack: [0, 0]\r\n  }\r\n}\n\n//# sourceURL=webpack://testenv/./src/generators/spriteDefs.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _generators_Entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generators/Entity */ \"./src/generators/Entity.js\");\n\r\n\r\nconst body = document.querySelector(\"body\");\r\nconst div = document.createElement(\"div\");\r\ndiv.textContent = \"Sup\";\r\nbody.appendChild(div);\r\n\r\nconst looStats = new _generators_Entity__WEBPACK_IMPORTED_MODULE_0__.Entity(\"goblin\");\r\nconsole.log(looStats);\r\n\n\n//# sourceURL=webpack://testenv/./src/index.js?");

/***/ }),

/***/ "./src/utils/dataManip/Grid.js":
/*!*************************************!*\
  !*** ./src/utils/dataManip/Grid.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Graph\": () => (/* binding */ Graph)\n/* harmony export */ });\nclass Graph {\r\n  constructor(pattern) {\r\n    this.pattern = pattern;\r\n    this.nodes = Object.keys(pattern);\r\n    this.matrix = this.makeAdjMatrix(this.pattern);\r\n  }\r\n\r\n  makeAdjMatrix(pattern) {\r\n    const yArray = [];\r\n    this.nodes.forEach((i) => {\r\n      const xArray = [];\r\n      this.nodes.forEach((j) => {\r\n        pattern[j].includes(i) ? xArray.push(1) : xArray.push(0);\r\n      });\r\n      yArray.push(xArray);\r\n    });\r\n    return yArray;\r\n  }\r\n\r\n  setAdjArray(edge1, edge2, vertices, adjArray) {\r\n    adjArray[vertices.indexOf(edge1)][vertices.indexOf(edge2)] = 1;\r\n    adjArray[vertices.indexOf(edge2)][vertices.indexOf(edge1)] = 1;\r\n  }\r\n\r\n  checkAdj(edge1, edge2) {\r\n    if (\r\n      this.matrix[this.nodes.indexOf(edge1)][this.nodes.indexOf(edge2)] === 1\r\n    ) {\r\n      return true;\r\n    } else if (\r\n      this.matrix[this.nodes.indexOf(edge2)][this.nodes.indexOf(edge1)] === 1\r\n    ) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://testenv/./src/utils/dataManip/Grid.js?");

/***/ }),

/***/ "./src/utils/random.js":
/*!*****************************!*\
  !*** ./src/utils/random.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomIndex\": () => (/* binding */ getRandomIndex),\n/* harmony export */   \"getRandomValue\": () => (/* binding */ getRandomValue)\n/* harmony export */ });\nfunction getRandomIndex(array) {\r\n  let random = Math.floor(Math.random() * array.length);\r\n  return random;\r\n}\r\n\r\nfunction getRandomValue(factor) {\r\n  return Math.floor(Math.random() * factor) + 1;\r\n}\r\n\n\n//# sourceURL=webpack://testenv/./src/utils/random.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;