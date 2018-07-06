<template>
	<div class="register-index-container">
		<div class="register-pannel">
			<div class="pannel-container">
				<img class="index-logo" src="./../../assets/image/index-logo.png"/>
				<router-link to="/home"><span id="firstTag">首页</span></router-link>
				<router-link to="/knowledge"><span>知识体系</span></router-link>
				<span>话题</span>
				<span>博客</span>
				<router-link to="/loggin"><span>登录</span></router-link>
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				msg: 'hello word!'
			}
		}
	}
</script>

<style type="text/css" scoped>
	.register-index-container {
		width: 100%;
		height: 100%;
		background: #efefef;
	}

	/*注册及登录页面导航栏样式*/
	.register-pannel {
		background: #fff;
		height: 90px;
		width: 100%;
		color: black;
		font-size: 20px;
		font-weight: bold;
		box-shadow: darkgrey 0px 0px 10px 1px ;
	}

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

	span {
		margin-left: 46px;
		height: 90px;
		line-height: 90px;
		cursor: pointer;
		color: black;
		font-size: 18px;
	}
	
	#firstTag {
		margin-left: 600px;
	}
</style>