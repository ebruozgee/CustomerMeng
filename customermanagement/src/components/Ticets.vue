<template>
    <v-container>
        <v-row dense>
            <v-col cols="12">
                <v-card
                        color="#385F73"
                        dark
                        v-for="user in getUser"
                        :key="user"
                        class="my-3"
                >
                    <v-card-title class="headline">
                        {{user.name}} {{user.lastName}}
                    </v-card-title>

                    <v-card-subtitle>{{user.message}}</v-card-subtitle>
                    <v-card-actions>
                        <TicetMessage :userId="user.id"/>
                        <v-spancer></v-spancer>
                        <Status :userId="user.id"/>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import TicetMessage from "./TicetMessage";
    import Status from "./Status";

    export default {
        data() {
            return {
                message: ""
            }
        },
        components: {
            TicetMessage,
            Status
        },
        computed: {
            getUser() {
                return this.$store.getters.getUser
            },

        },
        created() {
            this.$store.dispatch("loadedMessage")
        }
    }
</script>