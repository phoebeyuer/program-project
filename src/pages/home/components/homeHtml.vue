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
						进入学习
<!-- 						<span class="iconfont">&#xe6a7;</span>					
						<span class="iconfont">&#xe669;</span>
						<span class="iconfont">&#xe62a;</span> -->
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
			}
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
		display: inline-block;
		float: right;
		margin-right: 25px;
		margin-bottom: 10px;
		height: 30px;
		width: 100px;
		text-align: center;
		line-height: 30px;
		background: #e7171e;
		border: 1px solid white;
		font-size: 16px;
		/*font-weight: bold;*/
		/*letter-spacing: 2px;*/
		color: white;
		border-radius: 20px;
		cursor: pointer;
	}

	.item-icon:hover {
		background-color: rgba(240,24,32,0.8);
	}

/*	.item-icon span {
		margin-left: 10px;
		font-size: 20px;
	}*/

	.underline {
		width: 1200px;
		height: 1px;
		margin-top: 60px;
		background: #e3e3e3;
	}
</style>