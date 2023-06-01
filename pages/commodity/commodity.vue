<template>
	<view class="content">
		<view class="top">

		</view>
		<!-- 顶部tbas -->
		<scroll-view scroll-x="true" class="classification">
			<view class="classbox">
				<view @click="tabs(item,index)" :class="[{'boxs':class_index==index},'box']"
					v-for="(item,index) in $t('index.classification')">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<!-- 分类 -->
		<view class="mo_class">
			<view class="yc" v-if="yc_type">
				<view class="zw"></view>
				<view class="yc_list">
					<view class="yc_list_box" v-for="(item,index) in category" @click="yc_click(index)">
						{{item.name}}
					</view>
				</view>
			</view>
			<view class="center">
				<p @click="mo_change(item,index)" v-for="(item,index) in $t('commodity.mo_class')"
					:class="[{'cli': mo_index ==index},'name']">
					{{item}}
					<view class="san" v-if="index == 3">
						<image src="https://www.zhahuodi.com/uploads/20230512/53973dc734813dbb84fd434ced071b18.png"
							mode="widthFix"></image>
						<image src="https://www.zhahuodi.com/uploads/20230512/0f69034dad4b049c85441fc7b2dbdc49.png"
							mode="widthFix"></image>
					</view>

					<view class="san saa" v-if="index == 4">
						<image src="https://www.zhahuodi.com/uploads/20230512/0f69034dad4b049c85441fc7b2dbdc49.png"
							mode="widthFix"></image>
					</view>
				</p>
			</view>
		</view>
		<!-- 所有商品 -->
		<view class="mo1">
			<view class="mo1_box" v-for="(item,index) in list" @click="prodect(item)">
				<view class="mo1_imgbox">
					<u--image :showLoading="true" :src="getSrc(item.thumb)" width="236rpx" height="252rpx"></u--image>
				</view>
				<view class="mo1_nr">
					<view class="title">{{item.title}}</view>
					<view class="jd">
						<u-line-progress :percentage="((item.canyurenshu/item.zongrenshu)*100).toFixed(2)"
							:showText='false' :striped="true" height='8rpx' active-color="#ff5152"></u-line-progress>
					</view>
					<view class="nr">
						<p><span class="sp">{{item.canyurenshu}}</span> {{$t('commodity.participated')}}</p>
						<p><span class="sps">{{item.zongrenshu-item.canyurenshu}}</span> {{$t('commodity.remaining')}}
						</p>
					</view>
					<view class="num">
						<p class="num_p">{{$t('totaldemand')}} <span>{{item.zongrenshu}}</span>
							{{$t('commodity.times')}}
						</p>
						<view class="mo1_btn">
							<image src="../../static/q50@2x.png" mode="widthFix"></image>
							{{$t('commodity.bay')}}
						</view>
					</view>

				</view>

			</view>
		</view>
	</view>
</template>

<script>
	import {
		glistajax
	} from '@/api/all.js'
	export default {
		data() {
			return {
				rtl: '',
				src: '',
				class_index: 1,
				mo_class: ['即将揭晓', '人气', '最新', '价格', '商品分类'],
				mo_index: 0,
				list: [],
				category: [],
				yc_type: false,
				pages: 1,
				mo_index_type: true
			};
		},
		onShow() {

		},
		onLoad() {
			var i = this.$i18n.locale
			var m = ''
			if (this.mo_index == 0) {
				m = 10
			} else if (this.mo_index == 1) {
				m = 20
			} else if (this.mo_index == 2) {
				m = 40
			} else if (this.mo_index == 3) {
				m = 50
			}
			var url = 'list/' + m + '/' + this.pages
			glistajax(i, url).then(res => {
				this.category = res.data.data.category
				this.list = res.data.data.shoplist
			})
		},
		onReachBottom() {
			this.pages += 1
			var i = this.$i18n.locale
			var m = ''
			if (this.mo_index == 0) {
				m = 10
			} else if (this.mo_index == 1) {
				m = 20
			} else if (this.mo_index == 2) {
				m = 40
			} else if (this.mo_index == 3) {
				if (this.mo_index_type) {
					m = 50
				} else {
					m = 60
				}
			}
			var url = 'list/' + m + '/' + this.pages
			glistajax(i, url).then(res => {
				res.data.data.shoplist.forEach((e, i) => {
					this.list.push(e)
				})
			})
		},
		methods: {
			prodect(e){
				uni.navigateTo({
					url:'/pages/index/product?id='+e.id+'&sid='+e.sid
				})
			},
			yc_click(e) {
				this.yc_type = false
				this.mo_index = 4
				this.pages = 1
				var i = this.$i18n.locale
				var url = 'list/' + e.cateid + '/' + this.pages
				glistajax(i, url).then(res => {
					this.list = res.data.data.shoplist
				})
			},
			mo_change(e, i) {
				this.pages = 1

				if (i == 4) {
					
					if (this.yc_type) {
						this.yc_type = false
					} else {
						this.yc_type = true
					}
				} else {
					this.mo_index = i
					var i = this.$i18n.locale
					var m = ''
					if (this.mo_index == 0) {
						m = 10
					} else if (this.mo_index == 1) {
						m = 20
					} else if (this.mo_index == 2) {
						m = 40
					} else if (this.mo_index == 3) {
						if (this.mo_index_type) {
							m = 50
						} else {
							m = 60
						}
						this.mo_index_type = !this.mo_index_type
					}
					var url = 'list/' + m + '/' + this.pages
					glistajax(i, url).then(res => {
						this.list = res.data.data.shoplist
						
					})
				}

			},
			tabs(e, i) {
				console.log(e, i);
				if (i == 0) {
					uni.switchTab({
						url: '/pages/index/index'
					})
				}
			},
		}
	}
