<template>
  <section>
    <div class="container">
      <div class="card p-2 shadow my-2" v-if="editStatus">
        <input
          type="text"
          class="form-control"
          v-model="list"
          @keyup.enter="editStatus = !editStatus"
        />
      </div>
      <div
        class="card p-1 shadow my-2 text-start d-flex"
        v-if="!editStatus"
        @dblclick="editStatus = !editStatus"
      >
        <p class="text-danger ms-2">{{ list }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";

export default {
  name: "SingleListView",
  setup() {
    const list = ref("");
    const editStatus = ref(true);

    return { list, editStatus };
  },
};
</script>

<style lang="stylus" scoped></style>
