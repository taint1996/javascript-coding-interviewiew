// Function Description

// Complete the countingValleys function in the editor below.
// countingValleys has the following parameter(s):
// int steps: the number of steps on the hike
// string path: a string describing the path
// Returns

// int: the number of valleys traversed
// Input Format
// The first line contains an integer , the number of steps in the hike.
// The second line contains a single string , of  characters that describe the path.

// Constraints
// Sample Input

// 8
// UDDDUDUU
// Sample Output
// 1

function countingValleys(steps, path) {
  let altitude = 0;
  let last = 0;

  const count = Array.from(path).reduce((acc, step) => {
    last = altitude;
    if (step === 'D') {
      altitude--;
    }
    if (step === 'U') {
      altitude++;
    }
    if (last < 0 && altitude === 0) {
        return acc + 1;
    }
    console.log(last, altitude, acc);
    return acc;
  }, 0);

  return count;
}

console.log(countingValleys(8, 'UDDDUDUU'));
