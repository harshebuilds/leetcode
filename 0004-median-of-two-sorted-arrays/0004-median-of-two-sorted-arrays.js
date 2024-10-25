/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2);
    arr = arr.sort((a,b)=>a-b);

    if(arr.length %2 ==0){
        let c = (arr[(arr.length/2)-1] + arr[arr.length / 2]) /2;
        return c;
    }
    else{
        return arr[Math.floor(arr.length / 2)];
    }
};