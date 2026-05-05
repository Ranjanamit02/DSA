/***
 * 
 * https://leetcode.com/problems/container-with-most-water/description/?envType=problem-list-v2&envId=two-pointers
 * 
 * 
 */

var maxArea = function(height) {
    let left = 0;
    let right = height.length-1;
    let maxArea = 0;
    while(left<right){
        let width = right - left;
        let minHeight = Math.min(height[left],height[right]);
        let area = width * minHeight;
        if(area > maxArea){
            maxArea = area;
        }
        if(height[left] < height[right]){
            left++;

        } else{
            right --;
        }
    }

    return maxArea;
};


console.log(maxArea([8,7,2,1]));