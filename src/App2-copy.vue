<template>
  <section>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link>|
      <router-link :to="{ name: 'products' }">Products</router-link>
    </nav>
    <div class="view bg-info">
      <router-view />
    </div>
    <div class="sec-view">
      <router-view></router-view>
    </div>
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat nihil
      reprehenderit distinctio saepe maxime? Laboriosam?
    </p>
  </section>
</template>

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
      color: #42b983;
    }
  }
}
</style>
