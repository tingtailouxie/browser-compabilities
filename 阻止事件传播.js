document.onclick = function(e){
   var e = e || window.event
   if(e.stopPropagation) {
      e.stopPropagation()  //W3C标准
   } else {
      e.cancelBubble = true  //IE...
   }
}