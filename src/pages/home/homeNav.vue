<template>
	<div id="nav-container">
		<div class="title">
			<li class="title-list" 
				v-for="(item,index) in nav"
				@click="routerLink(index,item.path)"
				:key="index">
				<router-link :to="item.path">
					<span :class="navIndex === index ? 'item-class item-class-active' : 'item-class'">
						 {{item.title}}
				     </span>
			    </router-link>
			</li>
		</div>
		<div class="title-line">
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nav: [
					{
						title: '热门文章',
						path: '/home/homeHotArtical'
					},
					{
						title: 'html',
						path: '/home/homeHtml'
					},
					{
						title: 'css',
						path: '/home/homeCss'
					},
					{
						title: 'javaScript',
						path: '/home/homeJavaScript'
					},
					{
						title: 'webpack',
						path: '/home/homeWebpack'
					}
				],
				navIndex: 0,
			}
		},
		methods: {
			routerLink(index,path) {
				this.navIndex = index;
			},
			// 检查当前高亮标签
			checkRouterPrevious(path) {
				this.navIndex = this.nav.findIndex(item => item.path === path);
				console.log(this.navIndex);
			}
		},
		mounted() {
			console.log(this.$route.path);
			console.log(this.$route.path.length);
			console.log(this.$route.path.substr(0,5));
			console.log(this.navIndex);
		},
		// 监听路由，解决刷新后不高亮或第一个高亮问题
		watch: {
			"$route"() {
				let path = this.$route.path;
				this.checkRouterPrevious(path);
			}
		},
	}
</script>

<style type="text/css" scoped>
	#nav-container {
		font-family: "宋体";
		margin-top: 20px;
		font-size: 20px;
		width: 1200px;
	}

	li {
		display: inline-block;
	}

	.item-class {
		margin-right: 30px;
		color: black;

	}

	.item-class-active {
		color: red;
	}

	span:hover {
		color: red;
		cursor: pointer;
	}

	.title-line {
		margin-top: 15px;
		width: 1200px;
		height: 1px;
		background: black;
	}
</style>