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

* {
  padding: 0;
  margin: 0;
  outline: none;

  box-sizing: border-box;
}

#app {
  font-family: "Poppins", sans-serif;
  background-color: #f8f9fa;
}
</style>
