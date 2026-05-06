/****
 * 
 * https://leetcode.com/problems/3sum/description/?envType=problem-list-v2&envId=two-pointers
 * 
 */

var threeSum = function(nums) {

    // Sort the list first so duplicates are adjacent and two-pointer logic works.
    nums.sort((a,b)=>a-b);

    // Output will hold the unique triplets that sum to zero.
    let output = [];

    // Iterate through nums with i as the first element of the triplet.
    for(let i =0;i<nums.length - 2;i++){
        // Skip duplicate values for the first element to avoid repeated triplets.
        if(i>0 && nums[i]==nums[i-1]) continue;

        let left = i+1;
        let right = nums.length - 1;

        // Use two pointers to find pairs that sum with nums[i] to zero.
        while(left<right){
            let sum = nums[i] + nums[left] + nums[right];

            if(sum ==0){
                // Found a valid triplet.
                output.push([nums[i],nums[left],nums[right]]);

                // Skip over duplicate values for left and right.
                while(left<right && nums[left] == nums[left+1]) left++;
                while(left <right && nums[right] == nums[right-1]) right--;

                // Move both pointers inward after recording the triplet.
                left++;
                right--;
            } else if(sum >0 ){
                // Sum is too large, decrease it by moving right leftward.
                right --;
            } else{
                // Sum is too small, increase it by moving left rightward.
                left ++;
            }
        }
    }
    return output;
};

console.log(threeSum([-1,0,1,2,-1,-4]));