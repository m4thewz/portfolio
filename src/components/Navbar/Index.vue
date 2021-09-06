<template>
    <nav class="fixed flex justify-between items-center py-3 px-4 w-screen">
        <h1 class="text-4xl font-medium">M4theus.me</h1>
        <ul class="flex space-x-3 text-xl font-josefin">
            <NavItem href="/">Home</NavItem>
            <NavItem href="#projetos">Projetos</NavItem>
            <NavItem href="#contato">Contato</NavItem>
        </ul>
    </nav>
</template>

<script>
import NavItem from './NavItem'
export default {
    name: 'Navbar',
    components: {
        NavItem
    }
}
</script>