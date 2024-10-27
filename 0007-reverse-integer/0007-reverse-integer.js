/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let ans = 0;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    while (x != 0) {
        let y = x % 10;
        if ((ans <( INT_MIN / 10)) || (ans > (INT_MAX / 10))) {
            return 0;
        }
        ans = (ans * 10) + y;
        x = (x / 10) | 0;
    }
    return ans;

};