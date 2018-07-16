<template>
	<div id="blog-container" @click=hideClassifyBox($event)>
		<div class="blog-information">
			<div class="blog-title">
				<div class="info-text">文章标题</div>
				<input class="input-title" 
					   type="text" 
					   placeholder="请输入文章标题"
					    />
			</div>
			<div class="blog-select blog-classify">
				<div class="info-text">所属分类</div>
				<a id="classifyBox" href="javascript:;" class="classify-box classify-box1">
					<div  @click="showClassifyList">
						<input type="text" readonly="readonly" class="box-text" placeholder="请选择" :value="choosebox1"/>
						<div class="iconfont">&#xe79b;</div>
					</div>
					<!-- <ul v-bind:class="{classifyBoxShow: isClassifyShow, classifyBoxHidden: isClassifyHidden}">
						<li @click="chooseItem($event)">入门学习</li>
						<li @click="chooseItem($event)">经验分享</li>
						<li @click="chooseItem($event)">开源项目</li>
					</ul> -->
				</a>
			</div>
			<div class="blog-select blog-type">
				<div class="info-text">技术分类</div>
				<a id="classifyBox2" href="javascript:;" class="classify-box classify-box1">
					<div @click="showClassifyList2">
						<input type="text" readonly="readonly" class="box-text" placeholder="请选择" :value="choosebox2" />
						<div class="iconfont">&#xe79b;</div>
					</div>
<!-- 					<ul v-bind:class="{classifyBoxShow2: isClassifyShow2, classifyBoxHidden2: isClassifyHidden2}">
						<li @click="chooseItem2($event)">Html</li>
						<li @click="chooseItem2($event)">Css</li>
						<li @click="chooseItem2($event)">Javascript</li>
						<li @click="chooseItem2($event)">Webpack</li>
						<li @click="chooseItem2($event)">其它</li>
					</ul> -->
				</a>
			</div>
			<div class="ul-container">
					<ul v-bind:class="{classifyBoxShow: isClassifyShow, classifyBoxHidden: isClassifyHidden}">
						<li @click="chooseItem($event)">入门学习</li>
						<li @click="chooseItem($event)">经验分享</li>
						<li @click="chooseItem($event)">开源项目</li>
					</ul>
			</div>
			<div class="ul-container2">
					<ul v-bind:class="{classifyBoxShow2: isClassifyShow2, classifyBoxHidden2: isClassifyHidden2}">
						<li @click="chooseItem2($event)">Html</li>
						<li @click="chooseItem2($event)">Css</li>
						<li @click="chooseItem2($event)">Javascript</li>
						<!-- <li @click="chooseItem2($event)">Webpack</li> -->
						<!-- <li @click="chooseItem2($event)">其它</li> -->
					</ul>
			</div>
		</div>
		<div id="editor">
			<quill-editor v-model="content"
						  ref="myQuillEditor"
						  :options="editorOption"
						  @blur="onEditorBlur($event)"
						  @focus="onEditorFocus($event)"
						  @ready="onEditorReady($event)"
						  >
				
			</quill-editor>
		</div>
		<div class="blog-submit">发布</div>
	</div>
</template>

<script>
	import 'quill/dist/quill.core.css'
	import 'quill/dist/quill.snow.css'
	import 'quill/dist/quill.bubble.css'
	import {quillEditor} from 'vue-quill-editor'
	export default {
		components: {
			quillEditor,
		},
		data() {
			return {
				msg: 'hello blogWrite!',
				isClassifyShow: false,
				isClassifyHidden: true,
				isClassifyShow2: false,
				isClassifyHidden2: true,
				choosebox1: '',
				choosebox2: '',
				content: '<h2>Write here……<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></h2>',
 				editorOption: {
          			modules: {
            			toolbar: [
			              ['bold'],
			              ['blockquote', 'code-block'],
			              [{ 'indent': '-1' }, { 'indent': '+1' }],
			              [{ 'size': ['small', false, 'large', 'huge'] }],
			              ['link', 'image']
			            ],
					},
					placeholder: 'beggin',
					theme: 'snow',
				}
			}
		},
		methods: {
			onEditorBlur(quill) {
		      console.log('editor blur!', quill)
		    },
		    onEditorFocus(quill) {
		      console.log('editor focus!', quill)
		    },
		    onEditorReady(quill) {
		      console.log('editor ready!', quill)
		    },
		    hideClassifyBox(e) {
		    	var e = e || window.event;
		    	var elem = e.target
		    	while(elem) {
		    		if(elem.id){
		    			if( elem.id == 'classifyBox' || elem.id == 'classifyBox2'){
		    				return;
		    			}
		    		}
		    		elem = elem.parentNode;
		    	}
		    	this.isClassifyShow = false;
		    	this.isClassifyHidden = true;
		    	this.isClassifyShow2 = false;
		    	this.isClassifyHidden2 = true;
		    	console.log('我被触发了');
		    },
		    showClassifyList() {
		    	this.isClassifyShow = !this.isClassifyShow;
		    	this.isClassifyHidden = !this.isClassifyHidden;
		    	this.isClassifyShow2 = false;
		    	this.isClassifyHidden2 = true;

		    },
		    showClassifyList2() {
		    	this.isClassifyShow2 = !this.isClassifyShow2;
		    	this.isClassifyHidden2 = !this.isClassifyHidden2;
		    	this.isClassifyShow = false;
		    	this.isClassifyHidden = true;
		    },
		    chooseItem(e) {
		    	this.choosebox1 = e.target.innerText;
		    	console.log(e.target.innerText);
		    	this.isClassifyHidden = true;
		    	this.isClassifyShow = false;
		    },
		    chooseItem2(e) {
		    	this.choosebox2 = e.target.innerText;
		    	console.log(e.target.innerText);
		    	this.isClassifyHidden2 = true;
		    	this.isClassifyShow2 = false;
		    }
		},
	    computed: {
	        editor() {
	           return this.$refs.myQuillEditor.quill
	        }
	    },
	    mounted() {
	      console.log('this is current quill instance object', this.editor)
	    }
	}
