<template>
  <section>
    <div class="container">
      <h1 class="bg-primary p-2 rounded my-2">Todos List</h1>

      <!-- completed -->
      <button class="btn btn-sm btn-info float-start" @click="status = !status">
        Only Completed
      </button>

      <SingleTodoComponent :getTodos="getTodos" :status="status" />

      <h4>
        {{ pageName }} || {{ pageName_optionApi }} || {{ users }} ||
        {{ userCounts }}
      </h4>

      <button class="btn btn-danger my-2" @click="testAction">
        Test Action
      </button>
    </div>
  </section>
</template>

<script>
import SingleTodoComponent from "@/components/SingleTodoComponent.vue";
import { computed, onMounted, ref } from "vue";
import { mapActions, mapGetters, mapState, useStore } from "vuex";

export default {
  name: "TodosView",
  components: {
    SingleTodoComponent,
  },

  setup() {
    const store = useStore();
    const status = ref(false);
    const todosData = () => {
      store.dispatch("todosData");
    };

    const pageName = computed(() => store.state.Todos.name);

    // const getTodos = computed(() => store.getters.getTodos);

    onMounted(() => {
      todosData();
    });

    return { todosData, pageName, status };
  },
  computed: {
    pageName_optionApi() {
      return this.$store.state.Todos.name;
    },
    userCounts() {
      return this.$store.getters.userCounts;
    },
    ...mapState({ users: (state) => state.Todos.users }),
    ...mapGetters(["getTodos"]),
  },
  methods: { ...mapActions(["testAction", "todosData"]) },
};
</script>
