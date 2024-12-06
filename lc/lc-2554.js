//problem - 2554. Maximum Number of Integers to Choose From a Range I
//https://leetcode.com/problems/maximum-number-of-integers-to-choose-from-a-range-i

//solution
/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function(banned, n, maxSum) {
    let bannedSet = new Set(banned);
    let sum = 0;
    let resCt = 0;
    let i = 1;
    while(i <= n && sum <= maxSum) {
        if(!bannedSet.has(i)) {
            sum = sum + i;
            if(sum <= maxSum) {
                resCt = resCt + 1;
                // console.log(i)
            }
        }
        i++;
    }

    return resCt;
};