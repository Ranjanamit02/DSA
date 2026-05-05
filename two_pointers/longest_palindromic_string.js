/*
https://leetcode.com/problems/longest-palindromic-substring/description/?envType=problem-list-v2&envId=two-pointers



Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
*/


function checkPalindrome(s){
    let i=0;
    let j=s.length-1;
    let flag = true;
    while(i<=j){
        if(s[i] != s[j]){
            flag = false;
            break;
        }
        i++;
        j--;
    }
    return flag;
}

var longestPalindrome = function(s) {
    /*
        Brute force 
    */


    // let maxSubstring = '';
    // for(let i=0;i<=s.length-1;i++){
    //     for(j=s.length-1;j>=i;j--){
    //         let substring = s.substring(i,j+1);
    //         console.log("all possible substring is ",substring);
    //         // console.log(checkPalindrome(substring));
    //         if(checkPalindrome(substring) && substring.length > maxSubstring.length){
    //             maxSubstring = substring;
    //         }
            
    //     }
    // }

    // return maxSubstring;



    /*   Optimal solution 

    In this solution we don't check all the substring 
    babad 
    if aba is palindrome then go to left and right if it is same then it is palindrome 
    e.g xabax both left and right is same then palindrome 

    xabay both left and right is not same then it is not a palindrome
    */
    let maxSubstring = '';
    for(let i=0;i<=s.length-1;i++){
        /*
            odd length substring
        */
        let substring = '';
        substring = expandFromCenter(s,i,i);
        if(substring.length > maxSubstring.length) maxSubstring = substring;

        console.log("substring 1 is ",substring);
        substring = expandFromCenter(s,i,i+1);
        if(substring.length > maxSubstring.length) maxSubstring = substring;

        console.log("subtring 2 ",substring);
    }
    return maxSubstring;
};

function expandFromCenter(s,left,right){
    while(left >=0 && right <=s.length- 1 && s[left] == s[right]){
        left--;
        right++;
    }
    return s.substring(left+1,right);
}

console.log(longestPalindrome("babad"));