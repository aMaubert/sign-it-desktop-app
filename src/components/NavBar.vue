<template>
    <div >
        <nav class="navbar has-background-primary"
             role="navigation"
             aria-label="main navigation">
            <div class="navbar-brand">
                <div class="navbar-item">
                    <h1 class="logo">Sign IT</h1>
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
</style>