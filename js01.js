// 数据类型包含：基本数据类型、对象类型
// 基本数据类型：Null Undefine String Number Boolean 
// 基本类型特点：
// Object类型：function date []
// Object类型特点：

// var data; //undefine
// data='lsmife';//string
// data=124;//number
// data=true;//boolean
// data=new Date();//object
// data=null;//object
// data=function(){alert('')};//function
// data={}

//NUll类型
// Null 类型是一个只有一个值的数据类型，即特殊的值 null。它表示一个空对象引用(指 针)，而 typeof 操作符检测 null 会返回 object。
//对象初始化
// var obj={} //对象已经存在
// var obj=null //声明一个空对象
//判断对象是否存在
// if(obj !=null){
//     console.log('对象已经存在了');
// }

// 基础类型变量初始化
// var num=0;
// var str='';
// var boolean=true;
// null 和 undefined 都是表示空或不存在的，所以值是相等的，但是类型不同object 和 undefined
// null 表示空对象 undefined 表示空基础类型

//undefined类型
// 变量在只申明未赋值的情况下出现，变量被隐式赋值为undefined;
// 变量在未申明未赋值，直接输出变量值会报错，使用typeof检测，不报错会返回undefined

//Boolean类型转换
// 1、强制转换（显示转换）Boolean(变量)
// var data=12/0*0;//转换字符串
// var data='12';//转换数字
// var data=true;//boolean类型
// console.log(Boolean(data));

// 2、隐式转换 if()
// if(data){
//     console.log('真')
// }else{
//     console.log('假')    
// }
// 3、转换规则
// 1、非空字符串 为真，空字符串 为假
// 2、非0及NaN的数字 为真，0和NaN 为假
// 3、任何对象 为真
// 4、null 为假
// 4、undefined 为假

//Number类型

//八进制（前1位0后面的是【0-7】）
// var a=075;
// console.log(a)
//十六进制（前2位0x后面的是【0-9A-F】）
// var a=0x12345678909abcdef232;
// console.log(a)
//浮点型
// 不允许出现03.8，00.8这种表达，前面的3是不允许的，整型可以
// console.log(0.1+0.2) //0.30000000000000004 3后面15个0然后4

// 数值的最值及超过最值后的显示
// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.POSITIVE_INFINITY)
//判断是否超过最值范围，如果没有为true，否则isFinite为false，
// var a=100;
// console.log(isFinite(a))

//NaN Number.NaN=>NaN即是值又是属性
// 12/0 => Infinity
// 0/0 =>NaN
// 12/0*0=>NaN
// console.log(typeof NaN)
//NaN与任何计算都为NaN
// console.log(NaN + 1)
// NaN 与任何值都不相等包括自己
// console.log(NaN==0)
// console.log(NaN==false)
// console.log(NaN==NaN)
// 判断是否为NaN isNaN
// var box=0/0;//true
// var a=12/0;//false
// var a=12/0*0;//true
// var box=25;//false
// var box='25';//false
// var box;//true
// var box='lsmife';//true
// var box=true;//false
// var box={};//true
// var box=undefined;//true
// var box=null; //false
// console.log(isNaN(box))
// 对象再转换为基础类型的时候，首先调用valueOf方法，确定返回值是否能转换为数值，如果不需要，则调用toString方法，然后测试返回值
// var box=null; //false ,空对象null调用valueOf方法转换为0;
// var a={
//     toString:function(){
//         return 123;
//     }
// }
// console.log(isNaN(a))//false
// var a={
//     valueOf:function(){
//         return 124
//     }
// }
// console.log(isNaN(a))//false
// Number类型转换
// 1、强制类型转换Number转型函数（任意类型转为数字）parseInt parseFloat(字符类型转为数字)
// var a=Number('04569');//4569 字符转为数字
// var a=Number('045');//45 字符转为数字
// var a=Number(045);//37 数字八进制转为十进制
// var a=Number('070');//70 字符转为数字
// var a=Number('');//0 字符转为数字
// var a=Number('08.90');//8.9 字符转为数字（前后的0都去掉了 ）
// var a=Number('123lese78');//NaN 
// var a=Number(null);//0
// var a=Number(undefined);//NaN 
// console.log(a)

// parseInt类型转换
//特点总结：
// 只针对数字字符和数字起作用，其他(非数字字符、布尔、对象、Null及undefined)返回结果都是NaN
// 数字字符中，浮点型的字符，只取整数部分
//parseInt注意点（根据入参类型的不同进行不同的转化）
// 1、传入数字的情况按照数字的规则进行转换八进制、十六进制、二进制转为十进制输出,对于浮点型与number存在区别，省去了小数位
// 2、八进制字符和二进制字符，通常按照十进制字符来处理，如果想按照各自的字符类型转换为十进制，需要限定输入字符类型，也就是需要加上第二个参数
// 3、浮点型，只取整数部分，其他按照正常规则,不进行四舍五入

