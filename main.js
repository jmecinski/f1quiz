#! /usr/bin/env node

// * Import custom modules
import welcomeMessage from "./welcome_message.js";
import askName from "./ask_name.js";
import { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 } from "./questions.js";
import winnerView from "./winner_view.js";
// * main function
const main = async () => {
  await welcomeMessage();
  await askName();

  const questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

  for (const question of questions) {
    await question();
  }
  await winnerView();
};

await main();
