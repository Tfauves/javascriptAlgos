const input = [6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3];

const plusOne = (digits) => {
  let largeDigit = "";
  const newDigits = [];
  for (let i = 0; i < digits.length; i++) {
    largeDigit += digits[i];
  }
  largeDigit = BigInt(largeDigit);
  console.log(largeDigit);

  largeDigit++;

  console.log(largeDigit);
  let strLarge = largeDigit.toString();

  for (let i = 0; i < strLarge.length; i++) {
    newDigits.push(parseInt(strLarge[i]));
  }

  console.log(strLarge);
  console.log(newDigits);
  return newDigits;
};

plusOne(input);
