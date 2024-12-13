<script>
import navBar from './navBar.vue';


export default{
  name:'header', 
  components:{navBar} 
  

};
</script>


<template>
 <header class="relative">
    <div class="h-[600px] bg-cover bg-center" id="n">
     
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>

     <navBar/>


      <div class="absolute  top-20 inset-0 flex flex-col items-center justify-center text-center text-white px-4">
  <div class="grid grid-cols-1 mt-40 md:grid-cols-2 gap-4 items-center w-full max-w-7xl mx-auto">
    <!-- Left Content -->
    <div class="text-left  px-4 md:px-0">
      <h1 class="text-lg sm:text-xl md:text-2xl text-center lg:text-3xl font-bold leading-snug mb-4">
        Ready to Rock? Discover the<br> Hottest Events Here — Your<br> Calendar's New Best Friend!
      </h1>
    </div>

    <!-- Right Content -->
    <div class="mt-4 md:mt-0 h-[100%] flex justify-center  sm:h-[50%]">
      <div class="flex flex-col sm:flex-row items-center w-full max-w-lg bg-white shadow-lg rounded-lg overflow-hidden">
        <!-- Search Input -->
        <div class="flex items-center flex-grow px-4 py-2">
          <i class="fas fa-search text-gray-500 text-sm md:text-base"></i>
          <input
            type="text"
            placeholder="Search for an event"
            class="w-full text-sm md:text-base text-gray-700 focus:outline-none px-2"
          />
        </div>

        <!-- Category Selector -->
        <div class="h-8 w-px bg-gray-300 hidden sm:block"></div>
        <div class="flex items-center px-4 py-2">
          <select class="bg-white text-gray-700 text-sm md:text-base focus:outline-none">
            <option>Categories</option>
            <option>Music</option>
            <option>Sports</option>
            <option>Comedy</option>
          </select>
        </div>

        <button class="bg-violet-900 hover:bg-purple-700 text-white py-2 px-4 md:px-7 rounded-lg m-2 ">
          Search
        </button>
      </div>
    </div>
  </div>
</div>

</div>
  </header>


</template>