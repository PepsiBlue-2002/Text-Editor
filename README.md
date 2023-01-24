# Text-Editor

# Overview
This is a simple text editor that can be used to transorm and alter text in various ways.

# Screenshot
![Screenshot](Screenshot\XhtmlScreenshot.png)

## Built With
- HTML
- CSS
- JavaScript
- Bootstrap

## References
https://developer.mozilla.org/


## Decriptions
 All files are reasonably organized and have comments within them breaking up sections and stating what is what. Many of the functions that were
written use array methods and target the DOM as that was the easiest way I though to do it. While everything is not completley uniform it gets
the job done.

 ### Basics.js
  This file contains the Bold, Underline, Italics, Strikethrough, and Superscript functions. All of them use basic Array methods but some of them
 have become deprecated and may not function on some browsers. Where the array methods were not compatible with the browser I was testing on at the 
 time I used HTML inputs and that worked just fine.

 ### Basics2.js
  This file contains the Reverse, Caps-Lock, Lower-Case, Subscript and Toggle-Case functions. These are also pretty common functions but probably less
 used. Everything here is essentially the same as setup as in Basics. The outlier being the Toggle-Case (tOGGLE-cASE). There may be a better way to 
 accomplish it but when in doubt - use more array methods.

 ### FunFeatures.js
  This file contains the MoronText, ScrambleText, FlipText, Kerning, and ZalgoGlitch functions. The MoronText (named after the meme text format) uses
an if else to capitalize every other letter beginning with the first letter of the word. Next the ScrambleText I feel was overcomplicated but uses array
methods to scramble the input into random letters. Since it uses the Math.random function it also means every time you enter your input you will get a
new output using your letters. FlipText isn't too crazy but I had to go online and get a list of upside down letters. The way it'ssetup it is missing any
characters that aren't on a standard English keyboard and also doesn't do numbers. Kerning was just putting some spaces in between the letters. Spanglish
uses switch-case to replace any vowel with one that has an accent mark. Lastly ZalgoGlitch which I used 'Light' because I thought it was kinda weak; I
looked to the Internet for help with as I had seen it used but didn't really know what it was. It's just taking small characters and mashing them into the input creating text nonsense.

### Binary.js
I didn't implement or even test this but it's there. Nothing works if you delete it.         Just kidding.


## Notes
 I did add just a little bit of Bootstrap to straighten it up. I didn't adjust it for really any screens outside of basic desktops. The styles.css 
contains the styling for everything. The index is X.html. I don't actually remember why I named it that. This the first README I've ever written so if 
it's too much or too little. Maybe next time, right? If anyone ever does look at this code feel free to drop me a suggestion, advice, or otherwise.


## Links
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


## Legal and Other
Not responsible for anything you do with this code.