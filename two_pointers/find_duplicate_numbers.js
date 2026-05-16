/*
    https://leetcode.com/problems/find-the-duplicate-number/description/?envType=problem-list-v2&envId=two-pointers
*/

var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[0];
    
    // Phase 1: Find the intersection point of the two pointers
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);
    // Phase 2: Find the entrance to the cycle (the duplicate number)
    slow = nums[0];
    while (slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
};

console.log(findDuplicate([2,5,9,6,9,3,8,9,7,1]))

