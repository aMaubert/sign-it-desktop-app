<template>
    <div>
        <h1 class="title is-1 has-text-centered">
            Page de Génération d'un model
        </h1>
        <div >
            <model-generate-form class="column is-half is-offset-3"
                                 :models="models"
                                  v-on:create="model => createModel(model)">
            </model-generate-form>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import ModelGenerateForm from "@/components/model-generate/Form.vue";
    import {modelsService} from "@/api/models.service";
    import {IModel} from "@/definitions/model.interface";

    @Component({
        components: {
            ModelGenerateForm
        }
    })
    export default class GenerateModel extends Vue{
        models: Array<IModel> = [];

        private modelName(model: IModel): string {
            return `${model.type} ${model.image_size} ${model.image_format} (${model.nb_epochs} epochs)`;
        }

        async mounted() {
            console.log('mounted GenerateModel');
            this.models = await modelsService.fetchAllTypes();
            console.log('models ', this.models);
        }

    }
</script>

<style scoped
        lang="scss">

</style>
