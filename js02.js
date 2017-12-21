/*运算符 */
// var a=10,b=1;
// c=a++
// console.log(c)//10
// console.log(a)//11
// d=++b
// console.log(d)//2
// console.log(b)//2
// console.log(10+20+'是您的年龄')//30是您的年龄
// console.log('您的年龄是'+10+20)//您的年龄是1020
// var a='ab'
// console.log(a++) //NaN
// console.log(Infinity-Infinity) //NaN
// console.log(100-'')//100
// console.log(100-true)//99
// console.log(100-'ls')//NaN
// 10%0 10%false 10%null 10%'' 都是NaN

// || 运算符：
// 如果前面的为真，则立刻返回前面的值,不关心后面的值是什么
// 如果前面的为假，则返回后面的值，也不关心后面的值是什么

// && 运算符：
// 如果前面的为假，则立刻返回前面的值,不关心后面的值是什么
// 如果前面的为真，则返回后面的值，也不关心后面的值是什么

// console.log(true==2)//false
// console.log(null==0)//false
// console.log(NaN==0)//false
// console.log(undefined==0)//false
// let a=!0;
// console.log({}||true)
//逗号运算符
// var a=(1,2,3,4,6);//a=6
// var c=9*2+(9-8)>10==false&&true
// //运算符顺序由高到低：  ()   ++--！   *%/    +-    =>>=<<=    &&||   =
// console.log(c)
// var test=1;
// switch(test){
//     case 1:
//     for(var i=0;i<5;i++){
//         console.log(i);
//     }
//     break;
//     case 2:
//     console.log('这个是2');
//     break;
// }

// var box={
//     name:'lsmife',
//     age:12
// }
// with(box){
//     var n=name;
//     var a=age
// }
// console.log(n,a)
// var a='lsmife'
// var b=a.split('');//[ 'l', 's', 'm', 'i', 'f', 'e' ]
// var b=a.split(/\B/);//[ 'l', 's', 'm', 'i', 'f', 'e' ]
// console.log(b)
// var c='2016-02-01';
// var reg=/(\d{4})-(\d{2})-(\d{2})/;
// var d=c.replace(reg,'$1年$2月$3日');
// console.log(d);


