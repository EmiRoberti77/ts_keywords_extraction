import winkNLP from "wink-nlp";
import model from "wink-eng-lite-web-model";
import { paragraph } from "../contants";

const nlp = winkNLP(model);

export async function extractKeyWords(text: string) {
  // Extract words and filter only nouns and adjectives
  const doc = nlp.readDoc(text);
  const keywords = doc
    .tokens()
    .filter((token) => {
      const pos = token.out("pos" as any); // Part of Speech
      return pos === "NOUN" || pos === "ADJ"; // Keep only Nouns & Adjectives
    })
    .out("array" as any) as string[];

  return keywords;
}
