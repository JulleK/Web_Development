var twoSum = function (nums, target) {
    for (let i in nums) {
        for (let j in nums) {
            if (nums[i] + nums[j] === target && i !== j) {
                let result = []
                result.push(i, j)
                return result
            }
        }
    }
};

