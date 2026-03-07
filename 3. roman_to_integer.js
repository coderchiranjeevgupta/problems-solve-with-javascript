// Given a Roman numeral string, your task is to convert it into an integer. Roman numerals are built from seven symbols — I, V, X, L, C, D, and M — representing the values 1, 5, 10, 50, 100, 500, and 1000 respectively. Normally, symbols are written from largest to smallest left to right and simply added together, so XII is just 10 + 1 + 1 = 12. However, there are six special subtraction cases where a smaller symbol placed directly before a larger one means you subtract it instead — for example, IV means 5 - 1 = 4, IX means 10 - 1 = 9, XL means 50 - 10 = 40, XC means 100 - 10 = 90, CD means 500 - 100 = 400, and CM means 1000 - 100 = 900. So for a more complex example like MCMXCIV, you break it down as M + CM + XC + IV which gives you 1000 + 900 + 90 + 4 = 1994. You are guaranteed that the input is always a valid Roman numeral in the range of 1 to 3999, and your job is to correctly handle both the additive and subtractive cases to produce the right integer output.
var romanToInt = function(s){
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for(let i = 0; i < s.length; i++){
        const curr = map[s[i]];
        const next = map[s[i + 1]];

        if(next && curr < next){
            result -= curr;
        }
        else{
            result += curr;
        }
    }

    return result;
}
