//MoronText
function capitalizeEverySecondCharacter() {
    var input = document.getElementById('input9').value;
    var newText = "";
    for (let i = 0; i < input.length; i++) {
      if (i % 2 === 0) {
        newText += input[i].toUpperCase();
      } else {
        newText += input[i];
      }
    }
    document.getElementById('output9').innerHTML = newText;
};
  

//Scramble Text
function scrambleText() {
    var input = document.getElementById('input10').value;
    const inputArray = input.split('');
    for (let i = inputArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
    }
    var output = inputArray.join('');
    document.getElementById('output10').innerHTML = output;
};


//Flip Text Upside Down
function flipText() {
  let input11 = document.getElementById("input11").value;
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
      "Z": "Z",
      "?": "¿",
      "!": "¡",
      "&": "⅋"
      };
      
      let invertedText = "";
      for (let char of input11) {
          if (char in invertedChars) {
              invertedText += invertedChars[char];
          } else {
              invertedText += char;
          }
      }
      document.getElementById("output11").innerHTML = invertedText;
  };


//Zalgo Glitch
  function zalgoGlitch1() {
    // Get the input value from the form
    let input12 = document.getElementById("input12").value;
    // Array of possible Zalgo characters
    let zalgoChars = ["́","̀","̂","̃","̄","̅","̆","̇","̈","̉","̊","̋","̌","̍","̎","̏","̐","̑","̒","̓","̔","̕","̖","̗",
    "̘","̙","̚","̛","̜","̝","̞","̟","̠","̡","̢","̣","̤","̥","̦","̧","̨","̩","̪","̫","̬","̭","̮","̯","̰","̱","̲","̳","̴","̵","̶","̷","̸","̹","̺","̻","̼","̽","̾","̿"];

  let output12 = "";
// Iterate over each character in the input string
for (let char of input12) {
    // Add the character to the output string
    output12 += char;
    // Add a random number of random Zalgo characters after the character
    for (let i = 0; i < Math.floor(Math.random() * 7); i++) {
        output12 += zalgoChars[Math.floor(Math.random() * zalgoChars.length)];
    }
}
// Display the glitched text in the output element
document.getElementById("output12").innerHTML = output12;
}
  