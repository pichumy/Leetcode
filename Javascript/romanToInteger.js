/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    let index = 0;
    while(index < s.length){
        switch(s[index]){
            case 'M':
                sum += 1000;
                index += 1;
                break;
            case 'D':
                sum += 500;
                index += 1;
                break;
            case 'C':
                if(s[index + 1] === 'M'){
                    sum += 900;
                    index += 2;
                }else if(s[index + 1] === 'D'){
                    sum += 400;
                    index += 2;
                }else{
                    sum += 100;
                    index += 1;
                }
                break;
            case 'L':
                sum += 50;
                index += 1;
                break;
            case 'X':
                if(s[index + 1] === 'L'){
                    sum += 40;
                    index += 2;
                }else if(s[index + 1] === 'C'){
                    sum += 90;
                    index += 2;
                }else{
                    sum += 10;
                    index += 1;
                }
                break;
            case 'V':
                sum += 5;
                index += 1;
                break;
            case 'I':
                if(s[index + 1] === 'X'){
                    sum += 9;
                    index += 2;
                }else if(s[index + 1] === 'V'){
                    sum += 4;
                    index += 2;
                }else{
                    sum += 1;
                    index += 1;
                }
                break;
        }
    }
    return sum;
};
