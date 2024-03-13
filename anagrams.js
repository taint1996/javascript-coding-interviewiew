// -- Directions
// Check to see if two provided strings are anagrams of each other.
// One string is an anagrams of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation. Consider capital letters to be the same as lowercase

// -- Examples
// anagrams('coding money', 'money coding') --> true
// anagrams('Hi there', 'Bye there') --> false

function charMap(str) {
  const charmap = {};
  str = str.toLowerCase().replace(/[\W]/g, "");
  for (let char of str) {
    charmap[char] = charmap[char] + 1 || 1;
  }
  return charmap;
}

function anagrams(stringA, stringB) {
  // Build char map for string A - string B
  const charMapA = charMap(stringA);
  const charMapB = charMap(stringB);

  // Compare each character in the bot the char maps
  if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
    return false;

  for (let key in charMapA) {
    if (charMapA[key] !== charMapB[key]) return false;
  }

  return true;
}

console.log(anagrams("Hi there", "Bye there"));
console.log(anagrams("coding money", "money coding"));

function cleanStr(str) {
  return str.toLowerCase().replace(/[\W]/g, "").split("").sort().join();
}

function anagrams2(stringA, stringB) {
  return cleanStr(stringA) === cleanStr(stringB);
}
console.log(anagrams2("Hi there", "Bye there"));
console.log(anagrams2("coding money", "money coding"));
