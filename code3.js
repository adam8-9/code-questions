function match(arg1,arg2) {
    let count = 0;
    let match = true
    for (let i = 0; i < arg1.length; i++) {
       if(arg1.indexOf(arg1[i])!==arg2.indexOf(arg1[i])){
         count++
       }
    }
    if(count>0){
      match = false
    }
    return match
}

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
console.log(transform([1, 2, 3, 4],[1, 2, 3, 4]));




