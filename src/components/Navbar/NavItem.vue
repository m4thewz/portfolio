<template>
  <li>
    <router-link :to="href">{{ content }}</router-link>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: ["content", "href"],
};
</script>
