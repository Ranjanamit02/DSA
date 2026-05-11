/**
 * 
 * https://leetcode.com/problems/sort-colors/solutions/?envType=problem-list-v2&envId=two-pointers
 * 
 */

var sortColors = function(nums) {
    
    let countZero =0;
    let countOne = 0;
    let countTwo = 0;

    for(let i=0;i<nums.length;i++){
        switch(nums[i]){
            case 0:
                countZero++;
                break;
            case 1:
                countOne++;
                break;
            case 2:
                countTwo++;
                break;
            default:
                break;
        }
    }

    let index = 0;
    while(countZero) {
        nums[index] = 0;
        countZero--;
        index++;
    }
    while(countOne){
        nums[index] = 1;
        countOne--;
        index++;
    }
    while(countTwo){
        nums[index] = 2;
        countTwo--;
        index++;
    }
};