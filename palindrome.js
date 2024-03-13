// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not. Palindrom are strings that
// form the same word if it is reversed.

// -- Examples
// reverse('kayak') ==> true
// reverse('madam') ==> true
// reverse('CodingMoney') ==> false

function palindrome(str) {
    const reversed = str.split('').reverse().join('')
    return reversed === str
}

console.log(palindrome("kayak"));
