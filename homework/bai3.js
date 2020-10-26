let arr = prompt("nhap vao mot mang");
let nums = arr.split(",").map(x => Number(x))
for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length && j != i; j++) {
        if (nums[i] == nums[j]) {
            nums.splice(i,1);
            nums.splice(j,1);
        }
    }
};
console.log(nums)