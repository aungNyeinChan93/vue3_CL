<template>
  <section>
    <div class="container">
      <h4 class="p-2 bg-primary rounded text-center text-white">Products</h4>
      <div v-if="error" class="my-3">
        <span class="alert alert-danger">
          {{ error }}
        </span>
      </div>
      <div v-if="!error">
        <div class="card my-3" v-for="product in products" :key="product.id">
          <div class="card-header">
            <span> {{ product.title }}</span>
          </div>
          <div class="card-body">
            <p>
              {{ product.description }}
            </p>
          </div>
          <div class="card-footer">
            <div class="col-3 offset-9 d-flex">
              <button
                @click="deleteProducts(product.id)"
                class="btn btn-sm btn-danger mx-2"
              >
                Delete
              </button>
              <button class="btn btn-sm btn-info mx-2">
                <router-link
                  class="text-decoration-none text-dark"
                  :to="{
                    name: 'product',
                    params: { id: product.id, title: product.title },
                  }"
                  >Detail</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const products = ref([]);
    const error = ref(null);

    const dataFetching = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        // console.log(await response.json());
        if (!response.ok) {
          throw Error("data is empty!");
        }
        products.value = await response.json();
      } catch (e) {
        error.value = e.message;
        // console.log(error.value);
      }
    };

    onMounted(() => {
      dataFetching();
    });

    const deleteProducts = (id) => {
      return (products.value = products.value.filter((p) => p.id !== id));
    };

    return { products, dataFetching, error, deleteProducts };
  },
};
</script>
