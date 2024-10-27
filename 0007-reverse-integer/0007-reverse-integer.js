/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let n = x;
    let s = "";
    if (n < 0) {
        s += '-';
        n = Math.abs(n)
    }
    while (n > 0) {
        s += n % 10;
        n = Math.floor(n / 10);
    }
    let ans = Number(s);
    if (ans > 2147483647 || ans == NaN || ans < -2147483648) {
        return 0;
    } else {
        return ans;
    }

};