/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;
    let a = s.trim();
    let si = 1;
    if (a[0] == "-") {
        si = -1;
    }
    if (a[0] == "-" || a[0] == "+") {
        a = a.substring(1);
    }
    let res = "";
    let b = 0;
    while (b < a.length) {
        if (isNaN(parseInt(a[b]))) {
            break;
        }

        res += a[b];
        b++;
    }
    if (Number(res)*si < INT_MIN || Number(res)*si > INT_MAX) {
        if (Number(res)*si > 0) {
            return INT_MAX;
        } else {
            return INT_MIN;
        }
    } else {
        return Number(res) * si;
    }

};