var DW=document.documentElement.clientWidth;
 var itemsLength=$(".moveB li").length;
$(".moveB").width(DW*itemsLength);
$(".moveB li").width(DW);
$(".banner-main").append("<ul class='moveS'></ul>");
for(var c=0;c<itemsLength;c++){
  $(".moveS").append('<li><p></p></li>')
}
$(".moveS").css({"left":(DW-$(".moveS").width())/2+"px"});
$(".moveS li").css({
  "width":1/itemsLength*100+"%"
});
$(".moveS li p").css({"width":0});
var speed=0;
var speedTimer=3000;
getTimer(0,itemsLength,0);
var timer=setInterval(function () {
  getTimer(1,itemsLength,0);
},speedTimer);
function getTimer(val,valSize,valV) {
  $(".moveS li p").not(speed).css({"width":0});
  speed+=val;
  if(speed==valSize){
    speed=valV;
  }
  $(".moveB").animate({
    "left":-DW*speed+"px"
  });
  $(".moveS li p").eq(speed).animate({
    "width":"100%"
  },speedTimer,function () {
    $(".moveS li p").not(speed).css({"width":0});
  });
}

var banner=document.getElementById("banner");
banner.addEventListener("touchstart",_start,false);
banner.addEventListener("touchmove",_move,false);
banner.addEventListener("touchend",_end,false);
var startX=0,moveX=0;
function _start(e) {
  clearInterval(timer);
  $(".moveB").stop();
  $(".moveS li p").stop();
  startX = e.touches[0].pageX;
}
function _move(e) {
  moveX = e.touches[0].pageX;

  if (startX<moveX && moveX){
    // 右边
    if (speed!=0){
      $(".moveB").css({
        "left":-DW*speed+(moveX-startX)+"px"
      })
    }
  }else if(startX>moveX && moveX){
    // 左边
    if (speed!=itemsLength-1){
      $(".moveB").css({
        "left":-DW*speed+(moveX-startX)+"px"
      })
    }
  }
}
function _end(e) {
  if (startX<moveX && moveX){
    // 右边
    getTimer(-1,-1,itemsLength-1)
  }else if(startX>moveX && moveX){
    // 左边
    getTimer(1,itemsLength,0)
  }
  timer=setInterval(function () {
    getTimer(1,itemsLength,0);
  },speedTimer);
}
