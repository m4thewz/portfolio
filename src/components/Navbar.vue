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
<style scoped>
    nav{
        color: white;
        padding: 10px 15px;
        width: 100vw;

        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    h1{
        font-size: 42px;
    }
    nav ul li{
        display: inline-block;
        font-size: 20px;
    }
    nav ul li:not(:last-child){
        margin-right: 10px;
    }
    a{
        color: white;
        text-decoration: none;
    }
</style>