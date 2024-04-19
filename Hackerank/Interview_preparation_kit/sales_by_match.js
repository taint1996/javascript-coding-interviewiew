// Function Description

// Complete the sockMerchant function in the editor below.
// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns
// int: the number of pairs
// Input Format

// The first line contains an integer , the number of socks represented in .
// The second line contains  space-separated integers, , the colors of the socks in the pile.

// Constraints
//  where
// Sample Input

// STDIN                       Function
// -----                       --------
// 9                           n = 9
// 10 20 20 10 10 30 50 10 20  ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

// Sample Output
// 3

function sockMerchant(n, ar) {
  // Write your code here
  // Solution
  // let pairs = 0;
  // Array.from(new Set(ar)).map((num) => {
  // 	const match = ar.filter(a => a === num).length

  // 	if(match % 2 === 0) pairs += match / 2
  // 	else pairs += (match - 1) / 2
  // })
  // return pairs

  // Write your code here
  return Array.from(new Set(ar)).reduce((pairs, num) => {
    const matchSocks = ar.filter((a) => a === num).length;

    return matchSocks % 2 === 0
      ? pairs + matchSocks / 2
      : pairs + (matchSocks - 1) / 2;
  }, 0);
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
