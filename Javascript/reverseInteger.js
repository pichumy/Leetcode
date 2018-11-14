var reverse = function(x) {
    let num;
    if(x < 0){
        num = parseInt('-' + x.toString().slice(1).split('').reverse().join(''));
    }else{
        num = parseInt(x.toString().split('').reverse().join(''));
    }
    if(num > Math.pow(2, 31) - 1 || num < Math.pow(-2, 31)){
        return 0
    }else{
        return num;
    }
};
