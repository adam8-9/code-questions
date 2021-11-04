function assign(array){
let object = {}
let [item1,item2,...items] = array
calc = items.reduce((a,b)=> a+b,(item1*item2))
object['calc'] = calc 
return object



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

console.log(assign([76,89,40,344,890]))
