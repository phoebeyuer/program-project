<template>
		<div class="register-container">
			<div class="register-table">
				<div class="table-container">
					<p class="welcome-logo">{{welcomeLogo}}</p>
					<p class="register-underline"></p>
					<input class="register-box register-name" type="text" name="inputName" placeholder="请输入登录手机号"/>
					<input class="register-box register-code" type="password" name="inputPassword" placeholder="请输入密码"/>
					<div class="register-bar">
						<input class="register-checkbox" type="checkbox" name="registerCheckbox" checked="checked"/>
						<span>下次自动登录</span>
						<span id="forgetCode">忘记密码</span>
						<span id="goToRegister" @click="jumpToRegister">立即注册</span>
					</div>
					<div id="logginBtn">登&nbsp;&nbsp;录</div>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				welcomeLogo: '欢迎回到猿计划',
			}
		},
		mounted() {
			console.log(window.innerWidth + 'px');
		},
		methods: {
			jumpToRegister() {
				this.$router.push({path:'/register'})
			}
		}
	}
</script>

<style type="text/css" scoped>

	/*注册表单样式*/
	.register-container {
		background: #efefef;
	}

	.register-table {
		margin: 0 auto;
		width: 530px;
		height: 420px;
		margin: 0 auto;
		margin-top: 170px;
		background: #fff;
		box-shadow: #b1b1b1 1px 1px 8px 1px ;
	}

	.table-container {
		width: 378px;
		margin: 0 auto;
		font-size: 16px;
	}

	.welcome-logo {
		padding-top: 50px;
		padding-bottom: 12px;
		text-align: center;
		color: black;
		font-size: 20px;
	}

	.register-underline {
		width: 378px;
		height: 1px;
		background: black;
		margin: 0 auto;
	}

	.register-box {
		margin-top: 30px;
		width: 378px;
		height: 38px;
		border: 1px solid #efefef;
		border-radius: 2px;
	}

	input:focus {
		border: 1px solid #f20e33;
	}

	.register-checkbox {
		cursor: pointer;		
	}

	.register-bar {
		width: 378px;
		margin-top: 42px;
		font-size: 15px;
	}

	#forgetCode {
		padding-left: 100px;
		cursor: pointer;
	}

	#goToRegister {
		padding-left: 36px;
		color: red;
		cursor: pointer;
	}

	#logginBtn {
		margin: 0 auto;
		margin-top: 46px;
		height: 34px;
		width: 130px;
		background: #f20e33;
		border-radius: 15px;
		text-align: center;
		line-height: 34px;
		color: white;
		cursor: pointer;
	}
	
</style>