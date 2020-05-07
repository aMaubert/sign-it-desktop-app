<template>
    <div>
        <b-field>
            <h1 class="title is-2 has-text-centered">
                Image
            </h1>
        </b-field>
        <b-field class="columns">
            <b-upload v-if="!displayImage"
                      class="column"
                      @input="files => loadLastFile(files)"
                      multiple
                      drag-drop>
                <section class="section">
                    <div class="content has-text-centered">
                        <p>
                            <b-icon
                                    icon="upload"
                                    size="is-large">
                            </b-icon>
                        </p>
                        <p>Drop your files here or click to upload</p>
                    </div>
                </section>
            </b-upload>
            <div v-if="displayImage"
                 class="column" >
                <div class="card">
                    <div class="card-image is-flex">
                        <div class="margin-auto">
                            <figure class="image is-128x128">
                                <img alt="image loaded" v-bind:src="loadImage"/>
                            </figure>
                        </div>
                    </div>
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content is-flex">
                                <div class="tag is-primary margin-auto">
                                <span>
                                    Nom du fichier : {{file.name}}
                                    <button class="delete is-small"
                                            type="button"
                                            @click="deleteFile" />
                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-field>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Jimp from 'jimp';

    @Component
    export default class ImageUploader extends  Vue {
        private file: any = undefined;
        private image: string = '';


        public deleteFile(): void {
            this.file = undefined;
            this.image = '';
        }

        public async loadLastFile(files: any): Promise<void> {
            this.file = files[files.length - 1];
            try {
                const image = await Jimp.read(this.file.path);
                image.resize(256, 256)// resize
                     .quality(60);// set JPEG quality
                this.image = await image.getBase64Async(Jimp.MIME_JPEG);
            }catch (e) {
                console.error(e);
            }
        }
        get displayImage(): boolean {
            return this.image !== '' && this.file !== undefined;
        }
        get fileName(): string {
            return this.file.name;
        }
        get loadImage(): string {
            return this.image
        }

    }
</script>

<style scoped>
    .margin-auto {
        margin: auto;
    }
</style>