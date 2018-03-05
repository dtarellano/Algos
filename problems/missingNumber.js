// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n,
// find the one that is missing from the array.
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	let sum = 0;
	let actual = 0;
	for (let i = 0; i < nums.length; i++) {
		actual += nums[i];
		sum += i + 1;
	}
	console.log(sum, actual);
	return sum - actual;
};
