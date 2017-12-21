/**
 * Created by lsmife on 2017/10/7.
 */
//想要操作谁就先获取之
var oTable=document.getElementById('table');
var thead=oTable.tHead; //表格独有属性
var oTh=thead.rows[0].cells;//表格独有属性rows所有行tr，cell所有列th
var tBody=oTable.tBodies[0]//表格独有属性tBodies所有tbody
var tRows=tBody.rows;

//一、AJAX获取数据（ajax:async javascript and xml）
// 1、创建AJAX对象
var data=null;//定义变量接收数据
var xhr=new XMLHttpRequest;
// 2、打开数据文件地址
xhr.open("get","./data.json",false)//true->异步请求;这里使用同步的方式
// 3、监听请求状态
xhr.onreadystatechange=function(){
    if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
        var val=xhr.responseText;//typeof val ->string;
        data=utils.jsonParse(val);
    }
}
// 4、发送请求
xhr.send(null);

//二、数据绑定(文档碎片)
    function bind(){
        var frg=document.createDocumentFragment();
        for(var i=0;i<data.length;i++){
            var oLi=document.createElement('tr');
            var cur=data[i];
            for(var key in cur){
                var oTd=document.createElement('td');
                //对性别内容的处理，包括多种类型的值
                if(key==='gender'){
                    switch(String(cur[key])){
                        case '0':
                            oTd.innerHTML='男';
                            break;
                        case '1':
                            oTd.innerHTML='女';
                            break;
                        case '男':
                            oTd.innerHTML='男';
                            break;
                        case '女':
                            oTd.innerHTML='女';
                            break;
                        default:
                            oTd.innerHTML='未知';
                    }
                }else{
                    oTd.innerHTML=cur[key];
                }
                oLi.appendChild(oTd);
            }
            frg.appendChild(oLi);
        }
        tBody.appendChild(frg);
        frg=null;
    }
    bind();
//三、隔行变色(文档碎片)
    function changeRowColor(){
        for(var i=0;i<tRows.length;i++){
            tRows[i].className=i%2===1?'bg':null;
        }
    }
    changeRowColor();
//四、排序
    function sort(n){

        var _this=this;
        _this.flag=-1*_this.flag;

        //把其他的排序方式设置为默认的
        for(var i=0;i<oTh.length;i++){
            if(i!==n){
                oTh[i].flag=-1;
            }
        }
        // DOM类数组-DOM数组
        var ary=utils.listToArray(tRows);

        // DOM数组排序
        ary.sort(function(a,b){
            var curInn=a.cells[n].innerHTML;
            var nextInn=b.cells[n].innerHTML;
            var curInnNum=parseFloat(a.cells[n].innerHTML);
            var nextInnNum=parseFloat(b.cells[n].innerHTML);
            if(isNaN(curInnNum)&&isNaN(nextInnNum)){
                return nextInn.localeCompare(curInn)*_this.flag;
            }
            return (curInnNum-nextInnNum)*_this.flag;
        })

        //利用文档碎片将排序后的DOM，进行一次性重绘
        var frg=document.createDocumentFragment();
        for(var i=0;i<ary.length;i++){
            frg.appendChild(ary[i]);
        }
        tBody.appendChild(frg);
        frg=null;

        //重新设置隔行变色
        changeRowColor();
    }
//五、事件绑定
     for(var i=0;i<oTh.length;i++){
        var curOth=oTh[i];
         if(curOth.className==='cursor'){
             curOth.index=i;
             curOth.flag=-1;
             curOth.onclick=function(){
                sort.call(this,this.index);
             }
         }
     }