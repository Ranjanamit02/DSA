/**
 * 
 * https://leetcode.com/problems/next-permutation/description/?envType=problem-list-v2&envId=two-pointers
 * 
 * 
 * 
 */

var nextPermutation = function(nums) {
    let right = nums.length - 2;

    while(right >=0 && nums[right] >= nums[right+1]) right--;

    if(right >=0 ){
        let j = nums.length-1;
        while(nums[j]<= nums[right])j--;
        [nums[j],nums[right]] = [nums[right],nums[j]]
    }
    let left = right + 1;
    right = nums.length -1;
    while(left < right){
        [nums[left],nums[right]] = [nums[right],nums[left]];
        left++;
        right--;
    }

    return nums;

}
console.log(nextPermutation([1,3,2])); 