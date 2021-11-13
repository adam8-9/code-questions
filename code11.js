function verify(dataType,arg2,arg3){
let check = /[aeiou]/g
if( dataType.match(check).join('') === arg2 || dataType.match(check).join('')== arg3){
   console.log(true)
}
 
}
