<script>
import axios from 'axios'

export default {
  name: 'trendingEvent',
  data() {
    return {
      products: [],
      isLoading: false,
    };
  },
  methods: {
    async fetchProducts() {
      this.isLoading = true;
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        this.products = response.data; 
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.isLoading = false;
      }
    },
  },
  mounted() {
    this.fetchProducts();
  },
};


</script>


<template>
  <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center mb-8">
          <h2 class="text-2xl md:text-3xl font-semibold">Trending Events</h2>
          <a href="#" class="text-violet-900 hover:underline">View all trending events &nearr;</a>
        </div>
  
    <div>
      <div v-if="isLoading" class="flex items-center justify-center ">
    <svg class="animate-spin h-8 w-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25 " cx="12" cy="12" r="10" stroke="currentColor " stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
    </svg>
  </div>

      <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" id="each_event">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            :src="product.image"
            :alt="product.title"
            class="w-fullmax-w-sm mx-auto h-48 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold">{{ product.title }}</h3>
            <p class="text-gray-600 text-sm mt-2">Price: ${{ product.price }}</p>
            <p class="text-gray-500 text-sm mt-4">{{ product.description }}</p>
             
            <RouterLink
              :to="{ name: 'headerSingle', params: { id: product.id } }"
              class="text-violet-900 hover:underline mt-4 inline-block"
            >
              View details &nearr;
            </RouterLink>
  
          </div>
        </div>
      </div>
    </div>
  
  </div>
  </section>
  </template>
  