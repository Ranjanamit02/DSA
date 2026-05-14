/**
 * String Compression - Two Pointer Approach
 * 
 * Compress an array of characters in-place using constant extra space.
 * For each group of consecutive repeating characters:
 * - If length is 1, keep the character
 * - Otherwise, append character followed by the count
 * 
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only constant extra space used
 * 
 * https://leetcode.com/problems/string-compression/?envType=problem-list-v2&envId=two-pointers
 * 
 */

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0;  // Pointer for writing compressed data
    let read = 0;   // Pointer for reading original data
    
    while (read < chars.length) {
        let char = chars[read];
        let count = 0;
        
        // Count consecutive repeating characters
        while (read < chars.length && chars[read] === char) {
            count++;
            read++;
        }
        
        // Write the character
        chars[write] = char;
        write++;
        
        // Write the count (if count > 1)
        // For counts >= 10, write each digit separately
        if (count > 1) {
            let countStr = count.toString();
            for (let digit of countStr) {
                chars[write] = digit;
                write++;
            }
        }
    }
    
    return write;
};

// Test cases
console.log("Test Case 1:");
let chars1 = ["a", "a", "b", "b", "c", "c", "c"];
let result1 = compress(chars1);
console.log("Input: [\"a\",\"a\",\"b\",\"b\",\"c\",\"c\",\"c\"]");
console.log("Output:", result1);
console.log("Compressed array (first " + result1 + " elements):", chars1.slice(0, result1));
// Expected: 6, ["a","2","b","2","c","3"]

console.log("\nTest Case 2:");
let chars2 = ["a"];
let result2 = compress(chars2);
console.log("Input: [\"a\"]");
console.log("Output:", result2);
console.log("Compressed array:", chars2.slice(0, result2));
// Expected: 1, ["a"]

console.log("\nTest Case 3:");
let chars3 = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
let result3 = compress(chars3);
console.log("Input: [\"a\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\",\"b\"]");
console.log("Output:", result3);
console.log("Compressed array (first " + result3 + " elements):", chars3.slice(0, result3));
// Expected: 4, ["a","b","1","2"]

console.log("\nTest Case 4:");
let chars4 = ["a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"];
let result4 = compress(chars4);
console.log("Input: [\"a\" (11 times)]");
console.log("Output:", result4);
console.log("Compressed array (first " + result4 + " elements):", chars4.slice(0, result4));
// Expected: 3, ["a","1","1"]

console.log("\nTest Case 5:");
let chars5 = ["a", "a", "a", "b", "b", "c", "c", "c"];
let result5 = compress(chars5);
console.log("Input: [\"a\",\"a\",\"a\",\"b\",\"b\",\"c\",\"c\",\"c\"]");
console.log("Output:", result5);
console.log("Compressed array (first " + result5 + " elements):", chars5.slice(0, result5));
// Expected: 6, ["a","3","b","2","c","3"]
