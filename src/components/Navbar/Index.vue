<template>
    <nav class="flex justify-between items-center py-3 px-4">
        <h1 class="text-4xl font-medium">M4theus.me</h1>
        <ul class="flex space-x-3 text-xl">
            <NavItem href="/" isActive>Home</NavItem>
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