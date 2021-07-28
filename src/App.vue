<template>
  <div id="app">
      <Navbar/>
      <router-view/>
  </div>
</template>

<style>
  #app {
    font-family: Rainy Hearts;
  }
  @font-face {
      font-family: "Rainy Hearts";
      src: url('./assets/fonts/rainyhearts.ttf');
  }
  @font-face {
      font-family: "VCR OSD";
      src: url('./assets/fonts/VCR_OSD.ttf');
  }
</style>

<script>
  import Navbar from '@/components/Navbar'

  export default {
      name: 'Index',
      components: {
          Navbar
      }
  }
</script>