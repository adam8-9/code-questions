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
