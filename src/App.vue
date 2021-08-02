<template>
  <div id="app" class="font-poppins text-white">
      <Navbar/>
      <!-- <Preloader/> -->
      <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar/Index'
  // import Preloader from '@/components/Preloader'

  export default {
    name: 'Index',
    components: {
      Navbar,
      // Preloader
    }
  }
</script>