<template>
  <section>
    <div class="container min-vh-100">
      <h4>Login</h4>
      <div class="col-6 offset-3">
        <div class="card p-3">
          <form>
            <input
              type="text"
              name="name"
              id="name"
              class="form-control my-2"
            />
            <input
              type="email"
              name="email"
              id="email"
              class="form-control my-2"
            />
            <input
              type="password"
              name="password"
              id="password"
              class="form-control my-2"
            />
            <button class="my-2 btn btn-sm btn-primary float-start">
              Login
            </button>
            <button
              @click="goHome"
              class="btn btn-sm btn-success float-start mx-2 my-2"
            >
              Go Home
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router/index";

export default {
  setup() {
    const goHome = () => {
      router.push({ name: "home" });
    };

    return { goHome };
  },
};
</script>
