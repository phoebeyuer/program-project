<template>
	<div>
		<!-- 主页轮播图组件 -->
		<HomeSwiper></HomeSwiper>
		<!-- 主页导航条 -->
		<HomeNav></HomeNav>
	</div>
</template>

<script>
	// 导入主页的轮播图及导航条
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