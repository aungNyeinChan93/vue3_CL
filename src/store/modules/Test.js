const Test = {
  state: {
    name: "Test",
    nameTwo: "this is name Two",
    array: [],
    users: ["mgmg", "aungaung", "ayeaye"],
  },
  getters: {
    getUser: (state) => state.users,
  },
  mutations: {
    addUsers(state, user) {
      state.users.push(user);
    },
  },
  actions: {
    changeName({ state }, userName) {
      if (userName) {
        state.name = userName;
        state.nameTwo = userName;
      }
    },
  },
};

export default Test;
