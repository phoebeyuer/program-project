<template>
	<div class="register-index-container">		
		<!-- 顶部5个导航按钮界面 -->
		<div class="register-pannel">
			<div class="pannel-container">
				<img class="index-logo" src="./../../assets/image/index-logo.png"/>
				<router-link to="/home" tag="span"><span class="tab-link" id="firstTag">首页</span></router-link>
				<router-link to="/knowledge" tag="span"><span class="tab-link" >知识体系</span></router-link>
				<router-link to="/topic" tag="span"><span class="tab-link" >话题</span></router-link>
				<router-link to="/blog" tag="span"><span class="tab-link" >博客</span></router-link>
				<router-link to="/loggin" tag="span"><span class="tab-link" >登录</span></router-link>
			</div>		
		</div>
		<!-- 导航的子路由内容显示 -->
		<div class="index-main">
			<router-view></router-view>
		</div>
		<!-- 底部作者信息界面 -->
		<IndexBottom></IndexBottom>		
	</div>
</template>

<script>
	// 导入底部作者信息板块
	import IndexBottom from './indexBottom'
	export default {
		components: {
			IndexBottom
		},
		data(){
			return {
				msg: 'hello word!'
			}
		},
	}
</script>

<style type="text/css" scoped>
	.register-index-container {
		margin-top: 120px;
		width: 100%;
		height: 90px;
		background: #fff;
	}

	/*注册及登录页面导航栏样式*/
	.register-pannel {
		position: fixed;
		z-index: 100;
		top: 0px;
		background: #fff;
		height: 90px;
		width: 100%;
		color: black;
		font-size: 20px;
		font-weight: bold;
		box-shadow: darkgrey 0px 0px 10px 1px ;
	}

	/*网页主导航条样式*/
	.pannel-container {
		height: 90px;
		width: 1200px;
		margin: 0 auto;
	}

	.index-logo {
		float: left;
		margin-top: 17px;
		height: 56px;
		width: 172px;
		overflow: hidden;
	}

	.router-link-active .tab-link{
		color: red;
		padding-bottom: 20px;
		border-bottom: 5px solid red;
	}

	.tab-link {
		margin-left: 46px;
		height: 90px;
		line-height: 90px;
		cursor: pointer;
		color: black;
		font-size: 18px;
		transition: 0.2s;
	}

	.tab-link:hover {
		color: red;
	}
	
	#firstTag {
		margin-left: 600px;
	}

	.index-main {
		width: 1200px;
		margin: 0 auto;
	}
</style>