<template>
    <section class="padding-20">
        <h1 class="title is-2 has-text-centered">
            Resultats
        </h1>
        <div class="card">

            <header class="card-header">
                <h1 class="card-header-title title is-5 margin-auto">
                    Prédiction
                </h1>
            </header>
            <div class="card-content">
                <h4 class="title is-4">
                    {{ modelName }}
                </h4>
                <ul class="is-lower-roman">
                    <li>Panneau d'obligation   : {{predictions[categoryType().Obligation]}} %</li>
                    <li>Panneau d'interdiction : {{predictions[categoryType().Prohibition]}} %</li>
                    <li>Panneau de danger      : {{predictions[categoryType().Danger]}} %</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script lang="ts">

    import {Vue, Component, Prop} from "vue-property-decorator";
    import {CategoryType, IModel, ModelType, ModelTypeUtil} from '@/definitions';


    @Component
    export default class ResultPrediction extends Vue {
        @Prop({default: {}  } )
        predictions !: {[index: string]:any};

        @Prop( {default: {}})
        modelUsed !: IModel;

        get predictionsComputed() {
            return this.predictions;
        }

        categoryType() {
            return CategoryType;
        }

        mounted(){
            console.log({predictions : this.predictions});
        }


        get modelName(): string {
            console.log(this.modelUsed);
            const modelType = ModelType[this.modelUsed.type as keyof typeof ModelType];
            return ModelTypeUtil.translationType(modelType);
        }

    }
</script>

<style scoped
        lang="scss">
    .padding-20 {
        padding: 20px;
    }

    .margin-auto {
        margin: auto;
    }

</style>
