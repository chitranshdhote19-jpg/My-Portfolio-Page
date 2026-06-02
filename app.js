const typingText = document.getElementById('typing');

const words = [
  'Frontend Developer',
  'Web Designer',
  'JavaScript Developer'
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = '';
let currentChar = '';

function type() {
  if (wordIndex < words.length) {
    currentWord = words[wordIndex];
    currentChar = currentWord.slice(0, ++charIndex);

    typingText.textContent = currentChar;

    if (currentChar.length === currentWord.length) {
      wordIndex++;
      charIndex = 0;

      setTimeout(type, 1000);
    } else {
      setTimeout(type, 100);
    }
  } else {
    wordIndex = 0;
    type();
  }
}

type();