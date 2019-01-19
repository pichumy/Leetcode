/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let result = null;
    lists.forEach(listNode => {
        result = sortedMerge(result, listNode);
    })
    return result; 
};

/* list1 = ListNode list2 = ListNode */

const sortedMerge = function(list1, list2){
    let result = null;
    if(list1 === null){
        return list2;
    }else if(list2 === null){
        return list1;
    }
    if(list1.val <= list2.val){
        result = new ListNode(list1.val);
        result.next = sortedMerge(list1.next, list2)
    }else{
        result = new ListNode(list2.val);
        result.next = sortedMerge(list1, list2.next);
    }
    
    return result;
}
