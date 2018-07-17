<template>
	<div class="hot-artical-container">
		<ul>
			<li v-for="(item,index) in hotArtical" 
				:key="index"
				@click="goToArtical(index)">	
				<div class="first-content">
					<span class="item-pubname">{{item.pubName}}</span>
					<span class="dot">·</span>
					<span class="item-pubtime">{{item.pubTime}}</span>
					<span class="dot">·</span>
					<span class="item-pubtype">{{item.pubType}}</span>
				</div>
				<div class="second-content">
					<div class="item-pubtitle">{{item.pubTitle}}</div>
					<div class="item-icon">
						<span class="iconfont">&#xe6a7;</span>		
						<span class="iconfont" v-bind:style="{display: showOrHide1}" @click="changeColor1($event)">&#xe669;</span>	
						<span class="iconfont color-red" v-bind:style="{display: showOrHide2}" @click="changeColor2">&#xe668;</span>	
						<span class="iconfont collect-icon" v-bind:style="{display: showOrHide3}" @click="changeColor3">&#xe62a;</span>
						<span class="iconfont collect-icon color-red" v-bind:style="{display: showOrHide4}" @click="changeColor4">&#xe62b;</span>						
					</div>
				</div>
				<div class="underline"></div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				showOrHide1: '',
				showOrHide2: 'none',
				showOrHide3: '',
				showOrHide4: 'none',
				hotArtical: [
				{
					pubName: '银月',
					pubTime: '2018年7月7日',
					pubType: '测试类型',
					pubTitle: '就是测试一下'
				},
				{
					pubName: '银月',
					pubTime: '2018年7月7日',
					pubType: '测试类型',
					pubTitle: '就是测试一下'
				},
				{
					pubName: '银月',
					pubTime: '2018年7月7日',
					pubType: '测试类型',
					pubTitle: '就是测试一下'
				},
				{
					pubName: '银月',
					pubTime: '2018年7月7日',
					pubType: '测试类型',
					pubTitle: '就是测试一下'
				},
				{
					pubName: '银月',
					pubTime: '2018年7月7日',
					pubType: '测试类型',
					pubTitle: '就是测试一下'
				}
				]
			}
		},
		methods: {
			goToArtical(index) {
				console.log('点击了' + index)
			},
			changeColor1(e) {
				console.log(e.target);
				this.showOrHide1 = 'none';
				this.showOrHide2 = 'inline';
			},
			changeColor2() {
				this.showOrHide1 = 'inline';
				this.showOrHide2 = 'none';
			},
			changeColor3() {
				this.showOrHide3 = 'none';
				this.showOrHide4 = 'inline';
			},
			changeColor4() {
				this.showOrHide3 = 'inline';
				this.showOrHide4 = 'none';
			},
			
		}
	}
</script>

<style type="text/css" scoped>
	.hot-artical-container {
		/*margin-top: 20px;*/
		font-family: '微软雅黑';
	}

	li {
		margin-top: 20px;
		height: 78px;
	}

	.first-content span{
		font-size: 16px;
		color: #595757;
	}

	.dot {
		font-size: 10px;
	}

	.first-content .item-pubtype {
		color: #db8051;
	}

	.second-content {
		margin-top: 20px;
		font-size: 22px;
	}

	.item-pubtitle {
		float: left;
	}

	.item-icon {
		float: right;
	}

	.item-icon span {
		margin-left: 10px;
		font-size: 20px;
		cursor: pointer;
	}

	.color-red {
		color: #dc2929;
	}

	.collect-icon {
		font-size: 25px!important;
	}

	.underline {
		width: 1200px;
		height: 1px;
		margin-top: 60px;
		background: #e3e3e3;
	}
</style>