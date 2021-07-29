<template>
  <div id="app">
      <Navbar/>
      <Preloader/>
      <router-view/>
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }
  @font-face {
    font-family: "VCR OSD";
    src: url('./assets/VCR_OSD.ttf');
  }
  #app {
    font-family: VCR OSD;
  }
</style>

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