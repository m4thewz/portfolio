<template>
    <main class="flex items-center justify-between h-screen w-screen py-5 px-14">
        <div class="flex flex-col items-center">
            <div>
                <span class="font-josefin uppercase">Uma pessoa que gosta de contribuir</span>
                <h2 class="text-6xl font-bold uppercase">Matheus Vitor</h2>
    
                <button class="font-bold uppercase mt-8 py-2 px-8 relative">Veja mais sobre mim</button>
            </div>
        </div>
        <img class="rounded-full w-1/5" src="../assets/images/avatar.png" alt="avatar">
    </main>
</template>

<script>
    export default{
        name: 'Container'
    }
</script>

<style scoped>

button{
    z-index: 1;
}
button:before, button:after{
    position: absolute;
    height: 25px;
    width: 25px;
    z-index: -1;
    transition: all, .7s;
    content: "";
}
button:hover:before, button:hover:after{
    width: 100%;
    height: 100%;
    border-radius: 7px;
}
button:before {
    left: 0;
    top: 0;
    border-left: 2px solid #2563eb;
    border-top: 2px solid #2563eb;
}
button:after {
    right: 0;
    bottom: 0;
    border-right: 2px solid #2563eb;
    border-bottom: 2px solid #2563eb;
}
</style>