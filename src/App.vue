<template>
  <div id="app" class="font-poppins text-white">
      <Navbar/>
      <Preloader/>
      <router-view/>
  </div>
</template>

<style>
    body{
        background: url('../assets/images/wallpapper.png');
        background-size: 100%;
        background-repeat: no-repeat;
    }
</style>
<script>
  import Navbar from '@/components/Navbar/Index'
  import Preloader from '@/components/Preloader'

  export default {
    name: 'Index',
    components: {
      Navbar,
      Preloader
    }
  }
</script>