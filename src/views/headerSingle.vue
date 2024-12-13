<template>
  <NavBar/>

  <div class="bg-white shadow rounded-lg p-6" id="product-details-container">
  </div>

  <div v-if="isLoading" class="flex items-center justify-center ">
    <svg class="animate-spin h-8 w-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25 " cx="12" cy="12" r="10" stroke="currentColor " stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
    </svg>
  </div>

  <div v-else>
    <div class="flex justify-center bg-violet-200 w-3/4 m-auto rounded-xl">
      <img :src="product.image" alt="Product Image" class="rounded-lg  max-w-md w-full object-cover" />
    </div>

    
    <div class="flex justify-between mt-6">
      <button @click="fetchPreviousProduct" class="bg-violet-900 text-white px-4 py-2 rounded-lg hover:bg-gray-400">
        Previous
      </button>
      <button @click="fetchNextProduct" class="bg-violet-900 text-white px-4 py-2 rounded-lg hover:bg-gray-400">
        Next
      </button>
    </div>

    <!-- Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <!-- Event Details -->
      <div class="px-20">
        <h2 class="text-2xl font-bold text-gray-800">{{product.title}}</h2>
        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 text-sm mt-4">
          <p class="flex items-center">
            <span class="material-icons-outlined mr-2 text-purple-600">calendar_today</span>
            Sunday, October , 2023
          </p>
          <p class="flex items-center mt-2 sm:mt-0">
            <span class="material-icons-outlined mr-2 text-purple-600">schedule</span>
            6:00am
          </p>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 text-sm mt-4">
          <p class="flex items-center mt-2 sm:mt-0">
            <span class="material-icons-outlined mr-2 text-purple-600">place</span>
            Race Course, Lagos Island, Lagos, Nigeria
          </p>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 text-sm mt-4">
          <p class="flex items-center mt-2 sm:mt-0">
            <span class="material-icons-outlined mr-2 text-purple-600">person</span>
            FK, Jollz
          </p>
        </div>

        <div class="mt-6">
          <h3 class="font-semibold text-lg text-gray-800">Event description</h3>
          <p class="text-gray-600 text-sm mt-2 leading-relaxed">
            ${product.description}
          </p>
        </div>

       
        <div class="mt-6">
          <h3 class="font-semibold text-lg text-gray-800">Tickets Pricing</h3>
          <div class="flex items-center space-x-4 mt-10">
            <div class="flex flex-col items-center">
              <p class="text-gray-600 font-semibold"> Price</p>
              <p class="text-purple-600 font-bold">{{product.price}}</p>
            </div>
          </div>
          <button class="bg-purple-600 text-white px-6 py-2 mt-4 rounded-lg hover:bg-purple-700">Buy now</button>
        </div>
      </div>

      
      <div class="px-20">
      
        <div class="mb-6">
          <h3 class="text-2xl font-bold text-gray-800">Contact Organizers</h3>
          <div class="flex space-x-6 mt-4 text-gray-600 ">
            <p class="flex items-center justify-center bg-violet-900 rounded-full w-10 h-10">
              <i class="fas fa-envelope text-white"></i>
            </p>
            <p class="flex items-center justify-center bg-violet-900 rounded-full w-10 h-10 ">
              <i class='fa fa-twitter text-white'></i>
            </p>
            <p class="flex items-center justify-center bg-violet-900 rounded-full w-10 h-10 ">
              <i class='fa fa-instagram text-white'></i>
            </p>
          </div>
        </div>

        
        <div>
          <h3 class="font-semibold text-lg text-gray-800">Directions</h3>
          <iframe class="w-full h-[450px] rounded-lg" 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26488.633474795973!2d3.385376366340093!3d6.438758678847194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c8c9e0c3e9b%3A0x5ac50c8b1f812235!2sLagos%20Island!5e0!3m2!1sen!2sng!4v1697450874451!5m2!1sen!2sng" 
                  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/navBarSingle.vue';
import axios from 'axios';

export default {
  name: 'headerSingle',
  props: ['id'],
  components: { NavBar }, 
  data() {
    return {
      product: null,
      isLoading: true,
    };
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      this.isLoading = true;
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${this.id}`);
        this.product = response.data;
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        this.isLoading = false;
      }
    },
    fetchNextProduct() {
      const nextId = parseInt(this.id) + 1;
      this.$router.push({ name: 'headerSingle', params: { id: nextId } });
      this.fetchProduct();
    },
    fetchPreviousProduct() {
      const prevId = parseInt(this.id) - 1;
      if (prevId > 0) { 
        this.$router.push({ name: 'headerSingle', params: { id: prevId } });
        this.fetchProduct();
      }
    },
  },
  watch: {
    id(newId, oldId) {
      if (newId !== oldId) {
        this.fetchProduct();
      }
    },
  },
};
</script>
