<template>
  <section>
    <nav class="">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link> |
      <router-link :to="{ name: 'products' }">Products</router-link> |
      <router-link :to="{ name: 'login' }">Login</router-link> |
      <router-link :to="{ name: 'register' }">Register</router-link> |
      <router-link :to="{ name: 'navBtn' }">Nav Button</router-link> |
      <router-link :to="{ name: 'lists' }">Lists</router-link> |
      <router-link :to="{ name: 'todos' }">Todos List</router-link> |
    </nav>
    <main class="">
      <div class="container-sm">
        <slot name="main" />
      </div>
    </main>
  </section>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped></style>
