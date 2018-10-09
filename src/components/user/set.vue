<template>
  <div class="set">
     <div class="set-con">
       <h3 class="h3-set">设置</h3>
       <ul>
         <li v-for="(list,index) in liList">
           <h4>{{list.con}}</h4>
           <span @click="getChange(index)"><i :vav="list.liFlag"></i></span>
         </li>
       </ul>
     </div>
  </div>
</template>
<script>
  export default {
    name: 'set',
    props:['message'],
    data () {
      return {
         liList:[
           {id:'1',con:'仅WIFI下联网',liFlag:'flag'},
           {id:'2',con:'使用2G/3G/4G播放',liFlag:'flag'},
           {id:'3',con:'使用2G/3G/4G下载',liFlag:'flag'},
           {id:'4',con:'音频自动下载',liFlag:'flag'},
           {id:'5',con:'桌面歌词',liFlag:'flag'},
           {id:'6',con:'显示歌词翻译',liFlag:'flag'},
           {id:'7',con:'不登录状态下匿名提交',liFlag:'flag'}
         ],
         LRM:{
			       LM:-2,
			       RM:13,
			     }
      }
    },
    methods:{
      getChange:function (index) {
        this.liList[index].liFlag= this.liList[index].liFlag=='fa' ? 'flag' :  'fa';
	     if(this.liList[index].liFlag=='fa'){
	     	$(".set-con ul li").eq(index).find('span').addClass('bgColor')
        $(".set-con ul li").eq(index).find('span i').animate({"left":this.LRM.RM+"px"},100)
	     }else{
	     	$(".set-con ul li").eq(index).find('span').removeClass('bgColor')
        $(".set-con ul li").eq(index).find('span i').animate({"left":this.LRM.LM+"px"},100)
	     }
         }
    },
    mounted:function () {

    }
  }
</script>
<style type="text/css">
  .set{width: 100%;margin: 0 auto;}
  .set-con ul{background: #fff; }
  .set-con ul li{overflow: hidden;line-height: 40px;border-top: 1px solid #f1f1f1;}
  .set-con ul li h4{font-weight: normal;font-size: 12px;color: #666;float: left;padding-left: 8px;}
  .set-con ul li span{float: right;display: block;position: relative;background: #ccc;width: 26px;height:12px;border-radius: 6px;margin:7px 8px 0 0;}
  .set-con ul li span i{display: block;position: absolute;top: -2px;left: -2px;background: #000;width: 16px;height: 16px;border-radius: 50%;}
  .bgColor{background: #454545 !important;}
  .h3-set{width: 100%;line-height: 50px;text-align: center;color: #666;font-weight: normal;font-size: 16px;background: #fff;}
</style>
