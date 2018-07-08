<template>
	<div class="bottom-container">
		<div class="underline"></div>
		<div class="bottom-content">
			<span>Made by Silvermoon&nbsp;<img src="./../../assets/image/phoebe.jpg"/></span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'hello'
			}
		}
	}
</script>

<style type="text/css" scoped>
	.bottom-container {
		width: 1200px;
		height: 58px;
		margin: 0 auto;
		margin-top: 320px;
		/*margin-top: 20px;*/
	}

	.underline {
		width: 1200px;
		height: 1px;
		background: #e3e3e3;
	}

	.bottom-content {
		height: 56px;
	}

/*	img {
		float: left;
		height: 56px;
		width: 172px;
		overflow: hidden;		
	}*/

	.bottom-content span {
		height: 56px;
		line-height: 56px;
		float: right;
		font-size: 20px;
		font-weight: bold;
	}

	.bottom-content img {
		height: 50px;
		width: 50px;
		float: right;
		margin-right: 10px;
		margin-left: 5px;
	}
</style>