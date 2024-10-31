<template>
  <section>
    <div class="container min-vh-100">
      <h4>Register</h4>
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
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped></style>
