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
