<template>
  <div class="home">
    <div class="top" :style="{background:message.them.setThem}" >
      <h2><img src="../assets/images/menu.png" alt=""></h2>
      <h3 @click="getSearch()"><img src="../assets/images/search1.png" alt=""></h3>
      <div class="musicMenu">
        <h4><router-link  to="/" ><p @click="getLinkA(0)">我的<span><i v-if="linkAA.linkA1"></i></span></p></router-link></h4>
        <h4><router-link  to="/home/otherm"><p @click="getLinkA(1)">音乐库<span><i v-if="linkAA.linkA2"></i></span></p></router-link></h4>
        <h4><router-link  to="/home/find"><p @click="getLinkA(2)">发现<span><i v-if="linkAA.linkA3"></i></span></p></router-link></h4>
      </div>
    </div>
    <div class="leftMenu" id="leftMenuID">
      <div class="leftMain">
        <div class="user">
          <div class="user-bg">
            <p>
              <img :src="message.user.img" alt="">
            </p>
            <h2>{{message.user.name}}</h2>
            <h3>{{message.user.con}}</h3>
          </div>
        </div>
        <div class="user-main">
          <p v-for="(setItems,index) in message.sets" @click="getSet(index)">{{setItems.con}}</p>
        </div>
      </div>
    </div>
    <!--user弹窗-->
    <div class="user-Pop" v-show="flag">
         <div class="Pop-main">
             <div class="close" @click="getClose()"><img src="../assets/images/close.png" alt=""></div>
             <div class="setcount">
               <div v-show="setVIf[0]"><set></set></div>
               <div v-show="setVIf[1]"><person :msgUser="message.user"></person></div>
               <div v-show="setVIf[2]"><them :msgThemColor="message.them"></them></div>
               <div v-show="setVIf[3]"><friends :friend="message.friends"></friends></div>
             </div>
         </div>
    </div>
    <div class="showplay" :style="{background:message.them.setThem}" @click="mDFun()">
         <div class="tit-right">
           <img :src="message.getMusicCon.MusicImg" alt="">
         </div>
         <div class="tit-left">
           <h2>{{message.getMusicCon.MusicName}}</h2>
           <p>{{message.getMusicCon.MusicCon}}</p>
         </div>
    </div>
    <div class="musicInfor" v-show="message.getMusicCon.musicFlag">
      <div class="music-back" @click="backFun()">
        <p><img src="../assets/images/search-back.png" alt=""></p>
        <span>{{message.getMusicCon.MusicName}}</span>
      </div>
      <musicDetails :musicMsg="message.getMusicCon"></musicDetails>
    </div>
    <!--搜索框-->
    <div class="search" v-show="searchFlag">
        <div class="search-main" :style="{background:message.them.setThem}">
             <div class="search-back" @click="removeSearch()">
               <img src="../assets/images/search-back.png" alt="">
             </div>
             <div class="search-top">
               <input type="text" name="" id="" class="search-input">
             </div>
              <div class="search-start">
                <img src="../assets/images/search1.png" alt="">
              </div>
        </div>
    </div>
    <div class="showMode">
      <!--<keep-alive>-->
         <router-view :message="message"></router-view>
      <!--</keep-alive>-->
    </div>
  </div>
</template>

<script>
  import set from './user/set'
  import person from './user/person'
  import them from './user/them'
  import friends from './user/friends'
  import musicDetails from './mode/musicDetails'
