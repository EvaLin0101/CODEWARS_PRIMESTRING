function primeString(s) {
      var stringLength = s.length;
      for(let i=2; i<= stringLength; i++){
            if(s.slice(0,stringLength/i).repeat(i)==s)
                  return false
      }
      return true;
 }
