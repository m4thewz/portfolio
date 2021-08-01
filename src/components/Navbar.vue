<template>
    <nav>
        <h1>Matheuuus</h1>
        <ul>
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