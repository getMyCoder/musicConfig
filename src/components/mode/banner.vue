<template>
  <div class="banner" id="banner">
    <div class="banner-main">
      <ul class="moveB">
        <li v-for="(bannerItem,index) in banners">
          <img :src="require('../../assets/banner/'+bannerItem)" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'banner',
    props:['banners'],
    data () {
      return {}
    },
    methods:{
      getBanner:function () {
        $(function () {


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

          var bannerID=document.getElementById("banner");
          var startX=0,moveX=0;
          if (bannerID){
            bannerID.addEventListener("touchstart",_start,false);
            bannerID.addEventListener("touchmove",_move,false);
            bannerID.addEventListener("touchend",_end,false);
          }
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
        })
      }
    },
    watch:{
      banners:function (newVal,oldVal) {
        this.getBanner()
      }
    },
    mounted:function () {



    }
  }
</script>

<style type="text/css">
  .banner{width: 100%;height: 140px; overflow: hidden; }
  .banner-main{position: relative;width: 100%;height: inherit;}
  .moveB{height: 400px;list-style: none;position: absolute;top: 0;left: 0;z-index: 9;}
  .moveB li{float: left;height: 140px;overflow: hidden;}
  .moveB li img{width: 100%;height: 140px;}
  .moveS{position: absolute;z-index: 999;bottom: 0;list-style: none;width: 100%;height:4px;}
  .moveS li{height: inherit;float: left;background: rgba(0,0,0,0.5);}
  .moveS li p{height: inherit;background:#fff;width: 0;}
</style>
