<template>
    <nav>
        <h1>matheuuuus</h1>
        <ul>
            <li>Home</li>
            <li>Projetos</li>
            <li>Contatos</li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>
<style scoped>
    nav{
        padding: 10px 15px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1{
        font-size: 42px;
    }
    nav ul li{
        display: inline-block;
    }
    nav ul li:not(:last-child){
        margin-right: 10px;
    }
</style>