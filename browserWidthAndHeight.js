
//网页可见区域的宽高 不包括边框，offsetWidth和offsetHeight包括边框
var winW = document.body.clientWidth || document.documentElement.clientWidth   

var heiH = document.body.clientHeight || document.documentElement.clientHeight 

//整个网页的宽、高
var winW = document.body.scrollWidth || document.documentElement.scrollWidth   

var heiH = document.body.scrollHeight || document.documentElement.scrollHeight 

// 滚轮滑动到顶部和左侧的距离
var scrollWidth = document.body.scrollTop || document.documentElement.scrollTop

var scrollHeight = document.body.scrollLeft || document.documentElement.scrollLeft

// 屏幕分辨率的宽高
var screenW = window.screen.width

var screenH = window.screen.height

// 浏览器相对与屏幕的X坐标、Y坐标（以及FireFox）
var screenX = window.screenLeft
var screenXX = window.screenX  //FireFox

var screenY = Window.scrollTop
var screenYY = window.screenY  //FireFox



// event事件问题

document.onclick = function(ev){  //谷歌、火狐，支持IE9以上
    var e = ev
    console.log(e)
}

document.onclick = function(){  //谷歌和IE，不支持谷歌
    var e = event
    console.log(e)
}

document.onclick = function(ev){
   var e = ev || window.event
   console.log(e)
}


