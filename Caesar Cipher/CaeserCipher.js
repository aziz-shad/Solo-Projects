// # example input 1 ->  he does not know
// # example input 2 ->  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG
const Plain = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const Cipher = [
  "X",
  "Y",
  "Z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
];

// # removing first two arguments from the command line arguments.
const inputArray = process.argv.slice(2);

// # Check if input array is empty
if (inputArray.length === 0) {
  console.error("Please provide some text to cipher..");
  console.log("Example : Node CaeserCipher.js [some text here]");
  return;
}

// # convert array to string sentence {abc def}
const plainTextString = inputArray.join(" ");

// # printing plain text as sentence form
console.log("Plain Text : ", plainTextString);

// # convert string sentence to Character array ['a','b','c','d'.'e','f']
const plainTextArray = Array.from(plainTextString);

//console.log("Plain Text Array : ", plainTextArray);

// # reading character one by one of plain text,
// # get the index of that character in Plain array
// # fetch character at that index from Cipher array and gernerate ciper text.
// # if plain text has space then simple copy space in cipher text.
const cipherText = plainTextArray.map((c) => {
  //console.log(c);
  let idx = Plain.indexOf(c.toString().toUpperCase());
  if (idx !== -1) {
    return Cipher[idx];
  } else {
    return " ";
  }
});

// # show results
console.log("Cipher Text: ", cipherText.join(""));
//console.log("Cipher Text: ", cipherText.join("").toLowerCase());