export default {
  name: 'home',
  components:{
    "set":set,
    "person":person,
    "them":them,
    "friends":friends,
    "musicDetails":musicDetails
  },
  data () {
    return {
      message:{
        modeName:[],
        modeImg:[],
        modeTitle:[],
        user:[],
        sets:[],
        them:{
          themColor: [],
          themColorSelect:"",
          setThem:localStorage.setThem || '#000',
          selectGg:localStorage.selectGg || 0
        },
        friends:[],
        Library:[],
        banner:[],
        getMusicCon:{
          MusicName:localStorage.MusicName || "",
          MusicImg:localStorage.MusicImg || "",
          MusicCon:localStorage.MusicCon || "",
          MusicId:localStorage.MusicId || 0,
          MusicSrc:localStorage.MusicSrc || "",
          musicFlag:false
        }
      },
      flag:false,
      setVIf:[false,false,false,false],
      linkA:{
            link1:localStorage.link1 || true,
            link2:localStorage.link2 || false,
            link3:localStorage.link3 || false
           },
      linkAA:{
        linkA1:false,
        linkA2:false,
        linkA3:false
      },
      searchFlag:false
    }
  },
  methods:{
    getSet:function (index) {
      var Mthis=this;
      this.flag=true;
      this.setVIf.forEach(function (val,el) {
        Mthis.setVIf[el]=false;
      });
      this.setVIf[index]=true;
    },
    getClose:function () {
      this.flag=false;
    },
    getLinkA:function (index) {
      if(index==0){
        this.linkA.link1=true;
        this.linkA.link2=false;
        this.linkA.link3=false;
        this.linkAA.linkA1=true;
      }else{
        this.linkAA.linkA1=false;
      }
      if(index==1){
        this.linkA.link1=false;
        this.linkA.link2=true;
        this.linkA.link3=false;
        this.linkAA.linkA2=true;
      }else{
        this.linkAA.linkA2=false;
      }
      if(index==2){
        this.linkA.link1=false;
        this.linkA.link2=false;
        this.linkA.link3=true;
        this.linkAA.linkA3=true;
      }else{
        this.linkAA.linkA3=false;
      }
      localStorage.link1=this.linkA.link1;
      localStorage.link2=this.linkA.link2;
      localStorage.link3=this.linkA.link3;
    },
    getSearch:function () {
      this.searchFlag=true;
    },
    removeSearch:function () {
      this.searchFlag=false;
    },
    mDFun:function () {
      this.message.getMusicCon.musicFlag=true;
    },
    backFun:function () {
      this.message.getMusicCon.musicFlag=false
    }
  },
  mounted:function () {
    var that=this;
    this.$http.get('../../static/json.json').then(function (response) {
      that.message.modeName=response.data.mode;
      response.data.mode.forEach(function (val) {
        that.message.modeImg.push(require('../assets/images/'+val.imgSrc));
      });
      that.message.modeTitle=response.data.list;
      that.message.user=response.data.user;
      that.message.user.img=require('../assets/images/'+response.data.user.img);
      that.message.sets=response.data.sets;
      that.message.them.themColor=response.data.themColor;
      that.message.them.themColorSelect=response.data.themColorSelect;
      that.message.friends=response.data.friends;
      that.message.Library=response.data.Library;
      that.message.banner=response.data.banner;
    });

    if (this.linkA.link1=='true'){
      this.linkAA.linkA1=true;
    }else{
      this.linkAA.linkA1=false;
    }
    if (this.linkA.link2=='true'){
      this.linkAA.linkA2=true;
    }else{
      this.linkAA.linkA2=false;
    }
    if (this.linkA.link3=='true'){
      this.linkAA.linkA3=true;
    }else{
      this.linkAA.linkA3=false;
    }
  }
}
$(function () {
  $(".musicInfor").height(document.documentElement.clientHeight)
})
</script>

