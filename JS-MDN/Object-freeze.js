var obj ={a:12,b:{age:56}}
Object.freeze(obj)
冻结对象obj,obj不可拓展
Object.isFrozen(obj) //=>true
Object.isExtensible(obj) //=>false
obj.a =14//=>静默不改变obj
obj.b.age=12//=>可以改变，浅冻结
Object.defineProperty(obj,"c",{value:33}) //typeError
