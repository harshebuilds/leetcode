/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let res;
    let len = 0;

    for (let a = 0; a < s.length; a++) {
        let l = a, r = a;
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            if ((r - l + 1) > len) {
                res = s.slice(l, r + 1);
                len = res.length;

            }
            l--;
            r++;
        }

        l = a, r = a + 1;
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            if ((r - l + 1) > len) {
                res = s.slice(l, r + 1);
                len = res.length;

            }
            l--;
            r++;
        }
    }
    return res;
};