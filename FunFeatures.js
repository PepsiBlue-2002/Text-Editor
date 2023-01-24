//MoronText
function capitalizeEverySecondCharacter() {
    let input = document.getElementById('input9').value;
    let newText = "";
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
    let input = document.getElementById('input10').value;
    const inputArray = input.split('');
    for (let i = inputArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [inputArray[i], inputArray[j]] = [inputArray[j], inputArray[i]];
    }
    let output = inputArray.join('');
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


//Kerning
  function addKerning() {
    let inputText = document.getElementById("input13").value;
    let kernedText = "";
    for (let i = 0; i < inputText.length; i++) {
        kernedText += inputText[i];
        if (i !== inputText.length - 1) {
            kernedText += "&nbsp;".repeat(5);
        }
    }
    document.getElementById("output13").innerHTML = kernedText;
};


//Zalgo Glitch
  function zalgoGlitch1() {
    let input12 = document.getElementById("input12").value;
    let zalgoChars = ["́","̀","̂","̃","̄","̅","̆","̇","̈","̉","̊","̋","̌","̍","̎","̏","̐","̑","̒","̓","̔","̕","̖","̗",
    "̘","̙","̚","̛","̜","̝","̞","̟","̠","̡","̢","̣","̤","̥","̦","̧","̨","̩","̪","̫","̬","̭","̮","̯","̰","̱","̲","̳","̴","̵","̶","̷","̸","̹","̺","̻","̼","̽","̾","̿"];

  let output12 = "";
for (let char of input12) {
    output12 += char;
    for (let i = 0; i < Math.floor(Math.random() * 7); i++) {
        output12 += zalgoChars[Math.floor(Math.random() * zalgoChars.length)];
    }
}
document.getElementById("output12").innerHTML = output12;
};


//áéíñóúü¿¡   ÁÉÍÑÓÚ    Üü
//Accent Mark Letters
function replaceVowels() {
  var input = document.getElementById("input14").value;
  var output = input.replace(/[AEIOUaeiou!?]/gi, function(match) {
    switch (match) {
      case "a":
        return "á";
      case "e":
        return "é";
      case "i":
        return "í";
      case "o":
        return "ó";
      case "u":
        return "ú";
      case "?":
        return "¿";
      case "!":
        return "¡";
      case "A":
        return "Á";
      case "E":
        return "É";
      case "I":
        return "Í";
      case "O":
        return "Ó";
      case "U":
        return "Ú";
    }
  });
  document.getElementById("output14").innerHTML = output;
}
