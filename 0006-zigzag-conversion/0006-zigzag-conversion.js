/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let res = "";
    let boo = false;
    if (s.length <= numRows || numRows == 1) {
        res = s;
    }
    else {
        for (let i = 0; i < numRows; i++) {
            let ptr = i;
            boo = false;
            let sub = 0;
            while (ptr < s.length) {
                if (i == 0 || i == numRows - 1) {
                    sub = 2 * (numRows - 1);
                }
                else {
                    if (boo == false) {
                        sub = (numRows - 1 - i) * 2;
                        boo = true;
                    }
                    else {
                        sub = i * 2;
                        boo = false;
                    }
                }
                res += s[ptr];
                ptr = ptr + sub;
            }
        }
    }
    return res;
};