<template>
	<div>
		<HomeSwiper></HomeSwiper>
		<HomeNav></HomeNav>
	</div>
</template>

<script>
	import HomeSwiper from "./../../home/homeSwiper"
	import HomeNav from "./../../home/homeNav"
	export default {
		components: {
			HomeSwiper,
			HomeNav
		},
		data() {
			return {
				msg: 'hello home!'
			}
		}
	}
</script>

<style type="text/css" scoped>
	
</style>