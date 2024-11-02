<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-6 offset-3">
          <div class="card my-2 p-2">
            <p class="text-danger">404 Not Found!</p>
            <button class="btn btn-warning my-2" @click="gohome">
              Go Home
            </button>
            <button class="btn btn-success my-2" @mouseover="logRouter">
              Log Router
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";

export default {
  setup() {
    const gohome = () => {
      console.log();
      router.push({ name: "home" });
    };

    const logRouter = () => {
      console.log(router);
    };

    return { gohome, logRouter };
  },
};
</script>
