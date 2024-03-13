// Given a string, return the character that is most
// commonly used in the string
// Examples
// maxChar('aabbccccccd') => 'c'

function maxChar(str) {
  const charLength = str.split("").reduce((acc, char) => {
    return {
      ...acc,
      [char]: acc[char] ? acc[char] + 1 : 1,
    };
  }, {});

  return Object.keys(charLength).reduce((a, b) =>
    charLength[a] > charLength[b] ? a : b
  );
}

function maxChar2(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let key in charMap) {
    if (charMap[key] > max) {
      max = charMap[key];
      maxChar = key;
    }
  }
  return maxChar;
}

console.log(maxChar2("aabbccccccd"));
