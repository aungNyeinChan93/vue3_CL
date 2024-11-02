<template>
  <section>
    <div class="container min-vh-100">
      <h3>Navigation Button</h3>
      <div class="btn-group">
        <button class="btn btn-sm btn-success" @click="goHome">Go Home</button>
        <button class="btn btn-sm btn-warning" @click="goAbout">
          Go About
        </button>
        <button class="btn btn-sm btn-danger" @click="goProducts">
          Go Products
        </button>
      </div>
      <ParentComponent />
    </div>
  </section>
</template>

<script>
import ParentComponent from "@/components/ParentComponent.vue";

export default {
  //option api
  name: "NavBtnView",
  components: {
    ParentComponent,
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
    goAbout() {
      this.$router.push({ name: "about" });
    },
    goProducts() {
      this.$router.push({ name: "products" });
    },
  },
};
</script>
