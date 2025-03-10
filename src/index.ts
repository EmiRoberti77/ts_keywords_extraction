import { removeStopwords, eng } from "stopword";
import natural from "natural";
import { paragraph } from "./contants";

// const newString = removeStopwords(paragraph.split(" "));
// console.log(newString);

async function extractKeyWords(text: string, maxKeywords: number = 10) {
  const tokenizer = new natural.WordTokenizer();
  const tokens = tokenizer.tokenize(text.toLocaleLowerCase());
  console.log(tokens);

  //remove the stop words
  const filteredTokens = removeStopwords(tokens);
  console.log(filteredTokens);

  //calculate the frequency of the words
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
