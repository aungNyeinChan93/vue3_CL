<template>
  <section>
    <div class="container bg-info p-2 rounded shadow my-2">
      <h4 v-if="title" @click="eventStart">{{ title }}</h4>
      <h4 v-else>This is Child Components</h4>
      <p v-if="description">
        {{ description }}
      </p>
      <p v-else>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
        repudiandae maxime sunt?
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
    description: {
      type: String,
      required: false,
      default: "this is props default description",
      validator(val) {
        return val != null;
      },
    },
  },
  setup(props) {
    console.log(props);

    return {};
  },
  methods: {
    eventStart() {
      this.$emit("test");
    },
  },
};
</script>