</script>

<style type="text/css" scoped>
	#editor {
		margin: 0 auto;
		width: 1200px;
		border: none;
		font-size: 20px;
		box-shadow: darkgrey 0px 0px 8px 1px ;
		z-index: 10;
	}	

	#blog-container {
		/*width: 1200px;*/
		height: 100%;
		font-weight: normal;
		font-family: '宋体';
		position: relative;
		z-index: 1;
	}

	.blog-information {
		margin-top: 20px;
		margin-bottom: 20px;
		width: 1200px;
		height: 50px;
		font-size: 20px;		
	}

	.blog-title {
		display: inline-block;
		height: 40px;
		/*vertical-align: middle;*/
	}

	.info-text {
		display: inline-block;
		font-size: 20px;
		font-weight: bold;
		height: 40px;
		line-height: 40px;
		vertical-align: middle;
	}

	.input-title {
		display: inline-block;
		height: 42px;
		width: 410px;
		margin: 0px;
		padding: 0px;
		margin-left: 5px;
		border: 1px solid #d9d9d9;
		transition: 0.8s;
		border-radius: 5px;
		vertical-align: middle;
		text-indent: 15px;
	}

	.input-title:focus {
		border: 1px solid #6dc5f7!important;
	}

	.input-title:hover {
		border: 1px solid #7d8183;
	}

	.blog-select {
		display: inline-block;
		margin-left: 20px;
		height: 40px;
	}

	.blog-classify {
		margin-left: 80px;
	}

	.ul-container {
		margin-left: 690px;
	}

	.ul-container2 {
		margin-left: 1004px;
	}

	.classify-box {
		display: inline-block;
		position: relative;
		width: 190px;	
		border: 1px solid #d9d9d9;
		transition: 0.8s;
		border-radius: 5px;
		vertical-align: middle;
		height: 42px;
		background: #fff;
		cursor: pointer;
		color: grey;
		z-index: 9;
	}

	.classify-box:hover {
		border: 1px solid #7d8183;
	}

	.classify-box:focus {
		border: 1px solid #6dc5f7!important;
	}

/*	.box-text:focus .iconfont {
		transform: rotate(180deg);
	}*/

/*	.classify-box .box-text:focus .classify-box{
		border: 1px solid #6dc5f7;
	}*/

	.box-text {
		display: inline-block;
		position: relative;
		width: 150px;
		height: 40px;
		line-height: 40px;
		text-indent: 15px;
		cursor: pointer;
		border-radius: 5px;
		z-index: 1;
	}


	.iconfont {
		display: inline-block;	
		transition: 0.5s;
	}

	.classifyBoxShow {
		display: block;
		margin-top: 10px;
		position: relative;
		margin-bottom: 5px;
		border:1px solid #d9d9d9;
		transition: 1s;
		box-shadow: #d5d2d2 0px 0px 5px 1px;
		z-index: 99;
		background: #fff;
		height: 120px;
		transition: height 0.1s;
		overflow: hidden;
		width: 190px;
	}

	.classifyBoxHidden {
		/*display: none;*/
		height: 0px; 
		transition: height 0.1s;
		overflow: hidden;
	}

	.classifyBoxShow2 {
		display: block;
		margin-top: 10px;
		position: relative;
		margin-bottom: 5px;
		border:1px solid #d9d9d9;
		transition: 1s;
		box-shadow: #d5d2d2 0px 0px 5px 1px;
		z-index: 99;
		height: 120px;
		background: #fff;
		overflow: hidden;
		transition: height 0.15s;
		width: 190px;
	}

	.classifyBoxHidden2 {
		/*display: none;*/
		height: 0px; 
		transition: height 0.15s;
		overflow: hidden;
	}

	li {
		height: 40px;
		line-height: 40px;
		text-indent: 15px;
		z-index: 999;
		cursor: pointer;
	}

	li:hover {
		background: #e4e8f1;
	}

	.blog-submit {
		margin: 0 auto;
		margin-top: 20px;
		height: 38px;
		width: 120px;
		text-align: center;
		line-height: 38px;
		background: #e7171e;
		border: 1px solid white;
		font-size: 20px;
		font-weight: bold;
		letter-spacing: 5px;
		color: white;
		border-radius: 18px;
		cursor: pointer;
	}

	.blog-submit:hover {
		background-color: rgba(240,24,32,0.8);
	}
	
</style>