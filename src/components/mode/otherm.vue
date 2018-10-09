<template>
  <div class="otherm">
    <div class="mode3">
      <div class="think">
        每日推荐 >
      </div>
      <div class="mode3-con">
        <ul>
          <li v-for="(libItem,index) in message.Library" @click="setMusicIf(libItem)">
            <h2><img :src='require("../../assets/images/"+libItem.img)' alt=""></h2>
            <h3>
              <span>{{libItem.name}}</span>
              <p>{{libItem.con}}</p>
            </h3>
            <h4 @click="getMusic(libItem)">
              <img src="../../assets/images/more.png" alt="">
            </h4>
          </li>
        </ul>
      </div>
    </div>
    <div class="mode3-pop" v-show="modeFlag" @click="modeHide()">
      <div class="mode3-popcon">
        <p>下载：{{modeMusic.name}} </p>
        <p>收藏：{{modeMusic.name}}</p>
        <p>歌手：{{modeMusic.con}}</p>
        <p>评论：{{modeMusic.speak}}</p>
        <p>关注</p>
        <p>分享</p>
        <p>专辑</p>
        <p>视频</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'otherm',
    props:['message'],
    data () {
      return {
         modeFlag:false,
         modeMusic:{}
      }
    },
    methods:{
      getMusic:function (lib) {
        this.modeFlag=true;
        this.modeMusic=lib;
        $(".mode3-popcon").slideDown()
      },
      modeHide:function () {
        var slidThis=this;
        $(".mode3-popcon").slideUp(function () {
          slidThis.modeFlag=false;
        })
      },
      setMusicIf:function(msg){
         this.message.getMusicCon.MusicName=msg.name;
         this.message.getMusicCon.MusicImg=require("../../assets/images/"+msg.img);
         this.message.getMusicCon.MusicCon=msg.con;
         this.message.getMusicCon.MusicId=msg.id;
         this.message.getMusicCon.MusicSrc=msg.src;
        localStorage.MusicName=msg.name;
        localStorage.MusicImg=require("../../assets/images/"+msg.img);
        localStorage.MusicCon=msg.con;
        localStorage.MusicId=msg.id;
        localStorage.MusicSrc=msg.src;
        var audio = document.getElementById("bgMusic");
        audio.currentTime  = 0;
        audio.pause();
        audio.src=msg.src;
        audio.play();
      }
    },
    mounted:function () {
      $(function () {
        var WH=document.documentElement.clientHeight
        $(".mode3-pop").height(WH);
      })
    }
  }
</script>

<style type="text/css">
  .mode3{width: 100%; position: relative;z-index: 99;}
  .mode3-con{width: 100%;}
  .mode3-con ul{margin-top: 5px;}
  .mode3-con ul li{overflow: hidden;border-bottom: 1px solid #f1f1f5;padding: 8px 10px; height: 50px;}
  .mode3-con h2{float: left;width: 40px;height: 40px;overflow: hidden;border-radius: 10px;margin-top: 5px;}
  .mode3-con h2 img{width: 40px;height: 40px;}
  .mode3-con h3{float: left;font-weight: normal;padding-left: 10px;}
  .mode3-con h3 span{font-size: 14px;color: #666;}
  .mode3-con h3 p{font-size: 12px;color: #999;margin-top: 8px;}
  .mode3-con h4{float: right;width: 15px;margin-top: 30px;}
  .mode3-con h4 img{width: 3px;}
  .think{margin: 10px 0 0 10px; line-height: 2.5em;font-size: 16px; }

  .mode3-pop{width: 100%;position: fixed;top: 0;left: 0;background: rgba(0,0,0,0.5);z-index: 99999; }
  .mode3-popcon{width: 100%;background: #fff;position: absolute;left: 0;bottom: 0;  -webkit-border-top-left-radius:10px;-webkit-border-top-right-radius:10px;height: 300px;display: none;overflow-y: auto;}
  .mode3-popcon p{width: 90%;margin: 0 auto;border-bottom: 1px solid #f1f1f1;font-size: 14px;color: #666;line-height: 32px;padding: 5px;}
</style>
