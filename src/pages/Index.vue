<template>
    <div>
        <h1>portfolio</h1>
        <p>My personal portfolio</p>
        <MyComponent/>
    </div>
</template>

<script>
import MyComponent from '@/components/MyComponent'

export default {
    name: 'Index',
    components: {
        MyComponent
    }
}
</script>