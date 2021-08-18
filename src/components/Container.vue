<template>
    <main class="flex flex-col items-center justify-center h-screen w-screen">
        <img class="rounded-full w-1/5" src="../assets/images/avatar.png" alt="avatar">
        
        <div class="flex flex-col justify-between items-center text-center mt-4">
            <div>
                <h1 class="text-4xl font-medium">Matheus Vitor</h1>
                <p class=" mt-0.5">Uma pessoa que gosta de contribuir</p>
            </div>
            <button class="btn btn-blue rounded-xl font-josefin leading-6">SOBRE</button>
        </div>
    </main>
</template>
<style>
    body{
        background: url('../assets/images/wallpapper.png');
        background-size: 100%;
        background-repeat: no-repeat;
    }
</style>
<script>
    export default{
        name: 'Container'
    }
</script>