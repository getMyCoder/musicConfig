<template>
  <div class="friends">
    <div class="friends-con">
      <div class="person-title">我的好友</div>
      <div class="friends-main">
          <ul>
            <li v-for="(friendItem,index) in friend">
                <div class="friends-h">
                   <h2><img :src='require("../../assets/images/"+friendItem.frHead)' alt=""></h2>
                   <h3>{{friendItem.name}}</h3>
                </div>
              <p>{{friendItem.autograph}}</p>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'friends',
    props:['friend'],
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
  .friends-con{width: 100%; }
  .friends-main{ padding: 15px 8px; }
  .friends-main ul{}
  .friends-main ul li{border:1px solid #dbdbdb;height: 83px;overflow: hidden;width: 100%;margin: 8px 0 0 0 ;}
  .friends-main ul li p{font-size: 12px;color: #666;padding: 0 8px;line-height: 18px;}
  .friends-h{overflow: hidden;padding: 8px;}
  .friends-h h2{float: left;width: 30px;height: 30px;border-radius: 50%;overflow: hidden;}
  .friends-h h2 img{ width: 30px;height: 30px;}
  .friends-h h3{ float: left;margin-left: 15px; font-size: 14px;color: #60a1d4;line-height: 30px;}
</style>
