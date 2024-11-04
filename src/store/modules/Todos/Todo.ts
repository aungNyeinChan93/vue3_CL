import axios from "axios";

export default {
    state: {
        todos: [],
        users: ["aung", "mgmg", "kyawyaw"],
        name: 'todos list',
        test: 'testing'
    },

    getters: {},

    mutations: {

    },

    actions: {
        async todosData() {
            const res = await axios.get('https://jsonplaceholder.cypress.io/todos')
            console.log(res);
        }
    },
}
