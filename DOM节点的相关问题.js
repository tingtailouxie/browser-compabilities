// 获取下一个兄弟节点
function nextNode(obj){
    if(Obj.nextElementSibling){
        return Obj.nextElementSibling
    } else {
        return Obj.nextSibling
    }
}

// 获取上一个兄弟节点
function prenode(obj){
    if(obj.previousElementSibling) {
        return obj.previousElementSibling
    } else {
        return obj.previousSibling
    }
}

//获取第一个子节点
function firstNode (obj){
   if(obj.firstElementChild) {
       return obj.firstElementChild  //非IE6、7、8支持
   } else{
       return obj.firstNode //支持IE6、7、8
   }
}

// 获取最后一个子节点
function lastNode(obj){
    if(obj.lastElementChild){
      return obj.lastElementChild
    } else {
        return obj.lastNode
    }
}

// 全局获取，oClass为你想要查找的类名，没有“.”
function byClass1(oClass){
   var tags=document.all?document.all:document.getElementsByTagName('*');
   var arr=[];
   for (var i = 0; i < tags.length; i++) {
       var reg=new RegExp('\\b'+oClass+'\\b','g');
       if (reg.test(tags[i].className)) {
           arr.push(tags[i]);
       }
    }
   return arr;//注意返回的也是数组，包含你传入的class所有元素；
}

//局部获取类名，parentID为你传入的父级ID
function byClass2(parentID,oClass){
    var parent=document.getElementById(parentID);
    var tags=parent.all?parent.all:parent.getElementsByTagName('*');
    var arr=[];
    for (var i = 0; i < tags.length; i++) {
        var reg=new RegExp('\\b'+oClass+'\\b','g');
        if (reg.test(tags[i].className)) {
            arr.push(tags[i]);
        }
    }
    return arr;//注意返回的也是数组，包含你传入的class所有元素；
}