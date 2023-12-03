const fs = require("fs");

const fileContent = fs.readFileSync("input", "utf8");

console.log(fileContent);

let groupIdSum = 0;

fileContent.split("\n").forEach((line) => {
  if (line === "") {
    return;
  }

  // get the game id
  const gameId = line.split(":")[0].split(" ")[1];

  console.log(`looking at game ${gameId}`);

  // get cube groups
  const cubeGroups = line.split(":")[1].split(";");

  let possible = true;

  // go through each cube group, and check if the amount of cubes is higher than 12, 13 or 14
  cubeGroups
    .map((group) => group.trim())
    .forEach((group) => {
      const pulls = group.split(",").map((pull) => pull.trim());

      pulls.forEach((pull) => {
        const pulledCubes = pull.split(" ");
        const amountOfCubes = pulledCubes[0];
        const color = pulledCubes[1];

        if (color === "red" && amountOfCubes > 12) {
          possible = false;
          console.log(`game ${gameId} not possible cus red>12`);
        } else if (color === "green" && amountOfCubes > 13) {
          possible = false;
          console.log(`game ${gameId} not possible cus green>13`);
        } else if (color === "blue" && amountOfCubes > 14) {
          possible = false;
          console.log(`game ${gameId} not possible cus blue>14`);
        }
      });
    });

  if (possible) {
    groupIdSum += parseInt(gameId);
    console.log(`game ${gameId} possible`);
  }
});

console.log(`sum of all game ids possible: ${groupIdSum}`);
