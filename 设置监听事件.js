
//添加事件监听
function addEvent(obj,type,fn){
    if( obj.addEventListener){
       obj.addEventListener(type,fn,false) //非IE
    } else {
       obj.attachEvent('on'+type,fn)  //兼容IE
    }
}

// 删除事件监听
function removeEvent(obj,type,fn){
   if(obj.removeEventListener){
      obj.removeEventListener(type,fn,false)  //非IE
   } else { 
      obj.detachEvenet('on'+type,fn)          //兼容IE
   }
}