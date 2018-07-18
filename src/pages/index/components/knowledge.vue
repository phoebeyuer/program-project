<template>
	<div id="nav-container">
		<!-- 使用v-for生成知识板块的导航条 -->
		<div class="title">
			<li class="title-list" 
				v-for="(item,index) in nav"
				@click="routerLink(index,item.path)"
				:key="index">
				<div class="retangle" v-bind:style="{backgroundColor: item.BgColor}"></div>
				<router-link :to="item.path">
					<span :class="navIndex === index ? 'item-class item-class-active' : 'item-class'">
						 {{item.title}}
				     </span>
			    </router-link>
			</li>
		</div>
		<div class="title-line">
		</div>
		<!-- 放置知识板块子路由内容 -->
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// 知识板块导航条内容数据
				nav: [
					{
						title:'全部',
						path: '/knowledge/knowledgeAll',
						BgColor: '#e7171e',
					},
					{
						title: 'html',
						path: '/knowledge/knowledgeHtml',
						BgColor: '#259a25',
					},
					{
						title: 'css',
						path: '/knowledge/knowledgeCss',
						BgColor: '#259d94',
					},
					{
						title: 'javaScript',
						path: '/knowledge/knowledgeJavascript',
						BgColor: '#26719b',
					},
					{
						title: 'webpack',
						path: '/knowledge/knowledgeWebpack',
						BgColor: '#9c2698',
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
		margin-right: 20px;
	}

	.item-class {
		/*margin-right: 30px;*/
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

	.retangle {
		display: inline-block;
		margin-left: 5px;
		height: 14px;
		width: 14px;
		background: red;
	}
</style>