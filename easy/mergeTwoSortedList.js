// 21. Merge Two Sorted Lists
// Easy
// Topics
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

 

// Example 1:


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]
 

// Constraints:

// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.


const mergeTwoLists1 = function (l1, l2) {
    if (!l1) return l2; // l1がnullの場合、l2を返す
    else if (!l2) return l1; // l2がnullの場合、l1を返す
    else if (l1.val <= l2.val) { // l1の値がl2の値以下の場合
        l1.next = mergeTwoLists1(l1.next, l2); // l1の次のノードに対して再帰的にマージを行う
        return l1; // l1を返す
    } else { // l2の値がl1の値より小さい場合
        l2.next = mergeTwoLists1(l1, l2.next); // l2の次のノードに対して再帰的にマージを行う
        return l2; // l2を返す
    }
};

const mergeTwoLists2 = function (list1, list2) {
    if (!list1 || !list2) {
        return list1 || list2;
    }
    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists2(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists2(list1, list2.next);
        return list2;
    }
};

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function arrayToList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

function listToArray(list) {
    let arr = [];
    while (list !== null) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

const q1 = mergeTwoLists2(arrayToList([1, 2, 3]), arrayToList([1,3,4]));
console.log(listToArray(q1));

const q2 = mergeTwoLists2(arrayToList([1, 2, 4]), arrayToList([1,3,4]));

console.log(arrayToList([7, 4]));