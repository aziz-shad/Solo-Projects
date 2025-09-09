// # example input -> Pig Latin is hard to speak Awesome Child

const arg = process.argv.slice(2);

// # Check if input array is empty
if (arg.length === 0) {
  console.error("Please provide some text to translate to Pig Latin..");
  console.log("Example : Node PigLatinTranslator.js [some text here]");
  return;
}

// # generate the Pig latin Translator
const pigLatinTranslator = arg.map((word) => {
  if (!isVowel(word[0]) && isVowel(word[1])) {
    let newWord = word.slice(1) + word[0].toLowerCase() + "ay";

    return newWord;
  } else if (!isVowel(word[0]) && !isVowel(word[1])) {
    let newWord =
      word.slice(2) + word[0].toLowerCase() + word[1].toLowerCase() + "ay";
    return newWord;
  } else if (isVowel(word[0]) && !isVowel(word[1])) {
    return (word += "Way");
  }
});

// # print output
console.log(pigLatinTranslator.join(" "));

// # check the input character is Vowel or not
function isVowel(character) {
  const firstChar = character.toLowerCase(); // get first character in lowercase
  return ["a", "e", "i", "o", "u"].includes(firstChar);
}
