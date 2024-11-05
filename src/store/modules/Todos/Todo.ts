import axios from "axios";

export default {
    state: {
        todos: [],
        users: ["aung", "mgmg", "kyawyaw"],
        name: 'todos list',
        test: 'testing'
    },

    getters: {
        userCounts: state => state.users.length,
        getTodos: (state) => state.todos,
        getCompleted: (state) => {
            return state.todos.filter(todo => todo.completed == true);
        },
        // completedCounts: (getters) => getters.getCompleted.length,
    },

    mutations: {
        setTodos: (state, data) => {
            state.todos = data;
        },
        editStatus: (state, id) => {
            state.todos.filter(todo => todo.id == id).map(todo => todo.completed = !todo.completed)
        }
    },

    actions: {
        async todosData(context) {
            const res = await axios.get('https://jsonplaceholder.cypress.io/todos')
            context.commit('setTodos', res.data)
        },
        updateStatus(context, id) {
            context.commit('editStatus', id)
        }
    },
}
