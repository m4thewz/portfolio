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
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-thumb {
  background: #008dff;
  border: 10px none #ffffff;
  border-radius: 30px;
}
::-webkit-scrollbar-thumb:hover {
  background: #b3afb3;
}
::-webkit-scrollbar-track {
  background: #f8f9fa;
  border-radius: 0px;
  box-shadow: inset 0px 0px 0px 0px #f0f0f0;
}
</style>
