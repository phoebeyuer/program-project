<template>
	<div class="hot-artical-container">
		<!-- 实现最新和最热博客间的切换 -->
		<div class="toggle-btn">
			<div @click="toggleNewest" v-bind:class="[newest,{active: activeNewest}]">最新</div>
			<div @click="toggleHottest" v-bind:class="[hottest,{active: activeHottest}]">最热</div>
		</div>
		<!-- 使用v-for生成博客基本信息展示界面 -->
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
						<span class="iconfont">&#xe669;</span>
						<span class="iconfont">&#xe62a;</span>
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
				activeNewest: true,
				activeHottest: false,
				newest: 'newest',
				hottest: 'hottest',
				// 每条博客的信息数据
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
			// 实现点击博客跳转到该条博客页面
			goToArtical(index) {
				console.log('点击了' + index)
			},
			// 切换到最新博客界面
			toggleNewest() {
				this.activeNewest = true;
				this.activeHottest = false;
			},
			// 切换到最热博客界面
			toggleHottest() {
				this.activeNewest = false;
				this.activeHottest = true;
			},
		}
	}
</script>

<style type="text/css" scoped>
	.hot-artical-container {
		/*margin-top: 20px;*/
		font-family: '微软雅黑';
	}

	/*切换最新及最热博客样式*/
	.toggle-btn {
		width: 1200px;
		height: 45px;
	}

	.newest {
		display: inline-block;
		margin-right: 20px;
		margin-top: 15px;
		height: 30px;
		width: 60px;
		text-align: center;
		line-height: 30px;
		font-size: 16px;
		cursor: pointer;
	}

	.hottest {
		display: inline-block;
		margin-top: 15px;
		height: 30px;
		width: 60px;
		text-align: center;
		line-height: 30px;
		font-size: 16px;
		cursor: pointer;
	}

	.active {
		background: #e7171e;
		color: white;		
	}

	.newest:hover {
		background: #e7171e;
		color: white;
	}

	.hottest:hover {
		background: #e7171e;
		color: white;
	}

	/*博客基本信息展示界面样式*/
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
	}

	.underline {
		width: 1200px;
		height: 1px;
		margin-top: 60px;
		background: #e3e3e3;
	}
</style>