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
