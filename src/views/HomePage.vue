<template>
    <div class="columns content-body">
        <div class="column is-half">
            <ImageUploader class="section-component"></ImageUploader>
            <model-selection class="section-component"></model-selection>
        </div>
        <div class="column">
            <ResultPrediction class="section-component"></ResultPrediction>
        </div>
    </div>
</template>

<script lang="ts">

    import {Component, Vue} from "vue-property-decorator";
    import ModelSelection from "@/components/ModelSelection.vue";
    import ResultPrediction from "@/components/ResultPrediction.vue";
    import ImageUploader from "@/components/ImageUploader.vue";

    @Component({
        components : {
            ImageUploader,
            ModelSelection,
            ResultPrediction
        }
    })
    export default class HomePage extends Vue {
    }
</script>

<style scoped
        lang="scss">

</style>