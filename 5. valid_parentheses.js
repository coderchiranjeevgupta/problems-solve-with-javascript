// Given a string containing only the bracket characters (, ), {, }, [, and ], your task is to determine whether the string is valid and return true or false accordingly. A string is considered valid under three conditions — every opening bracket must be closed by the same type of closing bracket, every closing bracket must have a corresponding opening bracket, and brackets must be closed in the correct order. The ordering rule is the trickiest part, meaning that a string like "([)]" is invalid even though it has the same number of opening and closing brackets of each type, because the brackets are interleaved in the wrong order rather than properly nested inside one another. On the other hand, "([])" is perfectly valid because the square brackets are fully opened and closed inside the round brackets, respecting the nesting order. Think of it like a set of Russian dolls — each inner bracket pair must be completely contained within its outer bracket pair, and you can never close an outer bracket before closing all the inner ones that were opened after it. Edge cases to consider include an empty string, an odd-length string which can never be valid, and a string that starts with a closing bracket which should immediately return false.
var isValid = function(s){
    const stack = [];
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for(let char of s){
        if(char === '(' || char === '{' || char === '['){
            stack.push(char);
        } 
        else{
            if(stack[stack.length - 1] !== map[char])
            return false;
            stack.pop();
        }
    }

    return stack.length === 0;
};
