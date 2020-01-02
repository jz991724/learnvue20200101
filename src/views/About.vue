<template>
  <div class="about">
    <h1>这就是一个Demo</h1>
    <hellow-vue></hellow-vue>
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

  }
</script>
