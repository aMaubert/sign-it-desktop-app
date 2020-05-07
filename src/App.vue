<template>
  <div id="app">
    <nav-bar></nav-bar>

    <!-- route outlet -->
    <!-- component matched by the route will render here -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import NavBar from "@/components/NavBar.vue";

@Component({
  components: {
    HelloWorld,
    NavBar
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

  @import "style";

  .content-body {
    padding: 20px;
  }


  .section-component {
    border: solid 2px $primary;
  }

</style>
