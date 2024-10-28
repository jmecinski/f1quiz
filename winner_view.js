import { playerName } from "./ask_name.js";
import chalkAnimation from "chalk-animation";
import { pastel } from "gradient-string";
import figlet from "figlet";
import { sleep } from "./utils.js";

const winnerView = async () => {
  const winnerMsg = chalkAnimation.rainbow(
    `Congratulations ${playerName}! You won!!! \n`
  );

  await sleep();
  winnerMsg.stop();

  const prize = "$ 1 , 0 0 0 , 0 0 0";
  figlet(prize, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(pastel.multiline(data));
  });
};
export default winnerView;
