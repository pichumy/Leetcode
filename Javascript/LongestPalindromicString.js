var longestPalindrome = function(s) {
    // Empty string input 
    if(s.length === 0){
        return ''; 
    }
    const store = new Array(s.length).fill(false).map(() => new Array(s.length).fill(false));
    // initialize default return 
    let longest = s[0]; 
    
    // strings of length 1 are palindromes by default 
    for(let i = 0; i < s.length; i++){
        store[i][i] = true; 
    }
    // strings of length 2, for when two letters next to eachother are the same value. 
    let start = 0; 
    for(let i = 0; i < s.length-1; i++){
        // If the next value is the same value... these two make a palindrome as a pair. 
        if(s[i] === s[i + 1]){
            store[i][i + 1] = true; 
            start = i;
            longest = s[i] + s[i + 1];  
        }
    }
    
    // for substrings of greater than length 3 
    for(let len = 3; len <= s.length; len++){
        // starting index of substring
        for(let i = 0; i < s.length-len+1; i++){
            // ending index of substring
            let j = i + len -1; 
            // If the substring inbetween the start and the end is a palindrome
            // and the character on the left is === the character on the right
            // we have a new palindrone 
            if(store[i+1][j-1] && s[i] === s[j]){
                store[i][j] = true; 
                let palindrome = s.slice(i, i + len); 
                if(palindrome.length > longest.length){
                    if(palindrome.length === s.length){
                        return palindrome; 
                    }
                    longest = palindrome; 
                }
            }
        }
    }
    return longest; 
};

