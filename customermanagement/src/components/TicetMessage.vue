<template>
    <div class="text-center">
        <v-dialog
                v-model="dialog"
                width="500"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        color="red lighten-2"
                        dark
                        v-bind="attrs"
                        v-on="on"
                >
                    Open Message
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="headline grey lighten-2">
                    Privacy Policy
                </v-card-title>

                <v-card-text>
                    {{getTicetMessage.message}}
                </v-card-text>


                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="primary"
                            text
                            @click="dialog = false"
                    >
                        I accept
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialog: false,
            }
        },
        props: ["userId"],
        computed: {
            getTicetMessage() {
                return this.$store.getters.getEmployeeMessage(this.userId)
            }
        }
    }
</script>