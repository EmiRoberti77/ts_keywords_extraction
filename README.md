# Keyword Extraction from Text Using TypeScript

This project demonstrates how to extract the top keywords from a given paragraph using TypeScript. The extracted keywords are stored in an array.

## Prerequisites
- Node.js installed

## Installation
1. Clone the repository

2. Install dependencies
```bash
npm i
```

## Usage
1. Replace the sample paragraph with your own text in the `extractKeyWords` function.
2. Run the script
```bash
node extractKeywords.js
```

## Code Example
```typescript
import { removeStopwords } from 'stopword';
import natural from 'natural';
import { paragraph } from './contants';

async function extractKeyWords(text: string, maxKeywords: number = 10) {
  const tokenizer = new natural.WordTokenizer();
  const tokens = tokenizer.tokenize(text.toLocaleLowerCase());

  // Remove stop words
  const filteredTokens = removeStopwords(tokens);

  // Calculate the frequency of words
  const frequencyMap: { [key: string]: number } = {};
  filteredTokens.forEach((word) => {
    frequencyMap[word] = (frequencyMap[word] || 0) + 1;
  });

  // Sort words by frequency and return the top N
  return Object.entries(frequencyMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, maxKeywords)
    .map(([word]) => word);
}

const keywords = extractKeyWords(paragraph, 6);
console.log(keywords);
```

## How It Works
### Libraries Used
1. **natural**: A popular natural language processing library in JavaScript. It provides tools for tokenizing text, stemming, and classification. In this example, it is used to break down the input text into individual words using `natural.WordTokenizer()`.

2. **stopword**: This library helps remove common English stop words (e.g., 'the', 'is', 'and') from the tokenized words. The `removeStopwords` function is used to filter out these non-essential words, leaving only the most relevant words for keyword extraction.

## Example Output
```bash
Extracted Keywords: [
    'jellyfish',
    'dark',
    'water',
    'translucent',
    'patterns',
    'tentacles'
]
```

## License
This project is licensed under the MIT License.

## Author
Emi Roberti

