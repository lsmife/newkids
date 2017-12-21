// var r01=/^[-09]$/;
// var str01=9;
// console.log(r01.test(str01)); //true

// var r01=/is/g;
// var str01='this is a isnumber';
// console.log(str01.replace(r01,'OK')); //thOK OK a OKnumber

// var r01=/is\b/g;
// var str01='this is a isnumber';
// console.log(str01.replace(r01,'OK')); //thOK OK a isnumber

// var r01=/\bis\b/g;
// var str01='this is a isnumber';
// console.log(str01.replace(r01,'OK')); //this OK a isnumberd

// var r01=/\bis/g;
// var str01='this is a isnumber';
// console.log(str01.replace(r01,'OK')); //this OK a OKnumber

// var r01=/\bis\B/g;
// var str01='this is a isnumber';
// console.log(str01.replace(r01,'OK')); //this is a OKnumber

// var r01=/[-0-9\]]/g;
// var str01="-12-34iop-k]]]]";
// console.log(str01.replace(r01,'M')); //this is a OKnumber

// var r02=/1a-(z|0)-9/g;
// // var r02=/[a-z0-9]/g;
// var str02='1a-z-9lsmife20181a-0-9|';
// console.log(str02.match(r02,'A'));
// var r03=/[\d,`|]/g
// var str03='a1b2c|d5g,e`';
// console.log(str03.split(r03));
// var r04=/(\w)\d/g;
// var str04='lsmife2012';
// console.log(str04.replace(r04,function(match,index,group1,origin){
//     console.log(match+'\t'+index+'\t'+origin);
//     return match*3
// }))

// var a='ab1cd2ef3gh4ij5';
// var reg=/\d/g;

// // /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i

// var a='  ls   mi fe   ';
// var reg=/\s/g//lsmife                   去除所有的空格
// var reg=/^\s+|\s+$/g//ls   mi fe        去除首末的空格,或者不仅存在于分组之间
// console.log(a.replace(reg,'')+"空格");
// var a='ab1cd2ef3giwx345lmi23fe';
// var reg=/\w{2}\d/g
// // 1、手动执行多次
// var b=reg.exec(a);
// var c=reg.exec(a);
// var d=reg.exec(a);
// var e=reg.exec(a);
// var f=reg.exec(a);
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// // 2、利用循环执行
// while(ret=reg.exec(a)){
//     console.log(ret)
// }
//为什么要用ret来接数值的原因是，console.log(reg.exec(a)).这里也会执行一次
// [ 'ab1', index: 0, input: 'ab1cd2ef3giwx345lmi23fe' ]
// [ 'cd2', index: 3, input: 'ab1cd2ef3giwx345lmi23fe' ]
// [ 'ef3', index: 6, input: 'ab1cd2ef3giwx345lmi23fe' ]
// [ 'wx3', index: 11, input: 'ab1cd2ef3giwx345lmi23fe' ]
// [ 'mi2', index: 17, input: 'ab1cd2ef3giwx345lmi23fe' ]

// var str='ab1c2d4';
// var reg=/\d/g;
// var a=reg.test(str);
// var b=reg.test(str);
// var c=reg.test(str);
// var d=reg.test(str);
// var e=reg.test(str);
// while(ret=reg.test(str)){
//     console.log(ret);
// }
// console.log(a,b,c,d,e)//true true true false true

var utils={
    add:function(){

    }
}

var tab={
    change:function(){
        utils.add()
    }
}
var nav={
    change:function(){
        this.select();
    },
    select:function(){

    }
    
}

function newp(name,age){
    var obj={};
    obj.name=name;
    obj.age=age;
    obj.write=function(){
        console.log(this.name)
    }
    return obj;
}
var p1=newp('lsmife','18');
var p2=newp('lshis','20')
console.dir(object.prototype)