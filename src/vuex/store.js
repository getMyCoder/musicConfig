import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state={
    flag1:localStorage.flag1 || 'true',
    flag2:localStorage.flag2 || 'false',
    flag3:localStorage.flag3 || 'false'
};
const mutations={
  getLink(state,indexState){
    if (indexState==0){
      state.flag1=true;
      localStorage.flag1= true

      state.flag2=false;
      localStorage.flag2= false
      state.flag3=false;
      localStorage.flag3= false

    }
    if (indexState==1){
      state.flag2=true;
      localStorage.flag2= true

      state.flag1=false;
      localStorage.flag1= false
      state.flag3=false;
      localStorage.flag3= false
    }
    if (indexState==2){
      state.flag3=true;
      localStorage.flag3= true

      state.flag2=false;
      localStorage.flag2= false
      state.flag1=false;
      localStorage.flag1= false
    }
  }


};
export default new Vuex.Store({
  state,mutations
})
