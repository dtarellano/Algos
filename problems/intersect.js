// Given two arrays, write a function to compute their intersection.
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
	let results = [];
	let store = {};

	for (let i = 0; i < nums1.length; i++) {
		if (!store[nums1[i]]) {
			store[nums1[i]] = 1;
		} else {
			store[nums1[i]]++;
		}
	}
	for (let i = 0; i < nums2.length; i++) {
		if (store[nums2[i]]-- > 0) {
			results.push(nums2[i]);
		}
	}
	return results;
};
