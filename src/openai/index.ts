import { OpenAI } from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function extractKeyWords(text: string, maxWords: number = 6) {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      {
        role: "user",
        content: `Extract ${maxWords} key objects or keywords (single words not sentences) that best rapresent this text and return as an array:\n"${text}"`,
      },
    ],
    temperature: 0,
  });

  return response.choices[0].message.content;
}