// var a=parseInt('123.9') //123
// var a=parseInt(123.9) //123
// var a=parseInt(123) //123
// var a=parseInt(null)//NaN
// var a=parseInt({})//NaN
// var a=parseInt(undefined)//NaN
// var a=parseInt(true)//NaN
// var a=parseInt('12') //12
// var a=parseInt('12les') //12
// var a=parseInt('le12') //NaN
// var a=parseInt('12lse23') //12
// var a=parseInt('0x1f')//31
// var a=parseInt('1f',16)//31
// var a=parseInt(070)//56
// var a=parseInt('070')//56
// var a=parseInt('070',8)//31
// var a=parseInt('0100010',2)//31
// var a=parseInt('0100010')//31
// var a=parseInt('12.8'),b=Number('12.8') //12,12.8 浮点型
// var a=parseInt(070),b=Number(070) //56,56 八进制数字
// var a=parseInt('070'),b=Number('070') //70,70 八进制字符
// var a=parseInt(0x1f),b=Number(0x1f) //31,31 十六进制数字
// var a=parseInt('0x1f'),b=Number('0x1f') //31,31 十六进制字符
// var a=parseInt('010010'),b=Number('010010') //10010,10010 二进制字符
// var a=parseInt(010010),b=Number(010010) //4104,4104 二进制数字
// var a=parseInt('12lsmfie34'),b=Number('12lsmife34') //12,NaN 数字字母数字混合
// var a=parseInt('lsmfie34'),b=Number('lsmife34') //NaN,NaN 字母数字混合
// 特殊情况(parseInt对八进制字符的转换是不能直接按照八进制进行转换的)
// 八进制字符和二进制字符如果需要按照各自的字符类型转换为十进制，需要限定输入字符类型，也就是需要加上第二个参数
// var a=parseInt('070') ,b=parseInt('70',8) ,c=parseInt(070)
// var a=parseInt('0xA') ,b=parseInt('0xA',16) ,c=parseInt(0xA)
// var a=parseInt('0xALsmife') ,b=parseInt('0xALsmife',16) ,c=parseInt(0xA)
// console.log(a,b,c)

// parseFloat类型转化
// var a=parseFloat(0xA)//10
// var a=parseFloat('0xA')//0，不认识16进制字符
// var a =Number(0xA) //10
//var a=parseFloat('0123.80') //123.8
// console.log(a)


// 二进制字符、八进制字符、十六进制字符=》十进制数字 parseInt(字符,2)  parseInt(字符,8)  parseInt(字符) 
// 十进制=》二进制字符、八进制字符、十六进制字符 toString(2) toString(8) toString(10)
// 数字字符=》数字 Number(字符) 或者parseInt parseFloat,但是这两个有一些缺陷
//Number()转换总结
// console.log(Number(null))//0
// console.log(Number(undefined))//NaN
// console.log(Number({}))//NaN
// console.log(Number({toString:function(){
//     return 123
// }}))//123
// console.log(Number('12.9'))//12.9
// console.log(Number('012.90'))//12.9
// console.log(Number('12lsmife'))//NaN parseInt(可以取到整数部分)
// console.log(Number('lsmife'))//NaN


// 字符型
// 1、引号成对出现
//toString方法转换类型
// 数值转为进制字符
// var box=10;
// var b=box.toString(); //10 string
// var b=box.toString(10); //10 string
 
// var b=box.toString(2);//1010 string
// var b=box.toString(8);//12 string
// var b=box.toString(16); //a string
// console.log(b)
//null和undefined转换
// var b;//报错，无法转型undefined
// var b=null;//报错，无法转型null
// console.log( b.toString())
// boolean转换
// var c=true;
// console.log(typeof c.toString())
// obj转换
// var c={};//[object Object] string 值<=>new String({})
// console.log(typeof c.toString())
//String方法转换类型
// var b,c=null;
// console.log(String(b),String(c));//'undefined' 'null'
// console.log(typeof String(b),typeof String(c));//string string

// 对象类型
// var a=new String()
//String()转型总结
// console.log(String(true),typeof String(true))
// console.log(String(12),typeof String(12))
// console.log(String(0),typeof String(0))
// console.log(String({}),typeof String({}))
// console.log(String(null),typeof String(null))
// console.log(String(undefined),typeof String(undefined))
// console.log(String({toString:function(){
//     return 123;
// }}),typeof String({toString:function(){
//     return 123;
// }}))
// true string
// 12 string
// 0 string
// [object Object] string
// null string
// undefined string
// 123 string