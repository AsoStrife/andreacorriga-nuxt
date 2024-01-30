<template>
    <Introduction :constants="constants" />
</template>

<script>
    import Introduction from "./HomePage/Introduction.vue"
    import constants from "../constants.js"

    export default {
        name: 'Home',
        components: {
            Introduction
        },
        data() {
            return {
                constants: constants
            }
        }
    }
</script>