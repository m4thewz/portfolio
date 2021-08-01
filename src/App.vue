<template>
  <div id="app">
      <Navbar/>
      <Preloader/>
      <router-view/>
  </div>
</template>

<script>
  import Navbar from '@/components/Navbar'
  import Preloader from '@/components/Preloader'

  export default {
    name: 'Index',
    components: {
      Navbar,
      Preloader
    }
  }
</script>