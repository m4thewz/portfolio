<template>
  <div id="app" class="font-play text-white bg-primary">
      <Navbar/>
      <Preloader/>
      <router-view/>
  </div>
</template>

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