# The Two Sum problem requires finding two distinct numbers in a given list of integers whose sum equals a specified target value. You are provided with an array of integers and a target number, and your task is to return the indices of the two elements that add up to the target. It is guaranteed that exactly one valid pair exists in the array, and the same element cannot be used more than once. The order in which the indices are returned does not matter.
class Solution:
    def twoSum(self, nums, target):
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] + nums[j] == target:
                    return [i, j]
