<template>
  <div class="musicDetails">
     <div class="musicTitle">
         <div class="mT1">
           <div class="mT2">
             <div class="mT3">
               <img src="../../assets/images/musicTit.jpg" alt="">
             </div>
           </div>
         </div>
     </div>
    <div class="musicDown">
      <audio id="bgMusic">
        <source :src="musicMsg.MusicSrc" type="audio/mpeg" />
      </audio>
        <div class="Mprogress" id="Mprogress">
          <h2><h3></h3></h2>
          <p id="moveP"></p>
        </div>
        <div class="musicControl">
           <div class="mCL" @click="proMusic()"><img src="../../assets/images/pro.png" alt=""></div>
           <div class="mCM">
             <p><img src="../../assets/images/stop.png" alt=""></p>
             <p><img src="../../assets/images/start.png" alt=""></p>
           </div>
           <div class="mCR" @click="nextMusic()"><img src="../../assets/images/next.png" alt=""></div>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'musicDetails',
    props:['musicMsg'],
    data () {
      return {
         newInform:[]
      }
    },
    methods:{
      proMusic:function () {
        this.musicMsg.MusicId=this.musicMsg.MusicId-1;
        this.newAxios(true);
      },
      nextMusic:function () {
        this.musicMsg.MusicId=this.musicMsg.MusicId+1;
        this.newAxios(true);
      },
      newAxios:function (flag) {
        var thisId=this;
        var audio = document.getElementById("bgMusic");
        audio.currentTime  = 0;
        audio.pause();
        this.$http.get('../../../static/json.json').then(function (response) {
          for (var b=0;b<response.data.Library.length;b++){
            if (response.data.Library[b].id==thisId.musicMsg.MusicId){
              thisId.newInform=response.data.Library[b]
            }
          }
          thisId.musicMsg.MusicName=thisId.newInform.name;
          thisId.musicMsg.MusicImg=require("../../assets/images/"+thisId.newInform.img);
          thisId.musicMsg.MusicCon=thisId.newInform.con;
          thisId.musicMsg.MusicId=thisId.newInform.id;
          thisId.musicMsg.MusicSrc=thisId.newInform.src;
          localStorage.MusicName=thisId.newInform.name;
          localStorage.MusicImg=require("../../assets/images/"+thisId.newInform.img);
          localStorage.MusicCon=thisId.newInform.con;
          localStorage.MusicId=thisId.newInform.id;
          localStorage.MusicSrc=thisId.newInform.src;
          audio.src=thisId.musicMsg.MusicSrc;
          if(flag){
            audio.play();
          }
        });
      }
    },
    watch:{

    },
    mounted:function () {
      this.newAxios(false)
    }
  }





</script>

<style type="text/css">
  .musicDetails{background: rgba(65,77,127,0.5);width: 100%;padding: 40px 0 0 0;overflow: hidden;position: relative;z-index: 999;}
  .musicTitle{width: 100%;}
  .mT1{width: 200px;height: 200px;background: rgba(255,255,255,0.6);margin:50px auto;border-radius: 50%;overflow: hidden;}
  .mT2{width: 190px;height: 190px;margin: 5px auto;border-radius: 50%;overflow: hidden;background: #000;}
  .mT3{width: 150px;height: 150px;margin: 20px auto;overflow: hidden;border-radius: 50%;}
  .mT3 img{width: 150px;height: 150px;}
  .musicDown{position: absolute;bottom: 0;left: 0;width: 100%; height: 180px;}
  .Mprogress{width: 90%;margin: 0 auto;overflow: hidden;height: 10px;position: relative;}
  .Mprogress h2{height:2px;width: 100%;margin-top: 4px;background: #ccc;border-radius: 1px;overflow: hidden;}
  .Mprogress h3{height:2px;background: red; width: 0;}
  .Mprogress p{height: 2px;width: 2px;position: absolute;border-radius: 50%;background: red;border: 4px solid #fff;top: 0;left: 0;}
  .musicControl{width: 100%;margin-top: 30px;}
  .mCL{width: 28%;float: left;text-align: right}
  .mCL img{width: 35px;height: 35px;margin-top: 5px;}
  .mCM{width: 44%;float: left;text-align: center}
  .mCM img{width: 45px;height: 45px;}
  .mCR{width: 28%;float: left;text-align: left}
  .mCR img{width: 35px;height: 35px;margin-top: 5px;}
</style>
