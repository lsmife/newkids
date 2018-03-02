Object.defineProperty(obj,"prop",descriptor)
属性描述符（descriptor）：数据属性描述符（data descriptor）, 访问器属性描述符（accessor descriptor）
数据属性描述符（data descriptor）：value 、writable
访问器属性描述符（accessor descriptor）：get 、set
2种属性不同时存在，重写任意一个都会覆盖之前的
configurable
1、改变属性描述符（this property descriptor may be changed）
2、输出该属性（the property may be deleted）
enumerable
1、属性可以被枚举（this property shows up during enumeration (for...in loop or Object.keys method) ）
value
1、属性值（Can be any valid JavaScript value (number, object, function, etc)）
writable
1、通过对象.属性的方式可以改变属性值（the property may be changed with an assignment operator）
get
1、获取属性值的函数
A function which serves as a getter for the property,The return value will be used as the value of the property.Defaults to undefined.
set
1、设置属性值的函数
例子：
var a ={}
Object.defineProperty(a,"sname",{
  value:"lsmife",
  writable:true,
  configurable:true,
  enumerable:true,
})
a => {sname:"lsmife"}
a.sname = "lshis";
a => {sname:"lshis"}

var vvalue = 12
Object.defineProperty(a,"sname",{
  get:function(){
    return vvalue
    // return this.sname
  },
  set:function(val){
    this.vvalue=val //属性不能被直接被改变 this.sname = val 是错误的
  },
  configurable:true,
  enumerable:true,
})
a => {sname:"lsoomi"}
a.sname = "lscshis";
a => {sname:"lscshis"}
