let word1 = "adventure";
let word2 = "beautiful";
let word3 = "happiness";
let word4 = "elephant";
let word5 = "delicious";

let num = Math.ceil(Math.random() * 5);
let word;

if (num === 1) {
  word = word1;
} else if (num === 2) {
  word = word2;
} else if (num === 3) {
  word = word3;
} else if (num === 4) {
  word = word4;
} else if (num === 5) {
  word = word5;
}

let current = "";
let ropes = "";

for (let char of word) {
  "rstlne".includes(char)
    ? (current = current + char)
    : (current = current + "✰");
}

let isGameActive = true;

while (true) {
  if (current === word) {
    alert("You Won!");
    break;
  }

  if (ropes.length === 3) {
    alert("You Lost!");
    break;
  }

  let guessLetter = prompt(
    "I'm thinking of a word. Would you like to guess a letter?\n" +
      current +
      "\n" +
      "Ropes: " +
      ropes +
      "\n" +
      "✰ represents missing letters"
  );

  if (word.includes(guessLetter)) {
    for (let i = 0; i < word.length; i++) {
      if (word[i] === guessLetter) {
        current = insertLetterIntoWord(current, guessLetter, i);
      }
    }
  } else {
    ropes = ropes + "🪢";
  }

  if (!guessLetter) break;
}

function insertLetterIntoWord(currentWord, letter, position) {
  let newWord = "";
  for (let i = 0; i < currentWord.length; i++) {
    if (i === position) {
      newWord = newWord + letter;
    } else {
      newWord = newWord + currentWord[i];
    }
  }
  return newWord;
}