<template>
	<div id="blog-container">
		<div class="blog-information">
			<div class="blog-title">
				<div class="info-text">文章标题</div>
				<input class="input-title" type="text" placeholder="输入文章标题" />
			</div>
			<div class="blog-select blog-classify">
				<div class="info-text">所属分类</div>
				<select>
					<option>入门学习</option>
					<option>经验分享</option>
					<option>开源项目</option>
				</select>
			</div>
			<div class="blog-select blog-type">
				<div class="info-text">技术分类</div>
				<select>
					<option>Html</option>
					<option>Css</option>
					<option>Javascript</option>
					<option>Webpack</option>
					<option>其它</option>
				</select>
			</div>
		</div>
		<div id="editor">
			<!-- <mavon-editor :toolbars="toolbars" :ishljs="true" style="100%"></mavon-editor> -->
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
	// import {mavonEditor} from 'mavon-editor'
	// import 'mavon-editor/dist/css/index.css'
	import 'quill/dist/quill.core.css'
	import 'quill/dist/quill.snow.css'
	import 'quill/dist/quill.bubble.css'
	import {quillEditor} from 'vue-quill-editor'
	// var toolbarOptions = ['bold','italic','underline','strike'];
	// var quill = new Quill('#editor',{
	// 	modules: {
	// 		toolbars: toobarOptions
	// 	}
	// });
	export default {
		// name: 'editor',
		// components: {
		// 	mavonEditor
		// },
		components: {
			quillEditor,
		},
		data() {
			return {
				msg: 'hello blogWrite!',
				content: '<h2>Getting start!</h2>',
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
		height: 1000px;
		border: none;
		font-size: 20px;
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
	}

	.info-text {
		display: inline-block;
		font-size: 20px;
		font-weight: bold;
		height: 40px;
		line-height: 40px;
	}

	.input-title {
		height: 38px;
		width: 410px;
		margin-left: 5px;
		border: 1px solid #d9d9d9;
		border-radius: 5px;
	}

	input:focus {
		border: 1px solid #6dc5f7;
	}

/*	input:hover {
		border: 1px solid #7d8183;
	}*/

	select:focus {
		border: 1px solid #6dc5f7;
	}

/*	select:hover {
		border: 1px solid #7d8183;
	}*/

	.blog-select {
		display: inline-block;
		margin-left: 20px;
		/*width: 100px;*/
	}

	.blog-classify {
		margin-left: 210px;
	}

	select {
		border: 1px solid #d9d9d9;
		border-radius: 5px;
		height: 38px;
		cursor: pointer;
	}

	.blog-submit {
		margin: 0 auto;
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