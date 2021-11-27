function func(arg1,arg2){
  let a;
  let b = {}
  arg1.forEach((i)=>{
      if(i in arg2 ){
        a= arg2.func()

        if(b[i] == undefined)b[i] = 1
        else b[i] +=1

      }       
  })
  return [a,b]
  
  
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
let object = {
  'a':'results',
  func(){return this.a},
   'b':'results',
  func(){return this.b},

}

console.log(func(['x','a','v','s','b','a'],object))
