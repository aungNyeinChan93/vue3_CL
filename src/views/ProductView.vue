<template>
  <section>
    <div class="container min-vh-100">
      <h1>Detail Product</h1>
      <p>{{ $route.params.id }} || {{ id }}</p>
      <div class="card my-2 p-2">
        <div class="card-header">
          <span>{{ product.title }}</span>
        </div>
        <div class="card-body">
          <p>{{ product.description }}</p>
        </div>
        <div class="card-footer">
          <button class="btn btn-secondary mx-2 float-end" @click="back">
            Back
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import router from "@/router";
import { onMounted, ref } from "vue";

export default {
  name: "productView",
  props: ["id", "title"],
  setup(props) {
    const product = ref({});
    const fetchdata = async () => {
      const res = await fetch(`http://localhost:5000/products/${props.id}`);
      const data = await res.json();
      product.value = data;
    };
    const back = () => {
      router.push({ name: "products" });
    };

    onMounted(() => {
      fetchdata();
    });

    return { fetchdata, product, back };
  },
};
</script>
