<template>
    <v-card flat>
        <v-form
                ref="form"
                @submit.prevent="submit"
        >
            <v-container fluid>
                <v-row>
                    <v-col
                            cols="12"
                            sm="6"
                    >
                        <v-text-field
                                v-model="user.name"
                                color="purple darken-2"
                                label="First name"
                                required
                        ></v-text-field>
                    </v-col>
                    <v-col
                            cols="12"
                            sm="6"
                    >
                        <v-text-field
                                v-model="user.lastName"
                                color="blue darken-2"
                                label="Last name"
                                required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea
                                v-model="user.message"
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
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                        :disabled="!formIsValid"
                        text
                        color="primary"
                        type="submit"
                >
                    Register
                </v-btn>
            </v-card-actions>
        </v-form>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                user: {
                    name: "",
                    lastName: "",
                    message: ""
                }
            }
        },
        computed: {
            formIsValid() {
                return this.user.name && this.user.lastName && this.user.message
            }
        }, methods: {
            submit() {
                console.log(this.user)
                this.$store.dispatch("setUser", this.user)
            }
        }
    }
</script>