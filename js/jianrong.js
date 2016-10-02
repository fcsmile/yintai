// 获取
function $(selector,range){
    if(typeof selector=="string"){
      range=range||document;
        if(selector.charAt(0)=="#"){
          return document.getElementById(selector.slice(1))
        }
        if(selector.charAt(0)=="."){
          return getClass(selector.slice(1),range)
        }
        if(/^[a-zA-Z][a-zA-Z1-6]{0,9}$/.test(selector)){
          return range.getElementsByTagName(selector)
        } 
        if(/^<[a-zA-Z][a-zA-Z1-6]{0,9}>$/.test(selector)){
          return document.createElement(selector.slice(-1,1))
        }
    }
    if(typeof selector=="function"){
         // return window.onload=selector;
         return on(window,'load',selector)
    }
}

//getElementsByClassName兼容问题
function getClass(classname,range){
	if(document.getElementsByClassName){
         return range.getElementsByClassName(classname)
	}else{
		var aa=range.getElementsByTagName('*');
		var arr=[];
		for (var i = 0; i < aa.length; i++) {
			// if(aa[i].className==classname){
   //                arr.push(aa[i])
			// }
			if(checkclass(aa[i].className,classname)){
                         arr.push(aa[i])
			}
		};
		return arr;
	}
}

function checkclass(tagclass,aclass){
       var a=tagclass.split(' ')
       for (var i = 0; i < a.length; i++) {
       	 if (a[i]==aclass) {
       	return true;
       };
       return false;
       };
      
}
//innerText  textContent兼容问题
 function text(obj,val){
 	if(val==undefined){
 			if(obj.textContent==undefined){
       return obj.innerText;
 	}else{
 		return obj.textContent
 	}
    }else{
    	if(obj.textContent==undefined){
        obj.innerText=val;
 	}else{
 		obj.textContent=val;
 	}
    	
    }
}
//获取通用样式
function getStyle(obj,arrt){                 //arrt代表对象的属性
    if(obj.currentStyle){
         return obj.currentStyle[arrt];
    }else{
       return getComputedStyle(obj,null)[arrt];
    }
}

// 获取所有子节点

function getChilds(obj){
     var childs=obj.childNodes
     var newArr=[];
     for (var i = 0; i < childs.length; i++) {
         if(!(childs[i].nodeType==8||(childs[i].nodeType==3&&trim(childs[i].nodeValue)==""))){
              newArr.push(childs[i])
         }
     };
     return newArr;
}
function trim(str){
  return str.replace(/^\s+|\s+$/g,"")
}

// 获取第一个子节点

function getFirst(parent){
      return getChilds(parent)[0];
}

// 获取最后一个子节点
function getLast(parent){
     var childs=getLast(parent)
    return childs[childs.length-1]
}


// 获取指定节点
function getIndex(parent,i){
  return getChilds(parent)[i];
}
// 获取下一个兄弟节点
function getNext(obj){
      var next=obj.nextSibling;
      if(!next){return false}
   while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)=="")){
      next=next.nextSibling;
      if(!next){return false}
   }
     return next
}
// 获取上一个兄弟节点
function upNext(obj){
      var up=obj.nextSibling;
      if(!up){return false}
   while(up.nodeType==8||(up.nodeType==3&&trim(up.nodeValue)=="")){
      up=up.upSibling;
      if(!up){return false}
   }
     return up
}

//插入到某个对象之前

function insertBefore(obj1,obj2){
    var parent=obj2.parentNode;
   parent.insertBefore(obj1,obj2)
}

//插入到某个对象之后

function insertAfter(obj,endobj){
  var parent=endobj.parentNode;
       var  next=getNext(endobj);
       if(next){
           parent.insertBefore(obj,next)
       }else{
           parent.appendChild(obj)
       }
}

// 添加事件
function on(obj,ev,callback){   //对象 事件(click) 回调函数
    if(obj.addEventListener){
      obj.addEventListener(ev,callback)
    }else{
         function fffnnn(){
          callback.call(obj);
         }
      obj.attachEvent('on'+ev,fffnnn)
    }
}

function off(obj,ev,callback){
  if(obj.removeEventListener){
    obj.removeEventListener(ev,callback)
  }else{
    obj.detachEvent('on'+ev,fffnnn)
  }
}