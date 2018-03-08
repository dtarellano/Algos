// Given a sorted array, remove the duplicates in-place such that each element
// appear only once and return the new length.
//
// Do not allocate extra space for another array, you must do this by modifying
// the input array in-place with O(1) extra memory.
var removeDuplicates = function(nums) {
	let current;
	if (nums.length <= 1) {
		return;
	}
	for (let i = nums.length - 1; i >= 0; i--) {
		if (current === undefined) {
			current = nums[i];
			continue;
		}
		if (current === nums[i]) {
			nums.splice(i, 1);
		}
		if (current !== nums[i]) {
			current = nums[i];
		}
	}
};
