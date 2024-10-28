// * helper function to stop the execution for a given time
const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms));

export { sleep };
