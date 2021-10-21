function transform(arg1){
 const original = [...arg1]
 let sorted = arg1.sort((a,b)=>a-b);
 let position1 = original.indexOf(original[0])
 let position2 = sorted.indexOf(original[0])
 return  position2 - position1

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
console.log(transform([12030,3,20,433,4]))
