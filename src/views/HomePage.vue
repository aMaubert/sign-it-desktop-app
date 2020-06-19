<template>
    <div class="columns content-body">
        <div class="column is-half">
            <ImageUploader class="section-component"
                            v-model="image">
            </ImageUploader>
            <model-selection class="section-component"
                            v-on:launch-predict="model => predict(model)">
            </model-selection>
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
    import {predictService} from "@/api/predict.service";
    import {IModel} from "@/definitions";

    @Component({
        components : {
            ImageUploader,
            ModelSelection,
            ResultPrediction
        }
    })
    export default class HomePage extends Vue {
        private image: object = {};

        async predict(model: IModel) {

            console.log('Prediction to make :) ');
            console.log({model});
            if (this.image === undefined) return ;
            try{
                const response = await predictService.predict(this.image, model);
                console.log(response);
            } catch (e) {
                console.log({error: e});
            }

        }
    }
</script>

<style scoped
        lang="scss">

</style>
