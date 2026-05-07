/*****
 * 
 * https://leetcode.com/problems/3sum-closest/description/?envType=problem-list-v2&envId=two-pointers
 * 
 */


/*


    here the idea is to first sort the array so that we can easily find the sum and check if sum is greater than target then move right pointer to left
    if sum is lesser than target then move left pointer to the right

*/


var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let closestSum = Infinity;
    let actualSum;
    for(let i =0;i<nums.length - 2; i++){
        let left = i+1;
        let right = nums.length -1;

        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];
            console.log(" nums[i] + nums[left] + nums[right]; ", nums[i],nums[left]+nums[right])
            let differenceFromTarget = Math.abs(target - sum);
            if( differenceFromTarget == 0){
                actualSum = sum;
                break;
            }
                
            if(closestSum > differenceFromTarget){
                closestSum = differenceFromTarget;
                actualSum = sum;
            }

        
            if(sum < target) left++;
            else right--;
        }
    }
    return actualSum;
};

console.log(threeSumClosest([1,1,1,0],100));