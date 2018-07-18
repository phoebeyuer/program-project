<template>
	<div id="nav-container">
		<!-- 使用v-for生成博客导航条 -->
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
			<router-link to="/blogWrite"><div class="write-blog">写博客</div></router-link>
		</div>
		<div class="title-line">
		</div>
		<!-- 防止博客板块的子路由内容 -->
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// 博客导航条内容数据
				nav: [
					{
						title:'所有分类',
						path: '/blog/blogAllType',
						BgColor: '#9c2698',
					},
					{
						title: '入门学习',
						path: '/blog/blogPrimary',
						BgColor: '#259a25',
					},
					{
						title: '经验分享',
						path: '/blog/blogShareExperience',
						BgColor: '#259d94',
					},
					{
						title: '开源项目',
						path: '/blog/blogShareProject',
						BgColor: '#26719b',
					},
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
		font-size: 18px;
		width: 1200px;
	}

	li {
		display: inline-block;
		margin-top: 5px;
		margin-right: 20px;
		height: 25px;
	}

	.write-blog {
		display: inline-block;
		float: right;
		margin-right: 15px;
		height: 35px;
		width: 100px;
		text-align: center;
		line-height: 35px;
		background: #e7171e;
		border: 1px solid white;
		font-size: 18px;
		font-weight: bold;
		letter-spacing: 2px;
		color: white;
		border-radius: 18px;
	}

	.write-blog:hover {
		background-color: rgba(240,24,32,0.8);
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