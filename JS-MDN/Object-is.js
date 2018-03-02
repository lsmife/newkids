/*
Object.is(val1,val2),不兼容IE
判断2个值是否严格相等，对+—0和NaN做了修正
特殊：
Object.is(NaN,NaN) //->true
Object.is(NaN,0/0) //->true
Object.is(0,-0) //->false
Object.is(+0,-0) //->false
其他：
Object.is(null,null) //->true
Object.is([],[]) //->false
Object.is(undefined,undefined) //->true
Object.is(0,false) //->true
*/
// 兼容方式（即实现原理）
if(!Object.is){
  Object.is = function(x,y){
    if(x === y){
      //(+)0===-0 , 1/(+)0 !== 1/-0
      return x !== 0 || 1/x === 1/y;
    }else{
      //NaN == NaN
      return x !== x && y !== y
    }
  }
}
