// Example
// Index the array from . The number on each cloud is its index in the list so the player must avoid the clouds at indices  and . They could follow these two paths:  or . The first path takes  jumps while the second takes . Return .
// Function Description
// Complete the jumpingOnClouds function in the editor below.
// jumpingOnClouds has the following parameter(s):
// int c[n]: an array of binary integers
// Returns
// int: the minimum number of jumps required
// Input Format
// The first line contains an integer , the total number of clouds. The second line contains  space-separated binary integers describing clouds  where .
// Constraints
// Output Format
// Print the minimum number of jumps needed to win the game.

// Ex:
// Sample Input 0
// 7
// 0 0 1 0 0 1 0
// --> Output: 4

// Pass 5/9 TC
// function jumpingOnClouds(c) {
//   // Write your code here
//   const newClouds = c.filter((cItem, idx) => {
//     return idx !== 1 && idx !== 5;
//   });

//   let totalJumps = 1;

//   newClouds.map((clItem, idx) => {
//     if (clItem === 0 && idx !== 0) {
//       totalJumps += 1;
//     }
//   });
//   return totalJumps;
// }

// Opt2
function jumpingOnClouds2(c) {
	let timesOfJump = 0
	let i = 0

	while (i + 1 < c.length) {
		if (i + 2 < c.length && c[i + 2] === 0) {
			timesOfJump++;
			i+=2
		} else {
			timesOfJump++
			i+=1
		}
	}
	return timesOfJump
}

console.log(jumpingOnClouds2([0, 0, 1, 0, 0, 1, 0]));
console.log(jumpingOnClouds2([0, 0, 0, 0, 1, 0]));
