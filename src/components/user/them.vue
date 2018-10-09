<template>
  <div class="them">
    <div class="them-con">
       <h4 class="them-h4">主题设置</h4>
       <div class="them-main">
         <ul>
           <li v-for="(colors,index) in msgThemColor.themColor" @click="getSel(index)">
             <p>
               <img :src='require("../../assets/them/"+colors.nameImg)' alt="">
               <span v-if="index==selectBg"><img :src='require("../../assets/them/"+colors.nameImgSpan)' alt=""></span>
             </p>
             <p>{{colors.nameCon}}</p>
           </li>
         </ul>
       </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'them',
    props:['msgThemColor'],
    data () {
      return {
         selectBg:localStorage.selectBg || 0
      }
    },
    methods:{
      getSel:function (index) {
        for(var j=0;j<this.msgThemColor.themColor.length;j++){
          this.msgThemColor.themColor[j].selectFlag=false
        }
        this.msgThemColor.themColor[index].selectFlag=true;
        this.msgThemColor.themColorSelect=this.msgThemColor.themColor[index].name;
        this.msgThemColor.setThem=this.msgThemColor.themColor[index].name;
        localStorage.setThem=this.msgThemColor.themColor[index].name;
        this.selectBg=index;
        localStorage.selectBg=index;
      }
    },
    mounted:function () {
    }
  }
</script>

<style type="text/css">
  .them{width: 100%;}
  .them-con{width: 100%;}
  .them-h4{width: 100%;line-height: 50px;text-align: center;color: #666;font-weight: normal;font-size: 16px; }
  .them-main{}
  .them-main ul{overflow: hidden;}
  .them-main ul li{width: 30%;float: left;margin:10px 0 0 2.5%;}
  .them-main ul li img{width: 90%;border-radius: 3px;margin-left: 5%;}
  .them-main ul li p{color: #666;text-align: center;font-size: 12px;line-height: 25px;position: relative;}
  .them-main ul li p span{position: absolute;right: 5%;top: 0;display: block; width: 15px;height: 15px;}
  .them-main ul li p span{width: 15px;height: 15px;}
</style>
