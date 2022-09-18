function pivotIndex(nums) {
    let totalSum = 0;

    for (let num of nums) {
        totalSum += num;
    }
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - nums[i] - leftSum) return i;
        leftSum += nums[i];
    }

    return -1;

};