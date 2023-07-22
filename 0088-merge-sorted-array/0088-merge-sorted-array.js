/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = nums1.length - 1; i >= 0; i--) {
        if (p1 >= 0 && nums1[p1] >= nums2[p2]) {
        nums1[i] = nums1[p1];
        p1--;
       } else if (p2 >= 0) {
           nums1[i] = nums2[p2];
           p2--;
       }
   }
};

 /* console

        p1 = 2
        p2 = 2
        nums1 =  [1,2,3,0,0,0]
        nums2 = [2,5,6]
        
        =================================================================================================================

        i = 5
        if (p1 >= 0 && nums1[p1] >= nums2[p2]) -> if( 2 >= 0 && nums1[2] >= nums2[2]) -> if( 2 >= 0 && 3 >= 6 ) -> false -> masuk ke bagian else

        if(p2 >= 0) -> if ( 2 > 0 ) -> true -> masuk ke kurung kurawal
        nums1[i] = nums2[p2] -> nums1[5] = 6
        
        nums1 = [1,2,3,0,0,6]
        nums2 = [2, 5, 6]
        p1 = 2
        p2 = 1
        
        =================================================================================================================

        i = 4
        if( p1 >= 0 && nums1[p1] >= nums2[p2] ) -> (2 >= 0 && nums1[2] >= nums2[1] ) -> ( 2 >= 0 && 3 >= 5 ) -> false ->masuk ke bagian else

        if( p2 >= 0) -> ( 1 > 0 ) -> true
        nums1[i] = nums2[p2] -> nums1[4] = nums2[1] -> nums1[4] = 5
        
        nums1= [1,2,3,0, 5, 6]
        nums2 = [2, 5, 6]
        p1 = 2
        p2 = 0 
        
        =================================================================================================================

        i = 3
        if( p1 >= 0 && nums1[p1] >= nums2[p2] ) -> ( 2 >= 0 && nums1[2] >= nums2[0] )  -> ( 2 >=  0 && 3 >= 2) -> true -> masuk ke kurung kurawal
        
        nums1[i] = nums1[p1]; -> nums1[3] = nums1[2] -> nums1[3] = 3
        
        nums1= [1, 2, 3, 3, 5, 6]
        nums2 = [2, 5, 6]
        p1 = 1
        p2 = 0
        
        =================================================================================================================

        i = 2
        if( p1 >= 0 && nums1[p1] >= nums2[p2] ) -> ( 1 >= 0 && nums1[1] >= nums2[0] ) -> ( 1 >= 0 && 2 >= 2) -> true -> masuk ke kurung kurawal
        nums1[i] = nums1[p1]; -> nums1[2] = nums1[1]; ->  nums1[2] = 2
        
        nums1 = [1, 2, 2, 3, 5, 6]
        nums2 = [2, 5, 6]
        p1 = 0
        p2 = 0
        
        =================================================================================================================

        i = 1
        if( p1 >= 0 && nums1[p1] >= nums2[p2] ) -> ( 0 >= 0 && nums1[0] >= nums2[0] ) -> ( 0 >= 0 && 1 >= 2 ) -> false -> masuk ke bagian else
        
        if (p2 >= 0) -> ( 0 >= 0 ) -> true
        nums1[i] = nums2[p2]; -> nums[1] = nums2[0] -> nums[1] = 2
        nums1 = [1, 2, 2, 3, 5, 6]
        
        =================================================================================================================

        i = 0
        false semua
        
        =================================================================================================================

        */

