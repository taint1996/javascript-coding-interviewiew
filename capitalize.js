function capitalize(str) {
  const words = str.toString().split(" ");
  return words
    .map((word) => {
      return word[0].toString().toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function capitalize2(str) {
  const words = str.split(" ");
  const results = [];

  for (let word of words) {
    results.push(word[0].toString().toUpperCase() + word.slice(1));
  }
  return results.join(" ");
}
console.log(capitalize("This is a capitalize text"));
