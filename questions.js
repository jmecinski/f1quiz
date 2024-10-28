import inquirer from "inquirer";
import handleAnswers from "./handle_answers.js";

const q1 = async () => {
  const answers = await inquirer.prompt({
    type: "list",
    name: "q1",
    message: "1. Which circuit is known as the 'Temple of Speed'?",
    choices: [
      "a) Silverstone",
      "b) Spa-Francorchamps",
      "c) Monza",
      "d) Suzuka",
    ],
  });
  const result = await handleAnswers(answers.q1 === "c) Monza");
  return result;
};
const q2 = async () => {
  const answers = await inquirer.prompt({
    type: "list",
    name: "q2",
    message: "2. What is DRS in Formula 1?",
    choices: [
      "a) Drag Reduction System",
      "b) Direct Racing Support",
      "c) Dynamic Race Strategy",
      "d) Drive Response System",
    ],
  });
  const result = await handleAnswers(answers.q2 === "a) Drag Reduction System");
  return result;
};

const q3 = async () => {
  const answers = await inquirer.prompt({
    type: "list",
    name: "q3",
    message: "3. Which circuit features the famous 'Eau Rouge' corner?",
    choices: ["a) Montreal", "b) Monza", "c) Monaco", "d) Spa-Francorchamps"],
  });
  const result = await handleAnswers(answers.q3 === "d) Spa-Francorchamps");
  return result;
};

const q4 = async () => {
  const answers = await inquirer.prompt({
    type: "list",
    name: "q4",
    message:
      "4. Which F1 team is the oldest and most successful constructor still competing?",
    choices: ["a) McLaren", "b) Ferrari", "c) Mercedes", "d) Williams"],
  });
  const result = await handleAnswers(answers.q4 === "b) Ferrari");
  return result;
};

const q5 = async () => {
  const answers = await inquirer.prompt({
    type: "list",
    name: "q5",
    message: "5. What color are the tires with the softest compound in F1?",
    choices: ["a) Red", "b) Yellow", "c) White", "d) Black"],
  });
  const result = await handleAnswers(answers.q5 === "a) Red");
  return result;
};

const q6 = async () => {
  const answers = await inquirer.prompt({
    type: "list",
    name: "q6",
    message: "6. Which driver has the most wins in Formula 1 history?",
    choices: [
      "a) Sebastian Vettel",
      "b) Michael Schumacher",
      "c) Ayrton Senna",
      "d) Lewis Hamilton",
    ],
  });
  const result = await handleAnswers(answers.q6 === "d) Lewis Hamilton");
  return result;
};

const q7 = async () => {
  const answers = await inquirer.prompt({
    type: "list",
    name: "q7",
    message: "7. How many points does a driver receive for winning a race?",
    choices: ["a) 10", "b) 1", "c) 25", "d) 20"],
  });
  const result = await handleAnswers(answers.q7 === "c) 25");
  return result;
};

const q8 = async () => {
  const answers = await inquirer.prompt({
    type: "list",
    name: "q8",
    message: "8. What is the minimum age requirement for an F1 super license?",
    choices: ["a) 25", "b) 18", "c) 17", "d) 21"],
  });
  const result = await handleAnswers(answers.q8 === "b) 18");
  return result;
};

const q9 = async () => {
  const answers = await inquirer.prompt({
    type: "list",
    name: "q9",
    message:
      "9. How many championship points are awarded for setting the fastest lap in a race?",
    choices: ["a) 1", "b) 2", "c) 3", "d) 0"],
  });
  const result = await handleAnswers(answers.q9 === "a) 1");
  return result;
};

const q10 = async () => {
  const answers = await inquirer.prompt({
    type: "list",
    name: "q10",
    message: "10. Which was the first F1 season to use hybrid power units?",
    choices: ["a) 2004", "b) 2010", "c) 2016", "d) 2014"],
  });
  const result = await handleAnswers(answers.q10 === "d) 2014");
  return result;
};

export { q1, q2, q3, q4, q5, q6, q7, q8, q9, q10 };
