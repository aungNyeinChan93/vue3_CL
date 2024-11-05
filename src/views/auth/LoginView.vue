<template>
  <section>
    <div class="container min-vh-100">
      <h4>Login</h4>
      <div class="col-6 offset-3">
        <div class="card p-3">
          <form @submit.prevent="userLogin">
            <input
              type="email"
              name="email"
              id="email"
              class="form-control my-2"
              v-model="user.email"
            />
            <input
              type="password"
              name="password"
              id="password"
              class="form-control my-2"
              v-model="user.password"
            />
            <button class="my-2 btn btn-sm btn-primary float-start">
              Login
            </button>
            <button
              @click="userLogout"
              class="my-2 btn btn-sm btn-danger ms-2 float-start"
            >
              Logout
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
import { ref } from "vue";

export default {
  setup() {
    const goHome = () => {
      router.push({ name: "home" });
      // console.log(router);
    };

    const user = {
      email: ref(""),
      password: ref(""),
    };

    const userLogin = () => {
      // console.log(user.email, user.password);
      if (user.email !== "" && user.password !== "") {
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("auth", true);
      } else {
        throw new Error("email amd password fields are required!");
      }
    };

    const userLogout = () => {
      localStorage.clear("user");
      localStorage.setItem("auth", false);
    };

    return { goHome, user, userLogin, userLogout };
  },
};
</script>
