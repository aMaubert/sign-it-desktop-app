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
            <ResultPrediction class="section-component"
                              v-if="showPrediction"
                              :predictions="predictions" >
            </ResultPrediction>
        </div>
    </div>
</template>

<script lang="ts">

    import {Component, Vue} from "vue-property-decorator";
    import ModelSelection from "@/components/ModelSelection.vue";
    import ResultPrediction from "@/components/ResultPrediction.vue";
    import ImageUploader from "@/components/ImageUploader.vue";
    import {predictService} from "@/api/predict.service";
    import {CategoryType, IModel} from "@/definitions";

    @Component({
        components : {
            ImageUploader,
            ModelSelection,
            ResultPrediction
        }
    })
    export default class HomePage extends Vue {
        private image: object = {};
        private predictions: {[index: string] : any} | undefined = undefined;
        private showPrediction = false;

        async predict(model: IModel) {
            this.showPrediction = false;
            console.log('Prediction to make :) ');
            console.log({model});
            if (this.image === undefined) return ;
            try{
                this.predictions = undefined;
                const response = await predictService.predict(this.image, model);
                this.predictions = response.data;
                if( typeof this.predictions === 'object') {
                    for(const eachCategory in this.predictions) {
                        this.predictions[eachCategory] = Math.round(this.predictions[eachCategory] *1000 )/1000 ;
                    }
                }
                this.showPrediction = true;
            } catch (e) {
                console.log({error: e});
            }
        }

        get predictionsData() {
            return this.predictions;
        }
    }
</script>

<style scoped
        lang="scss">

</style>
