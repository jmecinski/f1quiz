import { pastel } from "gradient-string";
import gradient from "gradient-string";
import { sleep } from "./utils.js";
import figlet from "figlet";
import chalk from "chalk";

const welcomeMessage = async () => {
  const title = "F1 Quiz Game \n";
  figlet(title, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(pastel(data));
  });

  await sleep();

  console.log(gradient(["red", "pink"])(`Welcome to the F1 Quiz Game! \n`));

  console.log(
    `
    ${chalk.red("Rules:")}
    1. You will be asked 10 questions.
    2. You need to answer ${chalk.green("all questions correctly")} to win.
    3. If you win, you will receive a prize 🎉.
    `
  );
};

export default welcomeMessage;
