var isMatch = function(s, p) {
  let lastRemoved = '';
  let removable = [];
  while(p.length > 0){
    switch(p[0]){
      case '.':
        break;
      case '*':
        break;
      default:
      // Case of single character match
        if(s[0] === p[0]){
          lastRemoved = p[0];
          s = s.slice(1);
          removable = [];
        }else{
          if(removable.length > 0 && removable[0] === s[0]){
            removable.shift();
          }else{
            // case a*
            if(p[1] !== "*"){
              return false;
            }else{
              lastRemoved = p[0];
            }
            removable = [];
          }
        }
        p = p.slice(1);
    }

  }
}
