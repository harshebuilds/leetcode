/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const re = new RegExp(`^${p}$`);
    return re.test(s);
};