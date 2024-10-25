/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let a;
    let l = 0;
    if (s.length > 1) {
        for (let i = 0; i < s.length - 1; i++) {
            a = s[i];
            for (let j = i + 1; j < s.length; j++) {
                if (a.includes(s[j])) {
                    break;
                }
                else {
                    a += s[j];
                }
            }
            l = Math.max(l, a.length);
        }
    }
    else{
        l =s.length;
    }


    return l;
};