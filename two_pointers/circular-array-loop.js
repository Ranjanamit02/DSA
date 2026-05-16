/*

https://leetcode.com/problems/circular-array-loop/description/?envType=problem-list-v2&envId=two-pointers
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    const n = nums.length;
    if (n === 0) return false;

    const nextIndex = (index) => {
        let next = (index + nums[index]) % n;
        return next < 0 ? next + n : next;
    };

    for (let i = 0; i < n; i++) {
        if (nums[i] === 0) continue;

        let slow = i;
        let fast = i;
        const direction = nums[i] > 0;

        while (true) {
            slow = nextIndex(slow);
            if (nums[slow] === 0 || (nums[slow] > 0) !== direction) break;

            fast = nextIndex(fast);
            if (nums[fast] === 0 || (nums[fast] > 0) !== direction) break;
            fast = nextIndex(fast);
            if (nums[fast] === 0 || (nums[fast] > 0) !== direction) break;

            if (slow === fast) {
                if (slow === nextIndex(slow)) break;
                return true;
            }
        }

        let marker = i;
        while (nums[marker] !== 0 && (nums[marker] > 0) === direction) {
            const next = nextIndex(marker);
            nums[marker] = 0;
            marker = next;
        }
    }

    return false;
};

console.log(circularArrayLoop([1,-1,5,1,4]));