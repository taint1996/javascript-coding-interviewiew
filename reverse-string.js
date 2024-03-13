// --- Directions
// Given a string, return a new string with reversed order of characters

// -- Examples
// reverse('hi') ==> 'ih'
// reverse('hello') ==> 'olleh'
// reverse('CodingMoney') ==> 'yenoMgnidoC'

function reverse(str) {
  let reversed = "";

  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

console.log(reverse("Hello"));

// Option 2
function reverseOpt2(str) {
  return str.split("").reverse().join("");
}
console.log(reverseOpt2("CodingMoney"));
