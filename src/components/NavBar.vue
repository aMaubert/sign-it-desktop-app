<template>
    <div>
        <nav class="navbar has-background-primary"
             role="navigation"
             aria-label="main navigation">
            <div class="navbar-brand">
                <div class="navbar-item">
                    <router-link to="/"
                                 class="logo has-text-black">
                        <span>
                            Sign IT
                        </span>
                    </router-link>
                </div>

            </div>
            <div class="navbar-menu is-active">
                <div class="navbar-end has-text-black">
                    <router-link    to="/generate"
                                    class="navbar-item">
                        <img alt="image model"
                             src="../assets/model.png" />
                        <span class="margin-5">
                            Créer un modèle
                        </span>
                    </router-link>
                    <router-link    to="/"
                                    class="navbar-item">
                        <b-icon icon="home" />
                        <span class="margin-5">
                            Home
                        </span>
                    </router-link>
                </div>
            </div>

        </nav>
    </div>
</template>

<script lang="ts">
    import {Vue, Component} from "vue-property-decorator";

    @Component
    export default class NavBar extends Vue {

    }
</script>

<style scoped
       lang="scss">

    .logo {
        //background-color: $primary;
        font: bold 1em Arial;
    }

    .margin-5 {
        margin: 5px;
    }
</style>