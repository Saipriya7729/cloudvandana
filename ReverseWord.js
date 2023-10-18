const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a sentence: ", function(input) {
  const words = input.split(" ");
  let reversedSentence = "";
  words.forEach(function(word) {
    const reversedWord = word.split("").reverse().join("");
    reversedSentence += reversedWord + " ";
  });
  console.log("Reversed sentence: " + reversedSentence.trim());
  rl.close();
});