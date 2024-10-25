/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let a=l1, b=l2, carry=0, sum=0;
    let ref = new ListNode(0);
    let curr = ref;
    while(a != null || b != null || carry != 0){
        sum = carry;
        if(a != null){
            sum += a.val;
            a = a.next;
        }
        if(b != null){
            sum += b.val;
            b = b.next;
        }
        carry = Math.floor(sum/10);
        curr.next = new ListNode(sum%10);
        curr = curr.next;
    }
    let ans = ref.next;

    return ans;
};