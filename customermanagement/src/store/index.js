import Vuex from "vuex"
import vue from "vue"
import firebase from "firebase";

vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        user: [],
        employeeMessage: []
    },
    mutations: {
        loadedTicet(state, user) {
            state.user = user

        },
        setUser(state, user) {
            state.user.push(user)
        },
        loadedMessage(state, message) {
            state.employeeMessage = message
        },
        setEmployeeMessage(state, message) {
            state.employeeMessage.push(message)
        }
    },
    actions: {
        loadedTicet({commit}) {
            firebase.database().ref("ticet").once("value").then(data => {
                console.log(data.val())
                const obj = data.val()
                let user = []
                for (let key in obj) {
                    user.push({
                        id: key,
                        name: obj[key].name,
                        lastName: obj[key].lastName,
                        message: obj[key].message

                    })
                }
                console.log(user)
                commit("loadedTicet", user)
            })
        },
        loadedMessage({commit}) {
            firebase.database().ref("ticetres").once("value").then(data => {
                console.log(data.val())
                const obj = data.val()
                let message = []
                for (let key in obj) {
                    message.push({
                        id: key,
                        message: obj[key].message,
                        ticetId: obj[key].id,
                    })
                }
                commit("loadedMessage", message)
            })
        },
        setUser({commit}, user) {

            firebase.database().ref('/ticet').push(user).then(data => {
                commit('setUser', {...user, id: data.key})
                console.log({...user, id: data.key})
            })
        },
        setEmployeeMessage({commit}, message) {
            firebase.database().ref('/ticetres').push(message).then(data => {
                console.log(data)
                commit('setEmployeeMessage', message)
            })
        }
    },
    getters: {
        getUser(state) {
            return state.user
        },
        getEmployeeMessage(state) {
            return (userId) => {
                return state.employeeMessage.find(id => {
                    return id.ticetId == userId;
                })
            }

        }
    }
})
