//Convert text to binary or convert binary to text

//Text to Binary
function textToBinary(text) {
    return text.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');
  }

//Binary to Text
function binaryToText(binary) {
    return binary.split(' ').map(str => String.fromCharCode(parseInt(str, 2))).join('');
  }
  

  