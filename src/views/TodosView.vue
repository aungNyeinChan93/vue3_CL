<template>
  <section>
    <div class="container">
      <h1 class="bg-primary p-2 rounded my-2">Todos List</h1>

      <SingleTodoComponent />

      <hr />
      <h4>{{ pageName }} || {{ pageName_optionApi }} || {{ users }}</h4>
    </div>
  </section>
</template>

<script>
import SingleTodoComponent from "@/components/SingleTodoComponent.vue";
import { computed, onMounted } from "vue";
import { mapState, useStore } from "vuex";

export default {
  name: "TodosView",
  components: {
    SingleTodoComponent,
  },

  setup() {
    const store = useStore();
    const todosData = () => {
      store.dispatch("todosData");
    };
    const pageName = computed(() => store.state.Todos.name);

    onMounted(() => {
      todosData();
    });
    return { todosData, pageName };
  },
  computed: {
    pageName_optionApi() {
      return this.$store.state.Todos.name;
    },
    ...mapState({ users: (state) => state.Todos.users }),
  },
};
</script>
