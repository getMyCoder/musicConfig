<template>
  <div class="find">
    <div class="mode2">
      <div class="think">
        即时推送 >
      </div>
      <ul>
        <li v-for="(modesT,index) in message.modeTitle">
          <h2>
            <img :src="require('../../assets/images/'+modesT.img)" alt="">
          </h2>
          <p>{{modesT.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'find',
    props:['message'],
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
  .mode2{width: 100%; position: relative;z-index: 99;}
  .mode2 ul{}
  .mode2 ul li{width: 96%;margin: 5px 2% 10px 2%;border:1px solid #e0dede;padding: 10px 0 5px 0;}
  .mode2 ul li h2{width: 96%;margin: 0 2%;height: 3em;overflow: hidden;}
  .mode2 ul li h2 img{width: 100%;}
  .mode2 ul li p{ font-size: 12px;line-height: 1.5em;color: #333;padding: 5px 10px;}
  .think{margin: 10px 0 0 10px; line-height: 2.5em;font-size: 16px; }
</style>
