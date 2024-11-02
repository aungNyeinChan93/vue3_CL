<template>
  <section>
    <div class="container">
      <h1>Parent Component</h1>
      <ChildComponent
        :title="title"
        :description="description"
        @test="testAction"
      />
      <hr />
      <ChildComponent />
      <hr />
      <ChildComponent>
        <template v-slot:child>
          <h4>{{ title }} by slot</h4>
          <p>{{ description }}</p>
        </template>
      </ChildComponent>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";

export default {
  components: {
    ChildComponent,
  },
  setup() {
    const title = ref("Default title");
    const description = ref("Default Description");
    const testAction = () => {
      console.log("testAction emit ");
    };
    return { title, description, testAction };
  },
};
</script>
