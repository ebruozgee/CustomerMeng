<template>
    <v-row justify="center">
        <v-dialog
                v-model="dialog"
                persistent
                max-width="600px"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                        color="primary"
                        dark
                        v-bind="attrs"
                        v-on="on"
                >
                    Send Response
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">Employee Message</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea
                                        v-model="message"
                                        color="teal"
                                >
                                    <template v-slot:label>
                                        <div>
                                            Message
                                        </div>
                                    </template>
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                    >
                        Close
                    </v-btn>
                    <v-btn
                            color="blue darken-1"
                            text
                            @click="sendMessage"
                    >
                        Send Response
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>


<script>
    export default {
        data() {
            return {
                dialog: false,
                message: ""
            }
        },
        props: ["userId"],
        methods: {
            sendMessage() {
                this.dialog = false
                let res = {
                    message: this.message,
                    id: this.userId
                }
                this.$store.dispatch("setEmployeeMessage", res)
                console.log(res)
            }

        }
    }
</script>