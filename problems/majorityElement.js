// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	let results = nums[0];
	let store = {};
	for (let i = 0; i < nums.length; i++) {
		if (!store[nums[i]]) {
			store[nums[i]] = 1;
		} else {
			store[nums[i]]++;
		}
		if (store[results] < store[nums[i]]) {
			results = nums[i];
		}
	}
	return results;
};
