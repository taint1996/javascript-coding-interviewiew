// There is a string, , of lowercase English letters that is repeated infinitely many times. Given an integer, , find and print the number of letter a's in the first  letters of the infinite string.
// Example
// The substring we consider is , the first  characters of the infinite string. There are  occurrences of a in the substring.
// Function Description
// Complete the repeatedString function in the editor below.
// repeatedString has the following parameter(s):
// s: a string to repeat
// n: the number of characters to consider
// Returns
// int: the frequency of a in the substring

// Constraints
// For  of the test cases, .

// Sample Input 0
// aba
// 10
// Sample Output 0
// 7

// SampleInput 1
// a
// 1000000000000
// Sample Output 1
// 1000000000000

function repeatedString(s, n) {
  // Write your code here
  const multi = Math.floor(n / s.length),
    balance = n % s.length;
  const fullOccur = [...s].filter((ch) => ch == 'a').length;

	// Slice full string to balane -> filter with 'a' substring
  const leftOccur = [...s.slice(0, balance)].filter((ch) => ch == 'a').length;

  return multi * fullOccur + leftOccur;
}
console.log(repeatedString('asynawaita', 10));
