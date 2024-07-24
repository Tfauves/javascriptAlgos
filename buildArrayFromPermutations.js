const nums = [0, 2, 1, 5, 3, 4];

const buildArray = (nums) => {
  const ans = [];

  for (i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]];
  }

  return ans;
};
//[0,1,2,4,5,3]
console.log(buildArray(nums));
