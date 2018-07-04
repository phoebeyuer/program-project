<template>
		<!-- 注册表单 -->
		<div class="register-container">
			<div class="register-table">
				<div class="table-container">
					<p class="welcome-logo">{{welcomeLogo}}</p>
					<p class="register-underline"></p>
					<input class="register-box" type="text" name="inputName" placeholder="请输入手机号码"/>
					<input class="register-box" type="password" name="inputPassword" placeholder="请输入6位以上密码"/>
					<input class="register-box" type="password" name="inputPassword" placeholder="请再次输入密码"/>
					<div class="table-intergrate">
						<input class="register-box2" type="text" name="inputName" placeholder="验证码"/>
						<div id="randomCode">获取随机码</div>
					</div>
					<div class="table-intergrate">
						<input class="register-box2" type="text" name="inputName" placeholder="请输入短信验证码"/>
						<div id="sendPhoneCode">获取验证码</div>
					</div>
					<div id="logginBtn">注&nbsp;&nbsp;册</div>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				welcomeLogo: '欢迎加入猿计划',
			}
		},
		mounted() {
			console.log(window.innerWidth + 'px');
		}
	}
</script>

<style type="text/css" scoped>

	/*注册表单样式*/
	.register-container {
		background: #efefef;
		width: 100%;
		height: 100%;
	}

	.register-table {
		width: 530px;
		height: 550px;
		margin: 0 auto;
		margin-top: 80px;
		background: #fff;
		box-shadow: #b1b1b1 1px 1px 8px 1px ;
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

	.table-container {
		width: 378px;
		margin: 0 auto;
		font-size: 16px;
	}

	.register-box {
		margin-top: 30px;
		width: 378px;
		height: 38px;
		border: 1px solid #efefef;
		border-radius: 2px;
	}

	.table-intergrate {
		margin-top: 30px;
		width: 378px;
		height: 38px;
	}

	.register-box2 {	
		float: left;	
		width: 150px;
		height: 38px;
		border: 1px solid #efefef;		
		border-radius: 2px;
	}

	#randomCode {
		float: right;
		margin-right: 20px;
		width: 90px;
		height: 38px;
		line-height: 36px;
		text-align: center;
		border: 1px solid #efefef;
		cursor: pointer;
	}

	#sendPhoneCode {
		float: right;
		width: 120px;
		height: 38px;
		background: #46b036;
		color: white;
		text-align: center;
		line-height: 36px;
		cursor: pointer;
	}

	input:focus {
		border: 1px solid #f20e33;
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