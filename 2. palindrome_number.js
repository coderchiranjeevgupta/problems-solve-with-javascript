// Given an integer, your task is to determine whether it is a palindrome and return true or false accordingly. A number is considered a palindrome when it reads the same forwards and backwards — for example, 121 reads as 121 from both directions, making it a palindrome. However, negative numbers like -121 are never palindromes because the minus sign only appears on the left side, making it read as 121- from right to left. Similarly, numbers like 10 are not palindromes because reversing them produces a leading zero, giving you 01 which is not the same as the original. As a follow-up challenge, try to solve it without converting the integer into a string, meaning you should work with the number mathematically using operations like division and modulo instead of string or array manipulation.
var isPalindrome = function(x){
    if(x < 0 || (x % 10 === 0 && x !== 0)) 
    return false;

    let reversed = 0;
    while (x > reversed){
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }

    return x === reversed || x === Math.floor(reversed / 10);
};
