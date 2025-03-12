import nlp from "compromise";
export async function extractKeyWords(text: string) {
  const doc = nlp(text);
  const keywords = doc.nouns().out("array");
  return keywords;
}
