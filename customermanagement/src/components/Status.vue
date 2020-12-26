<template>

    <v-btn fab class="ml-auto" :color="getTicetMessage ? 'green':'red'"/>


</template>
<script>
    export default {
        props: ["userId"],

        computed: {
            getTicetMessage() {
                return this.$store.getters.getEmployeeMessage(this.userId)
            }
        }
    }
</script>