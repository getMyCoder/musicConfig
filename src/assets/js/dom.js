$(function () {
  var DH=document.documentElement.clientHeight;
  var DW=document.documentElement.clientWidth;
  // ---------------------home----------------------------------
  var WH=window.screen.height;
  $(".leftMenu").height(WH);
  $(".leftMain").height(WH);
  $(".leftMain").css({
    "top":0,
    "left":-$(".leftMain").width()+"px"
  });
  $(".top h2").click(function () {
    $(".leftMenu").addClass('leftMenuActive');
    $(".leftMain").animate({
      "top":0,
      "left":0
    });
  });
  $(".user-Pop").height(DH)
  var startX=0,moveX=0;
  var leftMenuID=document.getElementById('leftMenuID');
  leftMenuID.addEventListener("touchstart", function(e){
    startX = e.touches[0].pageX;
  }, false);
  leftMenuID.addEventListener("touchmove", function(e){
    moveX = e.touches[0].pageX;
  }, false);
  leftMenuID.addEventListener("touchend", function(e){
    if ((moveX<startX && moveX>0) || startX>$(".leftMain").width()){
      $(".leftMain").animate({
         "top":0,
         "left":-$(".leftMain").width()+"px"
       },function () {
        $(".leftMenu").removeClass('leftMenuActive');
      });
     }
    startX=0;
    moveX=0;
  }, false);
  // ---------------------set----------------------------------
   if($(".nameC").html().length>47){
     var nameSlice=$(".nameC").html().slice(0,47)+"···";
     $(".nameC").html(nameSlice)
   }
  $(".getName").height(DH);
  // ---------------------friends----------------------------------
   $(".friends-main ul li").each(function () {
     if($(this).find('p').html().length>50){
       var nameSlice=$(this).find('p').html().slice(0,50)+"···";
       $(this).find('p').html(nameSlice)
     }
   });
  // ---------------------音乐库----------------------------------
  // $(".mode3-pop").height(WH);
  // ---------------------modem----------------------------------
  $(".showMode").height(DH*0.81);
  // ---------------------search----------------------------------
  $(".search").height(WH)
  $(".home").height(WH)
  //----------------------musicInformation------------------------
  $(".musicDetails").height(DH-$(".music-back").height())
  var Rsize=0;
  var musicTimer;
  $(".showplay").click(function () {
    musicTimer=setInterval(function () {
      Rsize++;
      $(".mT1").css({
        "transform":"rotate("+Rsize+"deg)"
      })
    },30);
  });
  $(".music-back p").click(function () {
    clearInterval(musicTimer);
    Rsize=0;
  })

  var Mprogress=document.getElementById('Mprogress');
  var movePStartX=0,movePMoveX=0;
  var movePVal=0;
  Mprogress.addEventListener("touchstart",moveStart, false);
  Mprogress.addEventListener("touchmove",moveMove,false);
  function moveStart(e) {
    movePStartX = e.touches[0].pageX;
    getMoveStyle(movePStartX-DW*0.05)
    audio.currentTime=(movePStartX-DW*0.05)/(DW*0.872)*audio.duration
  }
  function moveMove(e) {
    console.log(DW * 0.9);
    movePMoveX = e.touches[0].pageX;
    movePVal=movePMoveX-DW*0.05;
    if(movePVal<=0){
      movePVal=0
    }else if (movePVal>=DW*0.872){
      movePVal=DW*0.872
    }
    getMoveStyle(movePVal);
    audio.currentTime=movePVal/(DW*0.872)*audio.duration
  }
  // ------------------------音乐------------------------
  var audio = document.getElementById("bgMusic");
  audio.pause();
  $(".showplay").click(function () {
      audio.play();
  });
  $(".mCM p").eq(0).show().siblings().hide();
  var flageSS=false;
  $(".mCM").click(function () {
    if (flageSS){
      $(".mCM p").eq(0).show().siblings().hide();
      flageSS=false;
      audio.play();
    }else{
      $(".mCM p").eq(1).show().siblings().hide();
      flageSS=true;
      audio.pause();
    }
  });
  var setMusicTimer=setInterval(function () {
    getMoveStyle(audio.currentTime/audio.duration*(DW*0.872))
  },30);
  function getMoveStyle(val) {
    $("#moveP").css({
      "left":val+"px"
    });
    $(".Mprogress h2 h3").css({
      "width":val+"px"
    })
  }

});

