<template>
	<transition name="fade">
		<div v-if="show" id="fade" class="flex items-center justify-center absolute z-20 h-screen w-screen">
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
			if(this.show) this.showToggle()
		},
		methods: {
			showToggle(){
				setTimeout(() => {
					this.show = false
				}, 500)
			}
		}
	}
</script>
<style scoped>
	#fade{
		background: #36393f;
	}
	.fade-leave-active {
		transition: opacity .5s;
	}
	.fade-leave-to {
		opacity: 0;
	}
</style>