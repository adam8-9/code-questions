function search(arg1){
  let placeholder = 0
  arg1.forEach((el,index)=>{
    placeholder = arg1[index]
    if(placeholder < arg1[index+1]){
      placeholder = arg1[index+1]
    }
  })
  return placeholder
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
console.log(search([5,3,7,8]));
