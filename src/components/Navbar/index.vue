<template>
  <nav>
    <h1>M4theus<span>.me</span></h1>
    <ul>
      <NavItem content="Ínicio" href="/" />
      <NavItem content="Sobre" href="#sobre" />
      <NavItem content="Projetos" href="#projetos" />
      <NavItem content="Contato" href="#contato" />
    </ul>
  </nav>
</template>

<script>
import NavItem from "@/components/Navbar/NavItem";

export default {
  components: { NavItem },
};
</script>

<style src="@/components/Navbar/style.scss" lang="scss" />
