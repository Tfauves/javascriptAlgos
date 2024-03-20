let inputNum = 121;

const isPalindrome = (x) => {
  let xStr = x.toString();
  let reversedNum = "";
  for (let i = xStr.length - 1; i >= 0; i--) {
    reversedNum += xStr[i];
  }
  if (reversedNum === xStr) {
    return true;
  }

  return false;
};

isPalindrome(inputNum);
