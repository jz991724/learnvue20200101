<template>
  <div class="about">
    <h1>这就是一个Demo</h1>
    <hellow-vue @test="getChildrenVal" :count="aboutcount" v-model="msg"></hellow-vue>
    <div>
      {{msg}}
    </div>
    <a-button @click="msg=''">test</a-button>
  </div>
</template>
<script lang="ts">
  import {Vue,Component} from "vue-property-decorator";
  import HellowVue from "../components/HellowVue.vue";
  @Component({
    components:{
      HellowVue
    }
  })
  export default class test extends  Vue{
    msg:string="";
    aboutcount:number=20;
    getChildrenVal(param:number){
      this.aboutcount=param*2;
    }
  }
</script>
