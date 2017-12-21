var dates=new Date()
var a=dates.valueOf();
var b=dates.toString();
var c=dates.toLocaleString();
var d=dates.getTime();
var e=dates.getFullYear();
var f=dates.getMonth();
var g=dates.getDate();
var h=dates.getDay();
var i=dates.getHours();
var j=dates.getMinutes();
var k=dates.getSeconds();
var l=dates.getMilliseconds();
var m=Date.parse('1970-02-02');
var n=new Date('1970-02-02');//北京时间
var o=new Date('1970/02/02');//UTC时间，比北京时间大八小时
var p=new Date('1970-02-2');//UTC时间

// console.log(n.valueOf())//2764800000
// console.log(o.valueOf())//2736000000
// console.log(o.valueOf()-n.valueOf())//-28800000 8小时
// console.log(a,b,c,d,e,f,g,h,i,j,k,l,m,n);
// console.log(1000*60*60*24)
var a=new Date('2017-08-18');
var b=new Date('2017-08-17')
// console.log(a.getDate())
// console.log((Date.parse(a)-Date.parse(b))/3600000)
// console.log(Date.parse('1970/01/01'))
// var i=0;
// setInterval(function(){
//     var d=new Date();
//     console.log(d.getMilliseconds())
//     i++
//     if(i>1000){
//         clearInterval()
//     }
// },1)
var a=new Date();
var b=Date.parse('1970-01-01');
// console.log(a/(86400000*365))
// console.log(2017-1970)
var reg=new RegExp('\d','g');
console.log(reg.test('abs12'));
var str='ggab2,cd3';
var reg=/\w{2}\d/g;
console.log(reg.exec(str));
while(ret=reg.exec(str)){
    console.log(ret);
} 
console.log(str.match(reg))
console.log(str.search(reg))
console.log(str.split('\d'))
console.log(str.replace(reg,'lsmife'))


