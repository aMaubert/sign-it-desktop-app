<template>
    <section>
        <b-field>
            <h1 class="title is-3 has-text-centered">
                Configuration du Model
            </h1>
        </b-field>
        <form >
            <b-field label="Choix du type de model">
                <b-autocomplete v-model="chosenType"
                                :data="this.filteredType"
                                 open-on-focus
                                clearable
                                rounded>
                </b-autocomplete>
            </b-field>
            <b-field :label="`Nombre d'Epochs : ${epochs}`">
                <b-slider class="marginBottom"
                          v-model="epochs"
                          type="is-primary"
                          rounded
                          :min="1"
                          :max="1000">
                    <template v-for="val in epochsThicks" >
                        <b-slider-tick :value="val" :key="val">
                            {{val}}
                        </b-slider-tick>
                    </template>
                </b-slider>
            </b-field>

            <b-field label="Format de l'image">
                <b-select placeholder="Selectionne un format d'image"
                            v-model="imageFormat"
                            rounded
                            expanded>
                    <option v-for="eachFormat in allImageFormats">
                        {{eachFormat}}
                    </option>
                </b-select>
            </b-field>

            <b-field label="Taille de l'image">
                <div class="columns">
                    <b-input class="column"
                             v-model="imageWidth"
                             type="number"
                             min="8"
                             max="256">
                    </b-input>
                    <label class="column is-0 label">X</label>
                    <b-input class="column"
                             v-model="imageHeight"
                             type="number"
                             min="8"
                             max="256">
                    </b-input>
                </div>
            </b-field>
            <b-button type="is-primary"
                      :loading="training"
                      rounded
                      outlined
                      @click="launchTraining">
                Commencer l'entraînnement du model
            </b-button>
        </form>

    </section>
</template>

<script lang="ts">

    import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
    import {IModel} from "@/definitions/model.interface";
    import {modelsService} from "@/api/models.service";
    import {ImageFormat} from "@/definitions";

    @Component({})
    export default class ModelGenerateForm extends Vue {

        private types: Array<string> = [];
        private chosenType = '';
        private epochs = 100;
        private imageWidth = 64;
        private imageHeight = 64;
        private epochsThicks = [1,50,100,150,200,250,300,350,400,450,500,550,600,650,700,750,800,850,900,950, 1000]
        private imageFormat = ImageFormat.RGB.toString()
        private training = false;

        @Prop({default: () => new Array<IModel>()})
        readonly models!: Array<IModel>;

        get filteredType() {
            return this.types.filter((option) => {
                return option
                    .toString()
                    .toLowerCase()
                    .indexOf(this.chosenType.toLowerCase()) >= 0
            });
        }

        async launchTraining() {
            this.training = true;

            console.log({image_format: this.imageFormat});

            const model: IModel = {
                image_format: this.imageFormat,
                image_size: [this.imageWidth, this.imageHeight],
                type: this.chosenType,
                nb_epochs: this.epochs
            };

            //TODO HTTP request to train
            await modelsService.createModel(model);

            this.training = false;
        }

        get allImageFormats(): Array<String> {
            return Object.keys(ImageFormat);
        }

        @Watch('models')
        private updateModelsType() {
            this.models.forEach((model: IModel) => {
                if(!this.types.includes(model.type)){
                    this.types.push(model.type);
                }
            });
        }

    }
</script>

<style scoped
        lang="scss">

    .marginBottom{
        margin-bottom: 5%;
    }
</style>
