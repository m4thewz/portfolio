<template>
  <div id="home">
    <Container />
    <About />
  </div>
</template>

<script>
import Container from "@/views/Home/Container";
import About from "@/views/Home/About";

export default {
  components: {
    Container,
    About,
  },
};
</script>
