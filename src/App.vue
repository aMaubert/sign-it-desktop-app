<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div class="columns">
      <div class="column is-half">
        <ImageUploader></ImageUploader>
        <model-selection></model-selection>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import ImageUploader from "@/components/ImageUploader.vue";
import NavBar from "@/components/NavBar.vue";
import ModelSelection from "@/components/ModelSelection.vue";

@Component({
  components: {
    HelloWorld,
    ImageUploader,
    NavBar,
    ModelSelection
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

  @import "style";

</style>
