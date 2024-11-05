<template>
  <section>
    <h1>Test View</h1>
    <div>
      <h4>Users</h4>
      <ol>
        <li v-for="user in getUser" :key="user">{{ user }}</li>
      </ol>
    </div>
    <hr />
    <div>
      <div class="mt-2 row">
        <h3>{{ name }}</h3>
        <h3>{{ nameTwo }}</h3>
        <input
          type="text"
          class="form-control mx-2 col"
          placeholder="username"
          v-model="userName"
        />
        <button
          @click="changeName(userName)"
          class="col-2 btn btn-sm btn-info mx-2"
        >
          Change Name
        </button>
        <button
          @click="addUsers(userName)"
          class="col-2 btn btn-sm btn-info mx-2"
        >
          Add user
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { mapActions, mapGetters, mapMutations, mapState, useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const userName = ref("");

    return { store, userName };
  },
  methods: {
    ...mapActions(["changeName"]),
    ...mapMutations(["addUsers"]),
  },
  computed: {
    ...mapGetters(["getUser"]),
    ...mapState({
      name: (state) => state.Test.name,
      nameTwo: (state) => state.Test.nameTwo,
    }),
  },
};
</script>
