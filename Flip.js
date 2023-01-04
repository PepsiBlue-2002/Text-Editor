function flipText(text) {
    // Create an array of upside down characters
    var upsideDownChars = {
      a: '\u0250',
      b: 'q',
      c: '\u0254',
      d: 'p',
      e: '\u01DD',
      f: '\u025F',
      g: '\u0183',
      h: '\u0265',
      i: '\u0131',
      j: '\u027E',
      k: '\u029E',
      l: '\u0283',
      m: '\u026F',
      n: 'u',
      r: '\u0279',
      t: '\u0287',
      v: '\u028C',
      w: '\u028D',
      y: '\u028E',
      '.': '\u02D9',
      '[': ']',
      ']': '[',
      '(': ')',
      ')': '(',
      '{': '}',
      '}': '{',
      '?': '\u00BF',
      '!': '\u00A1',
      '\'': ',',
      ',': '\'',
      '<': '>',
      '>': '<',
      '_': '\u203E',
      '\u203F': '\u2040',
      '\u2045': '\u2046',
      '\u2234': '\u2235'
    };
  
    // Create an empty string to store the flipped text
    var flipped = '';

    // Loop through the characters in the text
    for (var i = 0; i < text.length; i++) {
      // Get the current character
      var char = text[i];

      // Check if the character is in the upside down characters array
      if (char in upsideDownChars) {
        // If it is, add the corresponding upside down character to the flipped string
        flipped += upsideDownChars[char];
      } else {
        // If it is not, add the character as-is to the flipped string
        flipped += char;
    }

    // Return the flipped text
    return flipped;
    }
    

// Get the input element
var input = document.getElementById('input');

// Get the output element
var output = document.getElementById('output');

// Add an event listener to the input element to update the output when the input changes
input.addEventListener('input', function() {
  // Get the current value of the input
  var text = input.value;

  // Flip the text upside down
  var flipped = flipText(text);

  // Update the output element with the flipped text
  output.textContent = flipped;
})};
