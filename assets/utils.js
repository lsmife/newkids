/**
 * Created by lsmife on 2017/10/7.
 */
var utils=(function(){
    //单例模式的惰性思想
    var flag='getComputedStyle' in window;//检测浏览器的兼容性；IE6-8
    function listToArray(list){ //类数组转换为数组
        var ary=[];
        try{
            ary=Array.prototype.slice.call(list);//IE6-8不兼容
        }catch(e){
            for(var i=0;i<list.length;i++){
                ary[ary.length]=list[i];
            }
        }
        return ary;
    }
    function arrUnique(arr){ //数组去重
        var obj={};
        for(var i=0;i<arr.length;i++){
            var cur=arr[i];
            if(obj[cur]==cur){
                arr[i]=arr[arr.length-1];
                arr.length--;
                i--;
                continue;
            }
            obj[cur]=cur;
        }
        obj=null;
        return arr;
    }
    function arrGetExtrem(arr,type){ //数组求最大值(最大最小值)
        if(type==='min'){
            return Math.min.apply(null,arr);
        }else if(type===undefined||type==='max'){
            return Math.max.apply(null,arr);
        }else{
            throw new Error("format mistake ,reference（arr,'min')、(arr)、(arr,'max')");
        }

    }
    function jsonParse(str){ //格式化JSON字符串为JSON数据 IE6-7
        if(flag){
            return JSON.parse(str);
        }else{
            return eval("("+str+")");
        }
        //使用了惰性思想后就不用trycatch了
        // try{
        //     return JSON.parse(str);
        // }catch(e){
        //     return eval("("+str+")");
        // }
    }
    function queryParamers(str){ //URL地址截取查询字符串
        var reg=/([^?=&]+)=([^?=&]+)/g;
        var obj={};
        str.replace(reg,function(){
            obj[arguments[1]]=arguments[2];
        });
        return obj;
    }
    function checkType(val,type){ //val 实际值 type 预期数据类型
        var reg=new RegExp("^\\[object "+type+"\\]$");//定义预期数据类型正则
        var types=Object.prototype.toString.call(val);//检测实际数值数据类型
        return reg.test(types);//返回正则匹配结果
    }
    function windowAttr(attr,value){//获取和设置浏览器本身属性的方法兼容版 (浏览器本身的属性，属性值)//clientHeight/Width scrollHeight....
        if(typeof value === 'undefined'){
            //获取
            return document.documentElement[attr]||document.body[attr];
        }else{
            //设置
            document.documentElement[attr]=value;
            document.body[attr]=value;
        }
    }
    function getOffsetToBody(ele){
        //获取元素距离body的偏移量（左及上）入参是当前元素，返回结果是距离body的左和上偏移
        //用途：1、获取距离顶端的距离  2、已经通过相对于body的高度落差求的2元素的高度距离
        var left=null,top=null,parent=ele.offsetParent;
        left+=ele.offsetLeft;
        top+=ele.offsetTop;
        while(parent!==null){
            if(navigator.userAgent.indexOf("MSIE 8.0")===-1){
                left+=parent.clientLeft;
                top+=parent.clientTop;
            }
            left+=parent.offsetLeft;
            top+=parent.offsetTop;
            parent=parent.offsetParent;
        }
        return {left:left,top:top};
    }
    function children(ele,tagName){
        //获取元素子节点方法
        var ary;
        if(/MSIE (6|7|8)/.test(navigator.userAgent)===1){
            //处理IE6-8的不兼容问题
            var nodes=ele.childNodes;
            for(var i=0,len=nodes.length;i<len;i++){
                var curNode=ele[i];
                curNode.nodeType===1?ary[ary.length]=curNode:null;
            }
            nodes=null;
        }else{//类数组转化为数组，与上面的统一
            ary=this.listToArray(ele.children)
        }
        if(typeof tagName==='string'){
            for(var m=0;m<ary.length;i++){
                if(ary[m].nodeName.toLowerCase()!==tagName.toLowerCase()){
                    ary.splice(m,1);
                    m--;
                }
            }
        }
        return ary;

    }
    //prev：获取前面的一个兄弟节点
    function prev(ele){
        if(flag){
            return ele.previousElementSibling;
        }
        var pre=ele.previousSibling;
        while(pre&&pre.nodeType!==1){
            pre=pre.previousSibling;
        }
        return pre;
    }
    //next：获取后面的一个兄弟节点
    function next(ele){
        if(flag){
            return ele.nextElementSibling;
        }
        var next=ele.nextSibling;
        while(next&&next.nodeType!==1){
            next=next.nextSibling;
        }
        return next;
    }
    //prevAll：获取所有的前面的兄弟节点
    function prevAll(ele){
        var prev=this.prev(ele),prevNodes=[];
        while(prev){
            prevNodes.unshift(prev);
            prev=this.prev(prev);
        }
        return prevNodes;
    }
    //nextAll：获取所有的后面的兄弟节点
    function nextAll(ele){
        var next=this.next(ele),nextNodes=[];
        while(prev){
            nextNodes.push(next);
            next=this.next(next);
        }
        return nextNodes;
    }
    //sibling：获取当前元素的相邻节点
    function sibling(ele){
        var next=this.next(ele);
        var prev=this.prev(ele);
        var siblingNodes=[];
        prev?siblingNodes.push(prev):null;
        next?siblingNodes.push(next):null;
        return siblingNodes;
    }
    // siblings:获取当前元素的所有兄弟节点
    function siblings(ele){
        return this.prevAll(ele).concat(this.nextAll(ele));
    }
    //index:获取当前元素的索引
    function index(ele){
        return this.prevAll(ele).length;
    }
    //firstChild:获取第一个节点
    function firstChild(ele){
        var firstNode=this.children(ele);
        return firstNode.length>0?firstNode[0]:null;
    }
    //lastChild:获取最后一个节点
    function lastChild(ele){
        var lastNode=this.children(ele);
        return lastNode.length>0?lastNode[lastNode.length-1]:null;
    }
    //append:向指定容器的末尾添加元素
    function append(ele,container){
        container.appendChild(ele);
    }
    //prepend:向指定容器的开始添加元素
    function prepend(ele,container){
        var fir=this.firstChild(ele);
        if(fir){
            container.insertBefore(ele,fir);
            return;
        }
        container.appendChild(ele);
    }
    //insertBefore:向指定容器中的某个元素的开始添加元素
    function insertBefore(ele,oldEle){
        return oldEle.parentNode.insertBefore(ele,oldEle);
    }
    //insertAfter:向指定容器中的某个元素的末尾添加元素
    function insertAfter(ele,oldEle){
        var next=this.next(oldEle);
        if(next){
            return oldEle.parentNode.insertBefore(ele,this.next(oldEle));
        }
        return oldEle.parentNode.appendChild(ele);
    }
    //addClass:添加类名
    function addClass(ele,cName){
        var cNameList=cName.split(/ +/g);//处理传递多个类名
        for(var i=0;i<cNameList.length;i++){
            var curName=cNameList[i]
            if(!this.hasClass(ele,curName)){
                ele.className+=' '+curName;
            }
        }
    }
    //removeClass:删除类名
    function removeClass(ele,cName){
        var cNameList=cName.replace(/(^ +| $)/,"").split(/ +/g);//处理传递多个类名
        for(var i=0;i<cNameList.length;i++){
            var curName=cNameList[i];
            if(this.hasClass(ele,curName)){
                var reg=new RegExp('(^ +| +$)'+cName+'( +|$)');
                ele.className=ele.className.replace(reg,' ')
            }
        }

    }
    //hasClass:判断是否存在该类名
    function hasClass(ele,cName){
        var elecName=ele.className;
        var reg=new RegExp('\\b'+cName+'\\b');
        // var reg=new RegExp('(^| +)'+cName+'( +|$)');
        if(reg.test(elecName)){
            return true;
        }
        return false;
    }
    //getElementsByClassName:根据类名获取元素
    function getElementsByClass(strClass,context){
        //设置上下文
        context = context || document;
        if(flag){
            return this.listToArray(context.getElementsByClassName(strClass));
        }
        var arr=[];
        //获取去除首尾空格后以空格分割的类名数组
        var classNameArr=strClass.replace(/(^ +| +$)/,'').split(/ +/g);
        //获取上下文中所有元素
        var nodeList=context.getElementsByTagName("*");
        for(var i=0;i<nodeList.length;i++){
            var curNode=nodeList[i];
            //class="w1 w2 "需要几包含w1也包含w2
            var isOk=true;//设置符合规则的标记，默认为符合
            for(var k=0;k<classNameArr.length;k++){
                var reg=new RegExp("(^| +)"+classNameArr[k]+"( +|$)");
                if(!reg.test(curNode.strClass)){
                    isOk=false;
                    break;
                }
            }
            if(isOk){
//                arr.push(nodeList[i]);
                arr[arr.length]=curNode;
            }
        }
        return arr;
    }
    //获取元素样式
    function getCssStyle(attr){//获取元素的样式兼容（元素，css属性）
        var val=null;
        if(!flag){//检测属性是否属于这个对象 if(typeof window.getComputedStyle==='undefined') if(window.getComputedStyle)
            if(attr==='opacity'){ //针对IE进行的处理
                val=this.currentStyle['filter'];
                reg=/^alpha\(opacity=(\d+(?:\.\d+)?)\)$/i;
                val=reg.test(val)?reg.exec(val)[1]/100:1;
            }else{
                val=this.currentStyle[attr];
            }
        }else{
            val=window.getComputedStyle(this,null)[attr];
        }
        reg=/^(-?\d+(\.\d+)?)(px|rem|pt|em)?$/i;//对符合规则的值进行去单位,去单位，为了方便计算,有些能去单位，有些不能去单位
        return reg.test(val)?parseFloat(val):val;
    }
    //元素设置样式
    function setCss(attr,value){
        if(attr==="float"){
            this["style"]["cssFloat"]=value;
            this["style"]["styleFloat"]=value;
            return;
        }
        if(attr==='opacity'){
            this["style"]["opacity"]=value;
            this["style"]["filter"]="alpha(opacity="+value*100+")";
            return;
        }
        var reg=null;
        reg=/^(width|height|left|right|top|bottom|((margin|padding)(Left|Top|Bottom|Right)?))$/
        if(reg.test(attr)){
            if(!isNaN(value)){
                value+="px";
            }
        }
        this["style"][attr]=value;
    }
    //元素批量设置样式
    function setGroupCss(options){
        // 检测是否为对象类型，否则不能设置
        // Object.prototype.toString.call(obj)!=='[object Object]'
        // if(options.toString()!=='[object Object]'){
        //     return;
        // }
        //遍历对象这个调用setcss进行设置
        for(var key in options){
            if(options.hasOwnProperty(key)){
                setCss.call(this,key,options[key]);
            }
        }
    }
    //获取样式、设置及批量设置样式
    function css(ele){
         var argAry=Array.prototype.slice.call(arguments,1);//过滤掉ele，只保留参数部分
         var argTwo=arguments[1];
         if(typeof argTwo==="string"){
             if(typeof arguments[2]==='undefined'){
                 return getCssStyle.apply(ele,argAry);
             }
             setCss.apply(ele,argAry);//调用setCss设置this为ele
         }
         argTwo=argTwo||0;
         if(argTwo.toString()==="[object Object]"){
             setGroupCss.apply(ele,argAry);
         }
    }
    return {
        listToArray:listToArray,
        arrUnique:arrUnique,
        arrGetExtrem:arrGetExtrem,
        jsonParse:jsonParse,
        queryParamers:queryParamers,
        checkType:checkType,
        windowAttr:windowAttr,
        getOffsetToBody:getOffsetToBody,
        children:children,
        prev:prev,
        sibling:sibling,
        siblings:siblings,
        index:index,
        firstChild:firstChild,
        lastChild:lastChild,
        append:append,
        prepend:prepend,
        insertBefore:insertBefore,
        insertAfter:insertAfter,
        addClass:addClass,
        removeClass:removeClass,
        hasClass:hasClass,
        getElementsByClass:getElementsByClass,
        css:css,


//    检测浏览器是否是IE及IE版本，检测浏览器内核
    }

})()