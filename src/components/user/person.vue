<template>
  <div class="person">
    <div class="person-con">
        <div class="person-title">编辑资料</div>
        <div class="head-img">
          <img :src="msgUser.img" alt="">
          <input type="file" name="file" id="file" class="inputImg" />
        </div>
        <div class="headU">
          <h3 class="nameU" @click="nameUFun()" ref="nameURef">{{msgUser.name}}</h3>
          <p class="nameC" @click="nameCFun()" ref="nameCRef">{{msgUser.con}}</p>
          <div class="getName" v-show="nameFlag.nameFlagDiv">
            <input type="text" v-if="nameFlag.nameTitleFlag" v-model="changeUser.msgUserN">
            <textarea v-if="nameFlag.nameConFlag" v-model="changeUser.msgUserC"></textarea>
            <div class="btn">
              <button class="btn-yes" @click="hideNameY()">确定</button><button class="btn-no" @click="hideNameN()">取消</button>
            </div>
          </div>
        </div>
        <div class="Label">
            <h4>个性标签</h4>
            <div class="label-span">
              <span v-for="(types,index) in msgUser.type">{{types}}</span>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'person',
    props:['msgUser'],
    data () {
      return {
        nameFlag:{
          nameFlagDiv:false,
          nameTitleFlag:false,
          nameConFlag:false
        },
        changeUser:{
          msgUserN:'',
          msgUserC:''
        }
      }
    },
    methods:{
      nameUFun:function () {
        this.nameFlag.nameFlagDiv=true;
        this.nameFlag.nameTitleFlag=true;
        this.changeUser.msgUserN=this.msgUser.name;
      },
      nameCFun:function () {
        this.nameFlag.nameFlagDiv=true;
        this.nameFlag.nameConFlag=true;
        this.changeUser.msgUserC=this.msgUser.con;
      },
      hideNameY:function () {
        if(this.nameFlag.nameTitleFlag){
          var htmlN=this.changeUser.msgUserN;
          // 这里需要提交一个ajax-->姓名
          this.$refs.nameURef.innerHTML=htmlN;
          this.msgUser.name=htmlN

        }
        if(this.nameFlag.nameConFlag){
          var htmlC='';
          // 这里需要提交一个ajax-->签名
          if(this.changeUser.msgUserC.length>47){
            htmlC=this.changeUser.msgUserC.slice(0,47)+"···";
          }else{
            htmlC=this.changeUser.msgUserC
          }
          this.$refs.nameCRef.innerHTML=htmlC;
          this.msgUser.con=htmlC
        }
        this.nameFlag.nameFlagDiv=false;
        this.nameFlag.nameTitleFlag=false;
        this.nameFlag.nameConFlag=false;
      },
      hideNameN:function () {
        this.nameFlag.nameFlagDiv=false;
        this.nameFlag.nameTitleFlag=false;
        this.nameFlag.nameConFlag=false;
      }
    },
    computed:{},
    created:function () {},
    mounted:function () {}
  }
</script>

<style type="text/css">
  .person{width: 100%;height: 100%;}
  .person-con{padding-top: 15px;overflow: auto}
  .head-img{width: 100px;height: 100px;margin: 0 auto;border-radius: 50%;overflow: hidden;position: relative;}
  .head-img img{width: 100px;height: 100px;}
  .headU{width: 100%;margin-top: 15px;}
  .nameU{font-size: 16px; line-height: 40px;color: #60a1d4;padding: 0 15px;text-align: center;}
  .nameC{font-size: 12px;color: #666;line-height: 20px;padding: 0 15px; height: 40px;overflow: hidden;text-indent: 20px}
  .person-title{width: 100%;line-height: 50px;text-align: center;color: #666;font-weight: normal;font-size: 16px; }
  .inputImg{position: absolute;top: 0;left: 0;width: 100px;height: 100px;opacity: 0;filter: alpha(opacity=0)}
  .Label{margin-top: 10px;padding-bottom: 20px;}
  .Label h4{text-align: center;line-height: 35px;color: #666;font-weight: normal; margin-bottom: 15px;}
  .label-span{width: 90%;overflow: hidden;text-align: center;padding: 0 15px;}
  .label-span span{font-size: 12px;padding: 3px 10px; margin: 5px 4px;display: block;float: left;border-radius: 3px;color: #60a1d4;border:1px solid #60a1d4;background: #fff;}
  .label-span span:hover{border:1px solid #fff;background: #60a1d4;color: #fff;}
  .getName{position: absolute;top: 0;left: 0;width: 100%; background: rgba(0,0,0,0.5);padding-top: 30px;}
  .getName textarea{width: 90%;height: 100px;text-indent: 20px;border:1px solid #ccc;margin: 0 0 0 4.5%;}
  .getName input{width: 91.5%;height: 30px;text-indent: 20px;border:1px solid #ccc;margin: 0 0 0 4.5%;}
  .btn{width: 80%; text-align: center;margin: 10px auto 0;}
  .btn button{width:70px;height:30px;border:none; border-radius: 3px;margin: 0 8px;}
  .btn-yes{background: #329bec;color: #fff;}
  .btn-no{background: #ccc;color: #666;}
</style>
