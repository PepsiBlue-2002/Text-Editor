let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // Output: [2, 4, 6]


// (WIP) Use this to let user choose what to output








// Could use this in W.O. project
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num);
console.log(sum);  // Output: 10




// noted as one of the most difficult array methods (pretty simple tho)
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num, 10);
console.log(sum);  // Output: 20

let numbers = [1, 2, 3, 4];
let product = numbers.reduce((total, num) => total * num);
console.log(product);  // Output: 24

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num);
console.log(sum);  // Output: 10


// love this method gotta use it somewhere; it's used to replaced instances with a new instance
let text = 'Hello World';
let replacedText = text.replace('Hello', 'Hi');
console.log(replacedText);  // Output: 'Hi World'





// text to Brainfuck
function textToBrainFuck(text) {
    let bf = '';
    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);
      let bfCharCodes = [];
      do {
        bfCharCodes.unshift(charCode % 2);
        charCode = Math.floor(charCode / 2);
      } while (charCode > 0);
      while (bfCharCodes.length < 8) {
        bfCharCodes.unshift(0);
      }
      bfCharCodes.forEach(code => {
        bf += code === 0 ? '<' : '>';
      });
    }
    return bf;
  }



  //heart possibility
  function textToHeart(text) {
    let lines = text.split('\n');
    let heart = '';
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      heart += ' '.repeat(Math.max(0, (lines.length - i - 1) * 2)) + line + '\n';
    }
    return heart;
  }
  
  console.log(textToHeart('I\nLove\nYou'));
  


  //word count
  let str = "This is a sentence with several words.";
let words = str.split(" "); // split the string into an array of words
let wordCount = words.length; // count the number of elements in the array
console.log(wordCount); // output: 8


//moron text
let text = "this is some sample text";
let newText = "";

for (let i = 0; i < text.length; i++) {
  // check if the current character is even-numbered (i.e., the second, fourth, etc. character)
  if (i % 2 === 0) {
    newText += text[i].toUpperCase(); // capitalize the character
  } else {
    newText += text[i]; // leave the character unchanged
  }
}

console.log(newText); // output: "ThIs Is SoMe SaMpLe TeXt"




//Capitalize the first letter of each sentence
function capitalizeFirstLetter(str) {
  // Split the string into an array of sentences
  const sentences = str.split('. ');
  // Loop through the array and capitalize the first letter of each sentence
  for (let i = 0; i < sentences.length; i++) {
    sentences[i] = sentences[i].charAt(0).toUpperCase() + sentences[i].slice(1);
  }
  // Join the array back into a single string and return it
  return sentences.join('. ');
}

// Example usage
const input = "hello, world. this is a test. i hope it works.";
const output = capitalizeFirstLetter(input);
console.log(output); // Output: "Hello, world. This is a test. I hope it works."







//do this using the PDFTron PDF library in JavaScript:

const PDFTron = require('pdftron');

// Initialize the PDFTron library
PDFTron.PDFNet.initialize().then(() => {
  // Open the PDF file
  const doc = await PDFTron.PDFNet.PDFDoc.createFromURL('myfile.pdf');
  doc.initSecurityHandler();
  doc.lock();

  // Get the first page of the PDF
  const page = doc.getPage(1);

  // Get the page's text objects
  const textObjects = page.getTextObjects();

  // Loop through the text objects and set the fill color to red
  textObjects.forEach((textObject) => {
    textObject.setFillColor(1, 0, 0);
  });

  // Save the changes to the PDF file
  doc.save('myfile_modified.pdf', PDFTron.PDFNet.SDFDoc.SaveOptions.e_linearized);

  // Close the PDF document
  doc.close();
});


/*This code uses the PDFTron library to open a PDF file, get the text objects on the first page, and set the fill color of each text object to red. 
It then saves the modified PDF to a new file.
Note that this is just one way to change the color of text in a PDF file, and there are other libraries and techniques that can be used as well.
*/




