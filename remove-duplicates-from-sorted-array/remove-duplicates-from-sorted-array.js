/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    k = 1
    for(i=1;i<nums.length;i++){
        if(nums[i] != nums[i -1]){
            nums[k] = nums[i]
        k++
        }
        
    }
    return k
};

// nums=[1,1,2]
// nums[0] = 1
// nums[1] = 1
// nums[2] = 2

// i= 1, nums[1] = 1, k =1
// 1 != 1, false -> tidak masuk ke dalam if

// i = 2, nums[2] = 2, k = 1
// 2 != 1 -> true
// nums[1] = nums[2] -> nums[1] = 2





