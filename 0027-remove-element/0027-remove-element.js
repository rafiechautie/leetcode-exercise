/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    var j = 0;
    for(var i=0;i<nums.length;i++)
    {
        if(nums[i]!=val)
        {
            nums[j++] = nums[i];
        }
    }
    return j;
};

// ilustrasi
// num = [3,2,2,3]
// val = 3
// removeElement(num, val)

// j = 0

// i=0, i<4
// dilakukan validasi apakah nums[0] != val (3 != 3)-> tidak
// jika true maka nums[1] = num[0], jika salah maka dilakukan perulangan kembali 

// i = 1, i<4
// nums[1] != val (2 != 3) -> true
// jika true, maka nums[0 = num[1] -> nums[1] = 2

// i = 2, i<4
// nums[2] != 3 -> 2 != 3 -> true -> jalankan kode if
// nums[2] = nums[1] -> nums[2] = 2

// i = 3, i<4
// nums[3] != 3 -> 3 != 3 -> false -> lanjut ke perulangan selanjutnya

// didapat bahwa j = 2

// catatan: ingat j++ tu ialah jnya ada dulu baru setelahnya dijalankan