// Write a function that returns the number of vowels
// used in a string. Vowels are the characters 'a,e,i,o,u'

// Example
// vowels('Hi there') --> 3
// vowels('Why') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/g);
  return matches ? matches.length : 0;
}

console.log(vowels("Coding Money"));

function vowels2(str) {
  const vowelCheck = ["a", "e", "i", "o", "u"];

  let count = 0;
  for (let char of str.toString().toLowerCase()) {
    if (vowelCheck.includes(char)) {
      count += 1;
    }
  }
  return count;
}
console.log(vowels2("Coding Money"));
