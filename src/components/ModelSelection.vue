<template>
    <section class="padding-20" >
        <b-field>
            <h1 class="title is-3 has-text-centered">
                Choix du Modele
            </h1>
        </b-field>

        <div class="card">
            <div class="card-content columns is-marginless">
                <b-field label="Selection d'un model"
                         class="is-offset-1 margin-lef5">
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

    @Component
    export default class ModelSelection extends Vue  {
        private models = ['Lineaire', 'Model 2', 'Model 3'];
        private readonly launchPredictEvent = 'launch-predict';

        private name = this.models[0];

        get filteredData(): string[] {
            return this.models.filter((option) => {
                return option
                    .toString()
                    .toLowerCase()
                    .indexOf(this.name.toLowerCase()) >= 0
            });
        }

        private emitLaunchPredictEvent(): void {
            console.log('emitLaunchPredictEvent');
            this.$emit(this.launchPredictEvent);
        }
    }
</script>

<style scoped
       lang="scss">

    .padding-20 {
        padding: 20px;
    }
</style>
