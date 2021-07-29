<template>
	<transition name="fade">
		<div v-if="show">
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
	div{
		background: black;
		color: white;

		position: absolute;
		top: 0;
		right: 0;

		height: 100vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: center;

		transition: all ease .5s;
	}
	.fade-leave-active {
		transition: opacity .5s;
	}
	.fade-leave-to {
		opacity: 0;
	}
</style>