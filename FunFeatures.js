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
  