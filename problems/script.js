let arr = [3, 2, 2, 3];
var removeElement = function(nums, val) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === val) {
			delete nums[i];
		}
	}
};

removeElement(arr, 3);
console.log(arr);
