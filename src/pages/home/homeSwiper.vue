<template>
	<div class="home-swiper">
		<!-- 轮播图组件 -->
		<swiper :options="swiperOption" ref="mySwiper">
			<swiper-slide><img class="swiper-pic" src="./../../assets/image/swiper-pic1.png"/></swiper-slide>
			<swiper-slide><img class="swiper-pic" src="./../../assets/image/swiper-pic2.png"/></swiper-slide>
			<swiper-slide><img class="swiper-pic" src="./../../assets/image/swiper-pic3.png"/></swiper-slide>
			<swiper-slide><img class="swiper-pic" src="./../../assets/image/swiper-pic4.png"/></swiper-slide>
			<swiper-slide><img class="swiper-pic" src="./../../assets/image/swiper-pic5.png"/></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
			<!-- <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div> -->
			<!-- <div class="swiper-button-next swiper-button-white" slot="button-next"></div> -->
		</swiper>	
	</div>
</template>

<script>
	// 在组件内引入轮播图
	import "swiper/dist/css/swiper.css";
	import {swiper, swiperSlide} from "vue-awesome-swiper";
	export default {
		components: {
			swiper,
			swiperSlide
		},	
		data() {
			return {
				// 轮播图功能设置
				swiperOption: {
					loop: true,
					pagination: {
						el: ".swiper-pagination",
						type: 'bullets',
						clickable: true,
						dynamicBullets: false
					},
					speed: 1000,
					autoplay: {
						delay: 3000,
						disableOnInteraction: false
					},
					// effect: 'fade',
					// fadeEffect: {
					// 	crossFade: false
					// },
					effect: 'slide',
					// navigation: {
					// 	nextEl: '.swiper-button-next',
					// 	prevEl: '.swiper-button-prev',
					// }
				}
			}
		},
		computed: {
			swiper(){
				return this.$refs.mySwiper.swiper
			}
		},
		mounted() {
			this.swiper.slideTo(1,2000,false);
		}
	}
</script>

<style type="text/css" scoped>
	.home-swiper {
		margin-top: 105px;
		height: 450px;
	}

	.swiper-pic {
		width: 1200px;
		height: 450px;
	}	
</style>