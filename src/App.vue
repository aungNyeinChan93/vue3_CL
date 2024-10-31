<template>
  <section>
    <nav class="">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link> |
      <router-link :to="{ name: 'products' }">Products</router-link> |
      <router-link :to="{ name: 'login' }">Login</router-link> |
      <router-link :to="{ name: 'register' }">Register</router-link> |
    </nav>
    <main class="min-vh-100">
      <div class="container">
        <router-view />
      </div>
    </main>
    <footer>
      <h3>this is footer</h3>
    </footer>
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
      color: #d87034;
    }
  }
}
</style>
