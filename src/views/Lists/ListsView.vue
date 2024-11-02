<template>
  <section>
    <div class="container">
      <h1 class="bg-primary p-2 text-center text-white rounded">All List</h1>
      <SingleListView />
      <SingleListView />
      <SingleListView />
      <SingleListView />
      <SingleListView />
      <SingleListView />
    </div>
  </section>
</template>

<script>
import SingleListView from "./SingleListView.vue";

export default {
  name: "ListsView",
  components: {
    SingleListView,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="stylus" scoped></style>
