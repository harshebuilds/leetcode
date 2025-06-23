/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    arr= s.trim().split(" ");
    let v = arr.length;
    return arr[v - 1].length;
};