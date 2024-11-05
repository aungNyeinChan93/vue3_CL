<template>
  <section>
    <div class="row" v-if="!status">
      <div class="col-4 my-2" v-for="todo in getTodos" :key="todo.id">
        <div
          class="card"
          :class="{ 'bg-danger': todo.completed }"
          @dblclick="updateStatus(todo.id)"
        >
          <div class="card-header">
            <span>{{ todo.title }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="status">
      <h3>Total Completed : {{ getCompleted.length }}</h3>
      <div class="col-4 my-2" v-for="todo in getCompleted" :key="todo.id">
        <div
          class="card"
          :class="{ 'bg-danger': todo.completed }"
          @dblclick="updateStatus(todo.id)"
        >
          <div class="card-header">
            <span>{{ todo.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    getTodos: {
      type: Array,
      required: true,
    },
    status: {
      type: Boolean,
    },
  },
  setup() {
    const store = useStore();

    const updateStatus = (id) => {
      store.dispatch("updateStatus", id);
    };

    const getCompleted = computed(() => store.getters.getCompleted);

    return {
      updateStatus,
      store,
      getCompleted,
    };
  },
};
</script>

<style scoped>
.card-header {
  height: 75px;
  text-align: center;
  line-height: 75px;
  padding: 10px;
  margin: 10px;
  background: rgb(95, 219, 157);
  color: rgb(14, 103, 185);
}
</style>
