<template>
    <section class="padding-20">
        <h1 class="title is-2 has-text-centered">
            Resultats
        </h1>
        <div class="card">

            <div class="card-header">
                <h1 class="title is-5 margin-auto">
                    Prédiction
                </h1>

            </div>
            <div class="card-content">
                <span>
                    Panneau d'obligation   : 89%
                    <br>
                    Panneau d'interdiction : 10.5%
                    <br>
                    Panneau de danger      : 0.5%
                </span>
            </div>
        </div>
    </section>
</template>

<script lang="ts">

    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class ResultPrediction extends Vue {

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