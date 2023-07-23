/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // Initialize sol and cnt to store the solution and its frequency for respective iterations...
    let sol = 0, cnt = 0;
    // For every element i in the array...
    for(let i = 0; i < nums.length; i++ ) {
        // If cnt is equal to zero, update sol as sol = i
        if(cnt == 0){
            sol = nums[i];
            cnt = 1;
        }
        // If i is equal to candidate, increment cnt...
        else if(sol == nums[i]){
            cnt++;
        }
        // Otherwise, decrement cnt...
        else{
            cnt--;
        }
    }
    // Return & print the solution...
    return sol;
};

 /*
        nums = [3,2,3]

        ==================================================
        i = 0;0<3 and cnt = 0; sol= 0
        cnt = 0 -> true 
        sol =  3
        cnt = 1

        ===================================================
        i = 1; 1<3 and cnt = 1; sol 3
        cnt== 0 -> false
        sol === nums[1] -> 3 == 2 ->false
        cnt = 0

        ===================================================

        i = 2 2 < 3
        cnt == 0 -> true
        sol = nums[2]  -> sol = 3
        cnt = 1
        ===================================================

        */