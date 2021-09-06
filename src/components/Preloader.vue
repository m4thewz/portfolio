<template>
	<transition name="fade">
		<div v-if="show" class="flex items-center justify-center absolute z-20 h-screen w-screen bg-primary">
			<img src="../assets/images/sonic.gif" alt="sonic">
		</div>
	</transition>
</template>
<script>
	export default{
		name: 'Preloader',
		data() {
			return{
				show: true
			}
		},
		mounted() {
			document.onreadystatechange = () => {
				if (document.readyState == "complete") this.showToggle()
			}
		},
		methods: {
			showToggle(){
				setTimeout(() => {
					this.show = false
				}, 250)
			}
		}
	}
</script>
<style scoped>
	.fade-leave-active {
		transition: opacity .5s;
	}
	.fade-leave-to {
		opacity: 0;
	}
</style>