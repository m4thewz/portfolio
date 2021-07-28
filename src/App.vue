<template>
  <div id="app">
      <Navbar/>
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
    font-family: "Rainy Hearts";
    src: url('./assets/fonts/rainyhearts.ttf');
  }
  @font-face {
    font-family: "VCR OSD";
    src: url('./assets/fonts/VCR_OSD.ttf');
  }
  #app {
    font-family: VCR OSD;
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