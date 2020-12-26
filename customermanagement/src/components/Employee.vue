<template>
    <v-container>
        <v-row dense>
            <v-col cols="12">
                <v-card
                        color="#385F73"
                        dark
                        v-for="user in getUser"
                        :key="user.id"
                        class="my-3"
                >
                    <v-card-title class="headline">
                        {{user.name}} {{user.lastName}}
                    </v-card-title>

                    <v-card-subtitle>{{user.message}}</v-card-subtitle>

                    <v-card-actions>
                        <EmployeeResponse :userId="user.id"/>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import EmployeeResponse from "./EmployeeResponse";

    export default {
        components: {
            EmployeeResponse
        },
        computed: {
            getUser() {
                return this.$store.getters.getUser
            }
        }
    }
</script>