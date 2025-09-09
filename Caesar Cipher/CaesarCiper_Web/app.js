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

const inputCipher = document.querySelector("#input");
const output = document.querySelector("#output");

document.querySelector("#cipher").addEventListener("click", (event) => {
  let plainText = inputCipher.value;
  const plainTextArray = Array.from(plainText);

  const cipherText = plainTextArray.map((c) => {
    let idx = Plain.indexOf(c.toString().toUpperCase());
    if (idx !== -1) {
      return Cipher[idx];
    } else {
      return " ";
    }
  });

  output.textContent = cipherText.join(" ").toString();

  console.log(plainText);
  console.log(cipherText.join(" "));
  console.log(plainTextArray);
});

document.querySelector("#decipher").addEventListener("click", () => {
  let plainText = event.target.innerText.join(" ");
  console.log(plainText);
});

const cipherText = plainTextArray.map((c) => {
  //console.log(c);
  let idx = Plain.indexOf(c.toString().toUpperCase());
  if (idx !== -1) {
    return Cipher[idx];
  } else {
    return " ";
  }
});
