<template>
		<!-- 注册表单 -->
		<div class="register-container">
			<div class="register-table">
				<div class="table-container">
					<p class="welcome-logo">{{welcomeLogo}}</p>
					<p class="register-underline"></p>
					<div class="input-box">
						<input :class="showBorder ? 'register-box show-box-border' : 'register-box'" 
						       type="text" 
						       name="inputName" 
						       placeholder="请输入手机号码"
						       @blur="checkRegisterNumber"/>
						<span :class="showicon ? 'icon-show iconfont' : 'icon-hidden iconfont'">&#xe625;</span>	
					</div>
					<div class="show-error">{{showPhoneInputError}}</div>
					<div class="input-box">
						<input :class="showBorder2 ? 'register-box show-box-border' : 'register-box'"
						       type="password" 
						       name="inputPassword" 
						       placeholder="请输入6-20位含字母及数字的密码"
						       @blur="checkRegisterCode"/>
						<span :class="showicon2 ? 'icon-show iconfont' : 'icon-hidden iconfont'">&#xe625;</span>	
					</div>
					<div class="show-error">{{showCodeInputError}}</div>
					<div class="input-box">
						<input :class="showBorder3 ? 'register-box show-box-border' : 'register-box'" 
						       type="password" 
						       name="inputPassword" 
						       placeholder="请再次输入密码"
						       @blur="checkRegisterCodeAgain"/>
						<span :class="showicon3 ? 'icon-show iconfont' : 'icon-hidden iconfont'">&#xe625;</span>
					</div>
					<div class="show-error">{{showCodeInputError2}}</div>
					<div class="table-intergrate">
						<div class="random-box">
							<input :class="showRandomBorder ? 'register-box2 show-random-border' : 'register-box2'" 
							       type="text" 
							       name="inputName" 
							       placeholder="请输入验证码" 
							       @blur="checkRandomCode"/>
							<span :class="showicon4 ? 'icon-show iconfont' : 'icon-hidden iconfont'">&#xe625;</span>
						</div>
						<input type="button" id="randomCode" @click="createCode();createBackground()" v-model="checkCode"></div>
					</div>
					<div class="random-code-error">{{randomCodeError}}</div>
