import { paragraph } from "./contants";
import { extractKeyWords as naturalExtractKeyWords } from "./natural";
import { extractKeyWords as winkNLPExtractKeyWords } from "./winkNPL";
import { extractKeyWords as compromiseExtraxtKeyWords } from "./compromise";
import { extractKeyWords as openaiExtractKeywords } from "./openai";

async function main() {
  let keywords = naturalExtractKeyWords(paragraph, 6);
  //using natural and stopword
  console.log("natural");
  console.log("=========================");
  console.log(keywords);
  console.log("=========================");
  //using winkNLP
  console.log("winkNLP");
  console.log("=========================");
  keywords = winkNLPExtractKeyWords(paragraph);
  console.log(keywords);
  console.log("=========================");
  console.log("compromise");
  console.log("=========================");
  keywords = compromiseExtraxtKeyWords(paragraph);
  console.log(keywords);
  console.log("=========================");
  console.log("openai");
  console.log("=========================");
  const response = await openaiExtractKeywords(paragraph);
  console.log(response);
  console.log("=========================");
}

main();
