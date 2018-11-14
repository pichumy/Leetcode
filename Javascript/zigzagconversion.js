/* Explanation:
  After drawing out how this problem works, it's surprisingly simple.
  Essentially, the row that a certain letter should be put in follows a certain order.
  In the case of PAYPALISHIRING and numRows = 3, the pattern would be
  0 1 2 1 0 1 2 1 0 1 2 1 0 1
  P A Y P A L I S H I R I N G
  where the numbers above each letter indicate which row it goes into. Once you figure out this part, the algorithmn is simple.
*/
var convert = function(s, numRows) {
    // Empty string case.
    if(s.length === 0){
        return "";
    }
    // Case only one row.
    if(numRows === 1){
        return s;
    }
    // initialize a hash with the same number of elements as there are rows
    let hash = {};

    // When the row to add to should be increasing, changeBy is 1.
    // When the row to add to should be decreasing, changeBy is -1.
    let changeBy = -1;

    // Keep track of which row to add the next letter to
    let currentRow = 0;
    for(let i = 0; i < s.length; i++){
        if(hash[currentRow]){
            hash[currentRow] = hash[currentRow] + s[i];
        }else{
            hash[currentRow] = s[i];
        }
        if(currentRow === 0 || currentRow === numRows - 1){
            changeBy = changeBy * -1;
        }
        currentRow = currentRow + changeBy;
    }
    let output = "";
    for(let i = 0; i < numRows; i++){
        if(hash[i]){
            output = output + hash[i];
        }
    }
    return output;
};
