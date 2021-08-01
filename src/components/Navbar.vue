<template>
    <nav class="flex justify-between items-center py-3 px-4">
        <h1 class="text-4xl font-medium">Matheuuus</h1>
        <ul class="flex space-x-2 text-xl">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="#projetos">Projetos</router-link>
            </li>
            <li>
                <router-link to="#contato">Contato</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>