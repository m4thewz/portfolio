<template>
    <div class="flex flex-col items-center jusify-center relative">
        <Container/>
        <span class="absolute bottom-0 animate-bounce text-8xl material-icons">expand_more</span>
    </div>
</template>
<script>
  import Container from '@/components/Container/'
  export default{
    name: 'Index',
    components: {
        Container
    }
  }
</script>