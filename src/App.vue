<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: { Navbar },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Poppins:wght@400;600;700&display=swap");

#app {
  font-family: "Poppins", sans-serif;
}
</style>
