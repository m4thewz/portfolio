<template>
	<li>
        <router-link
        :to="href"
        :class="['block', { 'text-blue-700': isActive, 'hover:text-indigo-700': !isActive }]"
        >
			<slot></slot>
        </router-link>
	</li>
</template>
<script>
export default {
	props: {
		href: {
			type: String,
			required: true,
		},
		isActive: Boolean,
  },
}
</script>