//Invisible Text

function invisibleText() {
  // Get the input value from the form
  let input = document.getElementById("user-input").value;
  // Create an empty string
  let invisibleString = "";
  // Iterate over the input string and add zero width spaces (U+200B)
  for(let i = 0; i < input.length; i++){
      invisibleString += "\u200B";
  }
  // Display the invisible text in the output element
  document.getElementById("output").innerHTML = invisibleString;
}







//Zalgo Glitch?

function zalgoGlitch() {
  // Get the input value from the form
  let input = document.getElementById("user-input").value;
  // Array of possible Zalgo characters
  let zalgoChars = ["́","̀","̂","̃","̄","̅","̆","̇","̈","̉","̊","̋","̌","̍","̎","̏","̐","̑","̒","̓","̔","̕","̖","̗",
  "̘","̙","̚","̛","̜","̝","̞","̟","̠","̡","̢","̣","̤","̥","̦","̧","̨","̩","̪","̫","̬","̭","̮","̯","̰","̱","̲","̳","̴","̵","̶","̷","̸","̹","̺","̻","̼","̽","̾","̿"];
}
/*
let output = "";
// Iterate over each character in the input string
for (let char of input) {
    // Add the character to the output string
    output += char;
    // Add a random number of random Zalgo characters after the character
    for (let i = 0; i < Math.floor(Math.random() * 7); i++) {
        output += zalgoChars[Math.floor(Math.random() * zalgoChars.length)];
    }
}
// Display the glitched text in the output element
document.getElementById("output").innerHTML = output;
}
*/





//Flip Text Upside Down
function flipText() {
  // Get the input value from the form
  let input = document.getElementById("user-input").value;
  // Create an object with the characters to be inverted
  let invertedChars = {
      "a": "ɐ",
      "b": "q",
      "c": "ɔ",
      "d": "p",
      "e": "ǝ",
      "f": "ɟ",
      "g": "ƃ",
      "h": "ɥ",
      "i": "ı",
      "j": "ɾ",
      "k": "ʞ",
      "l": "ן",
      "m": "ɯ",
      "n": "u",
      "o": "o",
      "p": "d",
      "q": "b",
      "r": "ɹ",
      "s": "s",
      "t": "ʇ",
      "u": "n",
      "v": "ʌ",
      "w": "ʍ",
      "x": "x",
      "y": "ʎ",
      "z": "z",
      "z": "z",
      "A": "∀",
      "B": "q",
      "C": "Ɔ",
      "D": "p",
      "E": "Ǝ",
      "F": "Ⅎ",
      "G": "פ",
      "H": "H",
      "I": "I",
      "J": "ſ",
      "K": "ʞ",
      "L": "˥",
      "M": "W",
      "N": "N",
      "O": "O",
      "P": "d",
      "Q": "b",
      "R": "R",
      "S": "S",
      "T": "┴",
      "U": "∩",
      "V": "Λ",
      "W": "M",
      "X": "X",
      "Y": "⅄",
      "Z": "Z"
      };
      // Create an empty string for the inverted text
      let invertedText = "";
      // Iterate over each character in the input string
      for (let char of input) {
          // Check if the character is in the invertedChars object
          if (char in invertedChars) {
              // Add the inverted character to the invertedText string
              invertedText += invertedChars[char];
          } else {
              // Add the original character to the invertedText string
              invertedText += char;
          }
      }
      // Display the inverted text in the output element
      document.getElementById("output").innerHTML = invertedText;
  }




/* I dont write Python but this is an interesting library  I found that matches rhyming words
  import nltk
from nltk.corpus import cmudict

nltk.download('cmudict')

def get_rhyming_words(word):
    d = cmudict.dict()
    rhyming_words = [word for word, pron in d.items() if pron[-3:] == d[word][-3:]]
    return rhyming_words

word = "cat"
rhyming_words = get_rhyming_words(word)
print(rhyming_words)
*/

