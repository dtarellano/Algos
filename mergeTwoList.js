var mergeTwoLists = function(l1, l2) {
	let res = new ListNode(0);
	let temp = res;
	while (l1 && l2) {
		if (l1.val < l2.val) {
			res.next = l1;
			l1 = l1.next;
		} else {
			res.next = l2;
			l2 = l2.next;
		}
		res = res.next;
	}
	if (l1) {
		res.next = l1;
	}
	if (l2) {
		res.next = l2;
	}
	return temp.next;
};
