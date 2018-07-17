// The tricky part of this question is handling edge cases.
ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
       int carry_over = 0;
       ListNode *head = new ListNode(0);
       ListNode *target = head;
       while(true){
           int sum;
           // You need to iterate through both lists since it's totally valid for one to be longer than the other.
           if(l1 != NULL && l2 != NULL){
               sum = l1->val + l2->val + carry_over;
               l1 = l1->next;
               l2 = l2->next;
           }else if (l1 != NULL){
               sum = l1->val + carry_over;
               l1 = l1->next;
           }else if (l2 != NULL){
               sum = l2->val + carry_over;
               l2 = l2->next;
           }else {
               if (carry_over > 0){
                   ListNode *new_node = new ListNode(1);
                   target->next = new_node;
               }
               break;
           }
           carry_over = 0;
           if(sum >= 10){
               sum = sum - 10;
               carry_over++;
           }
           ListNode *new_node = new ListNode(sum);
           target->next = new_node;
           target = target->next;
       }
       // I basically skip the head node in the return, since it's the rest of the linked list that will have my actual numbers.
       return head->next;
   }
