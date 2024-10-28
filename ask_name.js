import inquirer from "inquirer";

// * variable storing player name
let playerName;

const askName = async () => {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "playerName",
      message: "What is your name?",
      default() {
        return "Player";
      },
    },
  ]);
  playerName = answers.playerName;
};

export default askName;
export { playerName };