<style type="text/css">
  .showMode{margin-top: 80px;overflow-y: auto}
  .home{margin: 0; position: relative;width: 100%;overflow: hidden;}
  .top{ width: 100%;height: 80px;overflow: hidden;position: fixed;top: 0;left: 0;z-index: 999;}
  .top img{}
  .top h2{margin: 0 0 0 12px;height: 40px;float: left;}
  .top h2 img{height: 14px; margin-top: 13px;}
  .top h3{margin: 0 12px 0 0;height: 40px;float: right;}
  .top h3 img{ height: 20px;margin-top: 10px;}
  .musicMenu{width: 100%;height: 40px;border-top: 1px solid #f1f1f1;overflow: hidden;  }
  .musicMenu h4{float: left;width: 33.3%;height: 40px;line-height: 40px;text-align: center;color: #fff;font-weight: normal;border-left:1px solid #f1f1f1;box-sizing: border-box;position: relative;}
  .musicMenu h4:first-child{border-left: none;}
  .musicMenu h4 p span{ display: inline-block; height: 15px;width: 8px; padding-left: 5px;}
  .musicMenu h4 p span i{ display: block;width: 8px;height: 8px;background: #fff;border-radius: 50%;}
  .musicMenu h4 p{color: #fff;font-size: 14px;}
  .leftMenu{width: 100%;position: fixed;top: 0;left: 0;z-index: 0;}
  .leftMenuActive{background: rgba(0,0,0,0.5);z-index: 9999 !important;}
  .user{width: 100%;overflow: hidden;background: url("../assets/images/img6.jpg") no-repeat;background-size: cover}
  .user-bg{background: rgba(0,0,0,0.5);width: 100%;height: inherit;padding-top: 30px;}
  .user p{width: 80px;height: 80px;margin: 0 auto;border-radius: 50%;overflow: hidden;}
  .user p img{width: 80px;height: 80px;}
  .user h2{font-size: 16px;color: #fff;font-weight: normal;text-align: center;line-height: 2em;padding: 15px 0 0 0;}
  .user h3{font-size: 12px;color: #fff;font-weight: normal; line-height: 2em;padding: 5px 15px 15px 15px ;}
  .leftMain{width: 80%;background: #fff;position: absolute;}
  .user-main{padding: 15px;}
  .user-main p{width: 100%;text-align: center;font-size: 14px;color: #666;border-bottom: 1px solid #f1f1f1;line-height: 50px;}
  .user-Pop{background: rgba(0,0,0,0.5);position: fixed;z-index: 999999;top: 0;left: 0;width: 100%; }
  .Pop-main{width: 90%;background: #F1F1F1;height: 85%;margin: 10% 5%;position: relative;  }
  .close{position: absolute;width: 22px;height: 22px;right: -11px;top: -11px;background: #fff;border-radius: 50%;z-index: 9999;}
  .close img{width: 22px;height: 22px;}
  .setcount{width: 100%;height: 100%;overflow: auto;}

  input,textarea{outline: none;}
  .search{width: 100%;z-index: 9999;background: #fff;position: absolute;top: 0;left: 0;}
  .search-main{width: 100%;overflow: hidden;height: 60px;}
  .search-back{float: left;width: 10%;margin: 14px 0 0 0;text-align: center}
  .search-back img{width: 18px}
  .search-top{text-align: center;float: left;width: 76%;margin: 15px 0 0 2%;}
  .search-input{width: 100%;background: none;border:1px solid #fff;border-width: 0 0 1px 0; width: 100% ;height: 20px;line-height: 20px;color: #fff;}
  .search-start{float: right; margin: 0 12px 0 0;text-align: center}
  .search-start img{height: 20px;margin-top: 10px;}
  .showplay{width: 100%;height: 40px; position: fixed;z-index: 999;bottom: 0;left: 0;}
  .tit-right{width: 30px;height: 30px;border-radius: 50%;overflow: hidden;margin: 5px;float: left;}
  .tit-right img{width: 30px;height: 30px;}
  .tit-left{color: #fff;float: left;margin-left: 8px;}
  .tit-left h2{font-weight: normal;line-height: 20px;font-size:0.8em;padding-top: 3px;}
  .tit-left p{ font-size: 0.7em;line-height: 15px;}
  .musicInfor{width: 100%;position: fixed;top: 0;left: 0;background: url("../assets/images/homeBg.jpg") no-repeat top center;background-size:100% 100%;z-index: 99999; }
  .music-back{background: #000;float: left;width: 100%; height: 40px; }
  .music-back p{width: 10%;float: left;}
  .music-back img{width: 18px;margin: 11px 8px;float: left;}
  .music-back span{display: block;color: #fff;float: left;line-height: 40px;font-size: 16px;width: 80%;text-align: center}
</style>
