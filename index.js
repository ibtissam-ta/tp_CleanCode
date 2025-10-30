export function scoreRoll(roll) {

  if (
    roll[0] === roll[1] &&
    roll[1] === roll[2] &&
    roll[2] === roll[3] &&
    roll[3] === roll[4]
  ) {
    return 50;
  }

  const counts = {};
  for (const value of roll) {
    if (!counts[value]) {
      counts[value] = 1;
    } else {
      counts[value]++;
    }
  }

  for (const value in counts) {
    if (counts[value] === 4) {
      return 35;
    }
  }

let hasThree = false;
let hasTwo = false;

for (const value in counts) {
    if (counts[value] === 3) hasThree = true;
    if (counts[value] === 2) hasTwo = true;
  }

    if (hasThree && hasTwo) {
    return 30;
  }

  for (const value in counts) {
    if (counts[value] === 3) {
      return 28;
    }
  }
  




}
