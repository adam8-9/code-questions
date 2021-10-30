function create(arg1,arg2){
   let newObject = {}
   arg1.forEach((el,index)=>{
      if(arg2(el)){
          newObject[index] = el 
      }
   })
  return newObject
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
console.log(create([999,88,42,56],((x)=> x%2 === 0)))
