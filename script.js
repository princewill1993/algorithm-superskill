function analyzeSentence(sentence) {
  // Initialize counters
  let length = 0;
  let words = 0;
  let vowels = 0;

  // Define the vowels
  const vowelSet = "aeiouAEIOU";

  // Loop through each character in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    // Increment sentence length for each character except the final period
    if (char !== ".") {
      length++;
    }

    // Check for vowels
    if (vowelSet.includes(char)) {
      vowels++;
    }

    // Count words by identifying spaces and the final period
    if (char === " " || char === ".") {
      words++;
    }
  }

  // Output the results
  console.log(`Length of sentence (excluding period): ${length}`);
  console.log(`Number of words: ${words}`);
  console.log(`Number of vowels: ${vowels}`);
}

// Example
const sentence = "This is a sample sentence.";
analyzeSentence(sentence);
