<template>
	<div id="blog-container">
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
				<a href="javascript:;" class="classify-box classify-box1" @click="showClassifyList">
					<div class="box-text">{{choosebox1}}</div>
					<div class="iconfont">&#xe79b;</div>
					<ul v-bind:class="{classifyBoxShow: isClassifyShow, classifyBoxHidden: isClassifyHidden}">
						<li @click="chooseItem($event)">入门学习</li>
						<li @click="chooseItem($event)">经验分享</li>
						<li @click="chooseItem($event)">开源项目</li>
					</ul>
				</a>
			</div>
			<div class="blog-select blog-type">
				<div class="info-text">技术分类</div>
				<a href="javascript:;" class="classify-box classify-box1">
					<div class="box-text">{{choosebox2}}</div>
					<div class="iconfont">&#xe79b;</div>
					<ul v-bind:class="{classifyBoxShow: isClassifyShow, classifyBoxHidden: isClassifyHidden}">
						<li @click="chooseItem2($event)">Html</li>
						<li @click="chooseItem2($event)">Css</li>
						<li @click="chooseItem2($event)">Javascript</li>
						<li @click="chooseItem2($event)">Webpack</li>
						<li @click="chooseItem2($event)">其它</li>
					</ul>
				</a>
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
				choosebox1: '请选择',
				choosebox2: '请选择',
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
		    showClassifyList() {
		    	this.isClassifyShow = true;
		    	this.isClassifyHidden = false;
		    },
		    chooseItem(e) {
		    	this.choosebox1 = e.target.innerText;
		    	console.log(e.target.innerText);
		    	this.isClassifyHidden = true;
		    	// console.log(e.target.value());
		    	// this.choosebox1 = e.target.value();
		    },
		    chooseItem2(e) {
		    	this.choosebox2 = e.target.innerText;
		    	console.log(e.target.innerText);
		    	this.isClassifyHidden = true;
		    	// console.log(e.target.value());
		    	// this.choosebox1 = e.target.value();
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
		width: 1200px;
		height: 100%;
		font-weight: normal;
		font-family: '宋体';
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

	.classify-box {
		display: inline-block;
		width: 190px;	
		border: 1px solid #d9d9d9;
		transition: 0.8s;
		border-radius: 5px;
		vertical-align: middle;
		height: 42px;
		background: #fff;
		cursor: pointer;
		color: grey;
	}

	.classify-box:hover {
		border: 1px solid #7d8183;
	}

	.classify-box:focus {
		border: 1px solid #6dc5f7!important;
	}

	.classify-box1:focus ul {
		display: block;
		position: relative;
		margin-top: 5px;
		margin-bottom: 5px;
		border:1px solid #d9d9d9;
		transition: 1s;
		box-shadow: #d5d2d2 0px 0px 5px 1px;
		z-index: 999;	
	}

	.classify-box:focus .iconfont {
		transform: rotate(180deg);
	}

	.classify-box2:focus ul {
		display: block;
		margin-top: 5px;
		margin-bottom: 5px;
		border:1px solid #d9d9d9;
		transition: 1s;
		box-shadow: #d5d2d2 0px 0px 5px 1px;
		z-index: 99;	
	}

	.box-text {
		display: inline-block;
		width: 150px;
		height: 40px;
		line-height: 40px;
		text-indent: 15px;
	}

	.iconfont {
		display: inline-block;	
		transition: 0.5s;
	}

	.classifyBoxShow {
		background: #fff;
	}

	.classifyBoxHidden {
		display: none;
	}

	ul {
		display: none;
	}

	li {
		height: 40px;
		line-height: 40px;
		text-indent: 15px;
		z-index: 999;
	}

	h2 {
		z-index: 9;
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