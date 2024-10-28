/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let vol = 0;
    let l=0, r=height.length -1;
    while(l < r){
        let h = Math.min(height[l],height[r])
        vol = Math.max(vol, h*(r - l) );
        if(height[l]< height[r]){
            l++;
        }
        else{
            r--;
        }

    }
    return vol;
};