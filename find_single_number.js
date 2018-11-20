/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (i = 0; i < nums.length; i++) {
    var tempArray = nums.slice()
    tempArray.splice(i, 1)
    if (!tempArray.includes(nums[i])) {
      console.log(nums[i])
      return nums[i]
    }
  }
}