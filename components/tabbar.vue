<template>

	<view class="tabbar">
		<view class="tab" @click="junp(0)">
			<view class="imgbox">
				<image v-if="index == 0" src="../static/index1s.png" mode="widthFix"></image>
				<image v-else src="../static/index1.png" mode="widthFix"></image>
			</view>
			<view :class="[{'swhop':index == 0},'p']">
				{{$t('tabbar')[0]}}
			</view>
		</view>

		<view class="tab" @click="junp(1)">
			<view class="imgbox">
				<image v-if="index == 1" src="../static/index2s.png" mode="widthFix"></image>
				<image v-else src="../static/index2.png" mode="widthFix"></image>
			</view>

			<view :class="[{'swhop':index == 1},'p']">
				{{$t('tabbar')[1]}}
			</view>
		</view>

		<view class="tab" id="" @click="junp(2)">
			<view class="imgbox">
				<image v-if="index == 2" src="../static/index3s.png" mode="widthFix"></image>
				<image v-else src="../static/index3.png" mode="widthFix"></image>
			</view>

			<view :class="[{'swhop':index == 2},'p']">
				{{$t('tabbar')[2]}}
			</view>
		</view>

		<view class="tab" @click="junp(3)">
			<view class="imgbox">
				<image v-if="index == 3" src="../static/index4s.png" mode="widthFix"></image>
				<image v-else src="../static/index4.png" mode="widthFix"></image>
			</view>

			<view :class="[{'swhop':index == 3},'p']">
				{{$t('tabbar')[3]}}
			</view>
		</view>

		<view class="tab" @click="junp(4)">
			<view class="imgbox">
				<image v-if="index == 4" src="../static/index5s.png" mode="widthFix"></image>
				<image v-else src="../static/index5.png" mode="widthFix"></image>
			</view>
			<view :class="[{'swhop':index==4},'p']">
				{{$t('tabbar')[4]}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "tabbar",
		props: {
			index: {
				type: Number, //检测数据类型
				default: 0, //默认值
				required: true //是否为必填项
			},
		},
		data() {
			return {};
		},
		methods: {
			isJSON(str) {
				if (typeof str == 'string') {
					try {
						var obj = JSON.parse(str);
						if (typeof obj == 'object' && obj) {
							return true;
						} else {
							return false;
						}
					} catch (e) {
						return false;
					}
				}
			},
			junp(i) {
				var that = this
				if (i == 0) {
					uni.switchTab({
						url: "/pages/index/index"
					})
				} else if (i == 1) {
					uni.switchTab({
						url: "/pages/commodity/commodity"
					})
				} else if (i == 2) {
					uni.switchTab({
						url: "/pages/news/news"
					})
				} else if (i == 3) {
					uni.switchTab({
						url: "/pages/shoppingCar/shoppingCar"
					})
				} else if (i == 4) {
					uni.switchTab({
						url: "/pages/user/user"
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.tabbar {
		// border-top: 1px solid black;
		width: 750rpx;
		height: 43px;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: white;
		z-index: 9999;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		flex-direction: row;

		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom);
		box-sizing: content-box;



		.k {
			width: 40%;
		}



		.tab {
			width: 14%;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			font-size: 9px;

			.p {
				height: 15px;
				font-size: 9px;
				color: #BABABA;
				margin-top: 5px;
			}

			.swhop {
				color: black;
			}

			.cont {
				width: 32px;
				height: auto;
			}

			.imgbox {
				width: 20px;
				height: 20px;
			}

			image {
				width: 20px;
				height: auto;
			}

		}

		.cont_tab {
			.p {
				font-size: 9px;
				color: #BABABA;
				margin-top: -2px;
			}

			image {
				margin-top: -3px;
			}
		}
	}
</style>