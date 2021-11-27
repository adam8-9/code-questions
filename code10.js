function search(array,num){
  let sorted = array.sort((a,b)=>a-b)
  let index = -1
  let found = false
  let first = 0
  let last = array.length-1
  
  while(first<= last && found===false){
      let midpoint = Math.floor((first+last)/2)
     // console.log('mid '+midpoint)
      if(array[midpoint] == num){
        found =true
        index = midpoint
      }else if(array[midpoint]< num){
          first = midpoint + 1          
      }else{
        last = midpoint -1
      }
  }
  
return index
   
}

/*function func(arg1,arg2){
  let sorted = arg1.sort((a,b)=>a-b)
  //let x = -1
  //let result = false
  let a = 0
  let b = arg1.length-1
  
  while(a<= b){
      let pointer = Math.floor((a+b)/2)
     // console.log('mid '+pointer)
      if(arg1[pointer] == arg2){
       // result =true
        //x = pointer
        return pointer
      }else if(arg1[pointer]< arg2){
          a = pointer + 1          
      }else{
        b = pointer -1
      }
  }
  
//return  x
  
}*/

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
console.log(search([1,2,3,4,5,6],6))