<!-- 					<div class="table-intergrate">
						<input class="register-box2" type="text" name="inputName" placeholder="请输入短信验证码"/>
						<div id="sendPhoneCode">获取验证码</div>
					</div> -->
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
				showicon: false,
				showicon2: false,
				showicon3: false,
				showicon4: false,
				showPhoneInputError: '',
				showCodeInputError: '',
				showCodeInputError2: '',
				showBorder: false,
				showBorder2: false,
				showBorder3: false,
				registerCode: '',
				checkCode: '',
				randomCodeError: '',
				showRandomBorder: false
			}
		},
		mounted() {
			console.log(window.innerWidth + 'px');
			this.createCode();
		},
		methods: { 
			// 产生随机验证码函数
			createCode() {
			  var code = ""; 
			  var codeLength = 4;//验证码的长度 
			  var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
			  for(var i = 0; i < codeLength; i++) { 
			   var index = Math.floor(Math.random()*62);//取得随机数的索引（0~35） 
			   code += random[index];
			  } 
			  this.checkCode = code;
			},
			// 生成随机数
			creatRandomNum(min,max) {
				return Math.floor(Math.random() * (max-min) + min);
			},
			//随机生成背景颜色
			createBackground() {
				console.log("createBackground success");
				let r = this.creatRandomNum(0, 255);
				let g = this.creatRandomNum(0, 255);
				let b = this.creatRandomNum(0, 255);
				let randomCodeRGB = '#' +  r.toString(16) + g.toString(16) + b.toString(16);
				console.log(randomCodeRGB);
				let randomCodeBg = document.getElementById("randomCode");
				randomCodeBg.style.backgroundColor = randomCodeRGB; 
			},
			// 检查用户输入的随机码是否正确
			checkRandomCode(e) {
				if(e.target.value.trim().toUpperCase() == this.checkCode.toUpperCase()) {
					this.showicon4 = true;
					this.randomCodeError = '';
					this.showRandomBorder = false;
				}
				else {
					console.log('验证码有误');
					this.showicon4 = false;
					this.randomCodeError = '验证码有误';	
					this.showRandomBorder = true;

				}
			},
			// 检查用户输入的注册手机号码是否正确
			checkRegisterNumber(e) {
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
			// 检查用户输入的注册密码格式是否正确
			checkRegisterCode(e) {
				console.log(e.target.value.trim());
				if(e.target.value.trim().search(/[0-9]/g) != -1 && e.target.value.trim().search(/[a-zA-Z]/g) != -1) {
					console.log('密码输入格式正确');
					if(e.target.value.trim().length >= 6 && e.target.value.trim().length <= 20) {
						console.log('密码位数正确');
						this.showicon2 = true;
						this.showCodeInputError = '';
						this.showBorder2 = false;
						this.registerCode = e.target.value.trim();
					}
					else {
						console.log('密码长度为6-20位，请重新输入');
						this.showicon2 = false;
						this.showCodeInputError = '密码长度为6-20位，请重新输入';
						this.showBorder2 = true;
						this.registerCode = e.target.value.trim();
					}
				}
				else {
					console.log('请输入含有字母及数字的密码');
					this.showicon2 = false;
					this.showCodeInputError = '请输入含有字母及数字的密码';
					this.showBorder2 = true;
					this.registerCode = e.target.value.trim();
				}
			},		
			// 检查用户第二次输入的密码是否与第一次相同	
			checkRegisterCodeAgain(e) {
				if(e.target.value.trim().length == 0) {
					this.showCodeInputError2 = '请再次输入密码';
					this.showBorder3 = true;
				}
				else {
					if(this.registerCode == e.target.value.trim()) {
						this.showCodeInputError2 = '';
						this.showBorder3 = false;
						this.showicon3 = true;
					}
					else {
						this.showCodeInputError2 = '两次输入密码不一致';
						this.showBorder3 = true;
					}
				}
			}
		}
	}
</script>

<style type="text/css" scoped>

	/*注册表单样式*/
	.register-container {
		background: #fff;
		width: 100%;
		height: 100%;
	}

	.register-table {
		width: 530px;
		height: 550px;
		margin: 0 auto;
		margin-top: 170px;
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
		margin-bottom: 30px;
	}

	.table-container {
		width: 378px;
		margin: 0 auto;
		font-size: 16px;
	}

	.input-box {
		width: 410px;
		height: 38px;
	}

	.register-box {
		width: 378px;
		height: 38px;
		border: 1px solid #efefef;
		border-radius: 2px;
		transition: border 0.5s;
	}

	.show-error {
		width: 378px;
		height: 38px;
		color: red;
		line-height: 38px;
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

	.table-intergrate {
		width: 378px;
		height: 38px;
	}

	.random-box {
		float: left;
		width: 195px;
		height: 38px;
	}

	.register-box2 {	
		float: left;	
		width: 150px;
		height: 38px;
		border: 1px solid #efefef;		
		border-radius: 2px;
		transition: border 0.5s;
	}

	.show-random-border {
		border: 1px solid #f20e33;
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
		text-align: center;
		color: #053d84;
		letter-spacing: 5px;
		font-weight: bold;
	}

	.random-code-error {
		margin: 0 auto;
		margin-top: 8px;
		height: 30px;
		color: red;
		width: 378px;
		line-height: 30px;
		font-size: 16px;
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

	.show-box-border {
		border: 1px solid #f20e33;		
	}

	#logginBtn {
		margin: 0 auto;
		margin-top: 16px;
		height: 34px;
		width: 130px;
		background: #f20e33;
		border-radius: 15px;
		text-align: center;
		line-height: 34px;
		color: white;
		cursor: pointer;
		font-size: 16px;
	}

	
</style>