</script>

<style lang="scss">
	.content {
		.top {
			width: 750rpx;
			height: 88rpx;
			position: relative;

			.locale {
				width: 100rpx;
				height: 88rpx;
				position: absolute;
				right: 0;
				top: 0;
				display: flex;
				align-items: center;
				// background-color: sk;
				justify-content: center;
			}
		}

		.classification {
			width: 750rpx;
			height: 88rpx;

			.classbox {
				display: flex;
				align-items: center;
				padding-left: 38rpx;

				.box {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-right: 16rpx;
					background-color: #eeeeee;
					padding: 0 32rpx;
					color: #666666;
					height: 58rpx;
					line-height: 28rpx;
					flex-shrink: 0;
					font-weight: 400;
					border-radius: 40rpx;
				}

				.boxs {
					background: #FF5152;
					color: white;
				}
			}
		}

		.mo1 {
			width: 90%;
			margin: 0 auto;

			.mo1_box {
				width: 100%;
				height: 316rpx;
				border-bottom: 2rpx solid #EEEEEE;
				display: flex;
				align-items: center;
				position: relative;
				justify-content: space-between;


				.mo1_imgbox {
					box-shadow: 0rpx 8rpx 24rpx 0rpx rgba(0, 0, 0, 0.14);
					width: 236rpx;
					height: 252rpx;
					border-radius: 12rpx 12rpx 12rpx 12rpx;
					border: 2rpx solid #EEEEEE;
					overflow: hidden;
				}

				.mo1_nr {
					width: 60%;
					// margin-left: 20rpx;

					display: flex;
					flex-direction: column;
					overflow: hidden;

					.jd {
						width: 100%;
						margin-top: 16rpx;
					}

					.num {
						margin-top: 46rpx;
						font-size: 20rpx;
						display: flex;
						justify-content: space-between;

						.num_p {
							span {
								color: #FF5152;
								margin: 0 5rpx;
							}
						}

						.mo1_btn {
							padding: 0 20rpx;
							// width: 112rpx;
							height: 44rpx;
							background: #FF5152;
							border-radius: 22rpx 22rpx 22rpx 22rpx;
							display: flex;
							align-items: center;
							justify-content: center;
							color: #FFFFFF;
							font-size: 24rpx;

							image {
								width: 36rpx;
								height: auto;
							}
						}
					}

					.nr {
						display: flex;
						align-items: center;
						justify-content: space-between;
						font-size: 20rpx;
						font-weight: 400;
						color: #666666;
						margin-top: 8rpx;

						.sp {
							color: #FF5152;
							margin: 0 5rpx;
						}

						.sps {
							color: #5BB6EA;
							margin: 0 5rpx;
						}
					}

					.title {
						font-weight: bold;
						width: 430rpx;
						font-size: 32rpx;
						line-height: 38rpx;
						word-break: break-all;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						overflow: hidden;
					}
				}
			}
		}

		.mo_class {
			width: 750rpx;
			height: 100rpx;
			background: linear-gradient(180deg, #FFF1F1 0%, rgba(255, 248, 248, 0.37) 100%);
			border-radius: 40rpx 40rpx 0rpx 0rpx;
			color: #FF5152;
			line-height: 28rpx;
			font-size: 24rpx;
			position: relative;

			.yc {
				position: absolute;
				width: 750rpx;
				top: 100rpx;
				left: 0;
				z-index: 50;
				display: flex;
				justify-content: space-between;

				.zw {
					width: 450rpx;
					height: 1;
				}

				.yc_list {
					border: 1px solid #eeeeee;
					width: 300rpx;
					background-color: white;
					display: flex;
					align-items: center;
					flex-direction: column;

					.yc_list_box {
						width: 300rpx;
						height: 80rpx;
						border-bottom: 1rpx solid #eeeeee;
						font-size: 25rpx;
						box-sizing: border-box;
						display: flex;
						align-items: center;
						padding-left: 50rpx;
					}
				}
			}

			.center {
				height: 100rpx;
				width: 90%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;

				.name {
					display: flex;
					height: 100%;
					text-align: center;
					line-height: 100rpx;
					position: relative;

					.san {

						margin-left: 5rpx;
						margin-top: 4rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						flex-direction: column;
						height: 100rpx;

						image {
							width: 7px;
							margin: 2rpx 0;
							height: auto;
						}
					}

					.saa {

						image {
							margin-top: 6rpx;
							width: 7px;
							height: auto;
						}
					}
				}

				.cli {
					color: #FF5152;
				}

				.cli::before {
					content: '';
					width: 86rpx;
					height: 0rpx;
					position: absolute;
					left: 50%;
					bottom: 10rpx;
					margin-left: -43rpx;
					border: 3rpx solid #FF5152;
					border-radius: 4px;
				}
			}
		}
	}
</style>