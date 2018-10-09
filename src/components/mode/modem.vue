<template>
  <div class="modem">
      <banner :banners="message.banner"></banner>
    <div class="mode">
      <div class="myMusic">我的音乐</div>
      <ul>
        <li v-for="(modes,index) in message.modeName">
          <p :style="{backgroundImage:'url('+message.modeImg[index]+')'}">
             <span>
               <img :src="require('../../assets/images/'+modes.img)" alt="">
             </span>
          </p>
          <h2>{{modes.title}}</h2>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import banner from './banner'
  export default {
    name: 'modem',
    props:['message'],
    components:{
      "banner":banner
    },
    data () {
      return {

      }
    },
    methods:{

    },
    mounted:function () {

    }
  }
</script>

<style type="text/css">
  .mode{width: 100%;position: relative;z-index: 99;}
  .mode ul{overflow: hidden; }
  .mode ul li{float: left;width: 30%;margin: 5px 0 0 2.5%;text-align: center;}
  .mode ul li p{ border-radius: 3px;overflow: hidden;width: 100%;text-align: center;border:1px solid #f1f1f1;height: 100px;background-size: 100% 100%}
  .mode ul li p span{display: block ;width: 100%;height: inherit;background: rgba(255,255,255,0.4);}
  .mode ul li p img{width: 70%;vertical-align: middle;margin-top: 1em;}
  .mode ul li h2{font-size: 14px;color: #0b2e13;font-weight: normal;line-height: 2em;}
  .myMusic{width: 100%;line-height: 40px;text-align: center;color: #666;font-weight: normal;font-size: 16px; }

</style>
