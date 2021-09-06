<template>
	<li>
        <router-link
        :to="href"
        class="block font-medium hover:text-blue-500 transition-colors duration-500"
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
  },
}
</script>