#! /usr/bin/env node


import OpenAI from "openai";
import "dotenv/config";
console.log(process.env.OPENAI_API_KEY) // remove this after you've confirmed it is working

const openai = new OpenAI();

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();