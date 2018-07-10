<template>
		<div class="register-container">
			<div class="register-table">
				<div class="table-container">
					<p class="welcome-logo">{{welcomeLogo}}</p>
					<p class="register-underline"></p>
					<div class="input-box">
						<input :class="showBorder ? 'register-box show-box-border' : 'register-box'" 
							   type="text" 
							   name="inputName" 
							   v-model.trim="phoneNumber" 
							   placeholder="请输入登录手机号"
							   @blur="checkPhoneNumber"/>							   
						<span :class="showicon ? 'icon-show iconfont' : 'icon-hidden iconfont'">&#xe625;</span>			
					</div>
					<div class="show-error">{{showPhoneInputError}}</div>
					<div class="input-box">
						<input :class="showBorder2 ? 'register-box show-box-border' : 'register-box'" 
						       type="password" 
						       name="inputPassword" 
						       v-model.trim="password" 
						       placeholder="请输入密码"
						       @blur="checkLogginCode"/>
						<span :class="showicon2 ? 'icon-show iconfont' : 'icon-hidden iconfont'">&#xe625;</span>
					</div>
					<div class="show-error">{{showCodeInputError}}</div>
					<div class="register-bar">
						<input class="register-checkbox" type="checkbox" name="registerCheckbox" checked="checked"/>
						<span>下次自动登录</span>
						<span id="forgetCode">忘记密码</span>
						<span id="goToRegister" @click="jumpToRegister">立即注册</span>
					</div>
					<div id="logginBtn" @click="checkLogginName">登&nbsp;&nbsp;录</div>
				</div>
			</div>
		</div>
</template>

<script>
	export default {
		data() {
			return {
				welcomeLogo: '欢迎回到猿计划',
				phoneNumber: '',
				password: '',
				showicon: false,
				showicon2: false,
				showBorder: false,
				showBorder2: false,
				showPhoneInputError: '',
				showCodeInputError: ''
			}
		},
		mounted() {
			console.log(window.innerWidth + 'px');
		},
		methods: {
			jumpToRegister() {
				this.$router.push({path:'/register'})
			},
			checkLogginName() {
				var date = new Date();
				console.log(date);
				console.log(this.phoneNumber);
				console.log(this.password);
				this.$ajax({
					method: 'GET',
					url: './test.php',
					// data: {
					// 	username: 'this.phoneNumber',
					// 	password: 'this.password',
					// 	timestep: 'date',
					// 	// ramdom: ''
					// },
					success: function(data) {
						console.log('成功连接');
						console.log(data);
					},
					error: function(data) {
						console.log('成功连接');
						console.log(data);
					}
				})
			},
			checkPhoneNumber(e) {
				console.log(e.target.value.trim());
				if(e.target.value.trim().search(/[^0-9]/g) == -1){
					console.log('请输入11位手机号码');
					this.showPhoneInputError = '请输入11位手机号码';
					this.showicon = false;
					this.showBorder = true;
					if(e.target.value.trim().length === 11) {
					console.log('手机号码输入正确');
					this.showPhoneInputError = '';
					this.showicon = true;
					this.showBorder = false;
					}
				}
				else {
					console.log('请输入11位手机号码')
					this.showPhoneInputError = '请输入11位手机号码';
					this.showicon = false;
					this.showBorder = true;
				}				
			},
			checkLogginCode(e) {
				console.log(e.target.value.trim());
				if(e.target.value.trim().search(/[0-9]/g) != -1 && e.target.value.trim().search(/[a-zA-Z]/g) != -1) {
					console.log('密码输入格式正确');
					if(e.target.value.trim().length >= 6) {
						console.log('密码位数正确');
						this.showicon2 = true;
						this.showCodeInputError = '';
						this.showBorder2 = false;
					}
					else {
						console.log('密码位数不足6位，请重新输入');
						this.showicon2 = false;
						this.showCodeInputError = '密码位数不足6位，请重新输入';
						this.showBorder2 = true;
					}
				}
				else {
					console.log('请输入含有字母及数字的密码');
					this.showicon2 = false;
					this.showCodeInputError = '请输入含有字母及数字的密码';
					this.showBorder2 = true;
				}
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
		margin-bottom: 30px;
	}

	.input-box {
		width: 410px;
		height: 38px;
	}

	.show-error {
		width: 378px;
		height: 38px;
		color: red;
		line-height: 38px;
	}

	.input-box-inside {
		width: 378px;
		height: 38px;
		border: 1px solid #efefef;
		border-radius: 2px;
	}

	.register-box {
		height: 38px;
		width: 378px;
		border: 1px solid #efefef;
		border-radius: 2px;

	}

	input:focus {
		border: 1px solid #f20e33;
	}

	.show-box-border {
		border: 1px solid #f20e33;
	}

	.iconfont {
		color: #43c332;
		font-size: 16px;
		float: right;
		height: 38px;
		width: 20px;
		line-height: 38px;
	}

	.icon-hidden {
		display: none;
	}

	.icon-show {
		display: block;
	}

	.register-checkbox {
		cursor: pointer;		
	}

	.register-bar {
		width: 378px;
		margin-top: 12px;
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