<template>
    <section class="has-background-primary">
        <h1 class="title is-3">
            Choix du Modele à entrainer
        </h1>
        <b-field>
            <span>
                Select a model :
            </span>
            <select >
                <option>Model 1</option>
                <option>Model 2</option>
                <option>Model 3</option>
            </select>
        </b-field>
        <b-field>
            <b-button class="is-primary">
                Launch Prediction
            </b-button>
        </b-field>

    </section>
</template>

<script lang="ts">

    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class ModelSelection extends Vue  {
        private models = ['Lineaire', 'Model 2', 'Model 3'];
        private data = [
            'Angular',
            'Angular 2',
            'Aurelia',
            'Backbone',
            'Ember',
            'jQuery',
            'Meteor',
            'Node.js',
            'Polymer',
            'React',
            'RxJS',
            'Vue.js'
        ];
        private name = '';

        get filteredData(): string[] {
            return this.data.filter((option) => {
                return option
                    .toString()
                    .toLowerCase()
                    .indexOf(this.name.toLowerCase()) >= 0
            });
        }
    }
</script>

<style scoped>

</style>