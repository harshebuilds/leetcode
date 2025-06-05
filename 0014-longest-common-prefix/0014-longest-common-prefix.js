/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 1){
        return strs[0];
    }
    res='';
    tes='';
    flag=true;
    for(i = 1;i <= strs[0].length;i++){
        for(j=1;j< strs.length;j++){
            test_str = strs[0].substr(0,i);
            flag=strs[j].startsWith(test_str);
            if(flag == false){
                break;
            }
            else{
                res = test_str;
            }
        }
        if(flag == false){
                break;
            }
        else{
            tes = res;
        }
    }
    return tes;
};