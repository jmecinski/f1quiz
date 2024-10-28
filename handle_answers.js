import nanospinner from "nanospinner";
import { sleep } from "./utils.js";
import { playerName } from "./ask_name.js";

// * Handles the player's answer and provides feedback
const handleAnswers = async (isCorrect) => {
  // * Create a spinner to indicate that the answer is being checked
  const spinner = nanospinner.createSpinner("Checking answer...").start();

  await sleep();

  // * If the answer is correct, display a success message, otherwise display an error message and exit the game
  if (isCorrect) {
    spinner.success({ text: `Nice work ${playerName}!` });
  } else {
    spinner.error({ text: `Incorrect!. You lost ${playerName}! 😢` });
    process.exit(1);
  }
};

export default handleAnswers;
