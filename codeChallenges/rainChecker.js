// These plants require exactly 40mm of rainfall a day, but if it doesn't rain I need to water them to compensate.

//challenge: Identify and resolve the bugs in the above code, such that:
// rainAmount(100) returns Your plant has had more than enough water for today!
// rainAmount(39) returns You need to give your plant 1mm of water.

const rainAmount = (mm) => {
  let requiredWater = 40;
  let amountNeeded = requiredWater - mm;

  if (mm < requiredWater) {
    return "You need to give your plant " + `${amountNeeded}` + " mm of water";
  } else if (mm >= requiredWater) {
    return "Your plant has had more than enough water for today!";
  }
};

console.log(rainAmount(20));
