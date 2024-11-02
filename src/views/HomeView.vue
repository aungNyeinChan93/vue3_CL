<template>
  <div class="home">
    <NavBtnView />
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import NavBtnView from "./TestView/NavBtnView.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
    NavBtnView,
  },
});
</script>
