const nums = [2, 4, 5, 2, 1, 2]
const k=2
let count = 0;
function findOccurrences(nums, k) {
for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k) {
        count++
    }
}
return count
}
console.log(findOccurrences(nums,k))
