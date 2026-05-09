/****
 * 
 * https://leetcode.com/problems/4sum/description/?envType=problem-list-v2&envId=two-pointers
 * 
 * 
 * the approach is same as 3 sum problem
 * 
 * sort and then remove duplicate eliment once it is considered in the quadruplets 
 * 
 * 
 */

var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let output = [];

    for(let i = 0;i<nums.length-3;i++){
        if(i>0 && nums[i] == nums[i-1]) continue;

        if(nums[i] + nums[i+1] + nums[i+2] + nums[i+3] > target) break;
        if(nums[i] + nums[nums.length-3] + nums[nums.length-2] + nums[nums.length-1] < target) continue;

        for(let j = i+1;j<nums.length-2;j++){
            if(j>i+1 && nums[j] == nums[j-1]) continue;
            if(nums[i] + nums[j] + nums[j+1] + nums[j+2] > target) break;
            if(nums[i] + nums[j] + nums[nums.length-2] + nums[nums.length-1] < target) continue;
            
            let left = j+1;
            let right = nums.length - 1;
            while(left < right){
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if(sum==target){
                    output.push([nums[i],nums[j],nums[left],nums[right]]);
                    while(left<right && nums[left] == nums[left+1]) left++;
                    while(left<right && nums[right] == nums[right-1]) right--;
                    left++;
                    right--;
                }else if(sum<target){
                    left++;
                } else{
                    right--;
                }

            }

            
        }
    }
    return output;
}

console.log(fourSum([2,2,2,2,2],8))