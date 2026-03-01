# The Palindrome Number problem requires determining whether a given integer is a palindrome. An integer is considered a palindrome if it reads the same forward and backward. You are given an integer x, and your task is to return true if x is a palindrome and false otherwise. Negative numbers are not considered palindromes because the minus sign makes the number different when reversed. The solution should correctly handle the full range of 32-bit signed integers. Additionally, as a follow-up challenge, the problem asks whether the palindrome check can be performed without converting the integer into a string.
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        
        original = x
        reversed_num = 0

        while x > 0:
            digit = x % 10
            reversed_num = reversed_num * 10 + digit
            x = x // 10

        return original == reversed_num
