<template>
  <section>
    <LayoutView>
      <template v-slot:main>
        <router-view></router-view>
      </template>
    </LayoutView>
  </section>
</template>

<script>
import LayoutView from "./views/LayoutView.vue";

export default {
  components: {
    LayoutView,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #d87034;
    }
  }
}
</style>
