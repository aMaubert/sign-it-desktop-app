<template>
    <section class="padding-20" >
        <b-field>
            <h1 class="title is-3 has-text-centered">
                Choix du Modele
            </h1>
        </b-field>

        <div class="card">
            <div class="card-content is-marginless">
                <b-field label="Selection d'un model"
                         class=" margin-lef5">
                    <b-autocomplete v-model="name"
                                    :data="filteredData"
                                    icon="search"
                                    rounded
                                    clearable
                                    open-on-focus>
                        <template slot="empty">Pas de résultat</template>
                    </b-autocomplete>
                </b-field>
            </div>
            <div class="card-footer">
                <b-field class="card-footer-item">
                    <b-button class="is-primary"
                            @click="emitLaunchPredictEvent">
                        Launch Prediction
                    </b-button>
                </b-field>
            </div>
        </div>
    </section>
</template>

<script lang="ts">

    import {Vue, Component} from "vue-property-decorator";
    import {IModel} from "@/definitions";
    import {modelsService} from "@/api/models.service";

    @Component
    export default class ModelSelection extends Vue  {
        private models: Array<IModel> = [];
        private readonly launchPredictEvent = 'launch-predict';

        private name = '';

        private static modelName(model: IModel): string {
            return `${model.type} ${model.image_size} ${model.image_format} (${model.nb_epochs} epochs)`;
        }

        get filteredData(): string[] {
            const modelNames = this.models.map((eachModel: IModel) => ModelSelection.modelName(eachModel) );
            return modelNames.filter((eachModelName: string) => {
                return eachModelName.toLowerCase()
                                    .indexOf(this.name.toLowerCase()) >= 0;
            });
        }

        private emitLaunchPredictEvent(): void {
            console.log('emitLaunchPredictEvent');
            const modelSelected = this.models.filter((eachModel: IModel) =>
                                                        ModelSelection.modelName(eachModel) === this.name);

            if( modelSelected.length !== 1) {
                this.$buefy.toast.open ({
                    duration: 2000,
                    message: `Something isn't good here`,
                    position: 'is-top',
                    type: 'is-danger'
                });
                return;
            }

            this.$emit( this.launchPredictEvent, modelSelected[0]);
        }

        async mounted() {
            console.log('mounted GenerateModel');
            this.models = await modelsService.fetchAll();
            console.log('models ', this.models);
        }
    }
</script>

<style scoped
       lang="scss">

    .padding-20 {
        padding: 20px;
    }
</style>
