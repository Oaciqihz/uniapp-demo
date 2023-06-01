<template>
	<view class="content">

		<!-- top -->
		<view class="top">
			<view class="locale" @click="locale()">
				{{$t('index.locale')}}
			</view>
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
		<!-- 轮播图 -->
		<swiper :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(e,i) in shop_ad">
				<u--image :showLoading="true" :src="getSrc(e.img)" width="750rpx" height="300rpx"></u--image>
			</swiper-item>
		</swiper>
		<!-- 最新揭晓 -->
		<view class="mo2">
			<view class="mo2_title">
				<p>{{$t('index.mo1')}}</p>
				<image :src="$t('image.arrowRightward')" mode="widthFix"></image>
			</view>
			<scroll-view scroll-x="true" class="mo2_scroll">
				<view class="mo2_nr">
					<u-skeleton rows="2" :title='false' :rowsWidth="['216rpx','216rpx']" :rowsHeight="['216rpx','42rpx']" :loading="loading"></u-skeleton>
					<u-skeleton rows="2" :title='false' :rowsWidth="['216rpx','216rpx']" :rowsHeight="['216rpx','42rpx']" :loading="loading"></u-skeleton>
					<u-skeleton rows="2" :title='false' :rowsWidth="['216rpx','216rpx']" :rowsHeight="['216rpx','42rpx']" :loading="loading"></u-skeleton>
					<view class="mo2_box" v-for="(item,index) in shopqishu" @click="junp('/pages/index/revealing')">
						<view class="mo2_imgbox">
							<u--image :showLoading="true" :src="getSrc(item.thumb)" width="216rpx"
								height="216rpx"></u--image>
						</view>
						<view class="mo2_name">
							{{item.title}}
						</view>
						<view class="mo2_tips">
							<p>{{$t('index.Win')}}</p>
							<!-- <view class="adr" v-if="item.q_user.username.length!=0">{{item.q_user.username}}</view>
							<span v-else>{{item.q_user.mobile}}</span> -->
							<span v-if="item.q_user.username.length!=0">{{item.q_user.username}}</span>
							<span v-else>{{mobiile(item.q_user.mobile)}}</span>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
		<!-- 最新奖品 -->
		<view class="mo2">
			<view class="mo2_title">
				<p>{{$t('index.mo2')}}</p>
				<image :src="$t('image.arrowRightward')" mode="widthFix"></image>
			</view>
			<view class="mo3">
				<view class="mo3_nr" v-for="(item,index) in shoplistrenqi" @click="junp('/pages/index/product?id='+item.id+'&sid='+item.sid)">

					<view class="mo3_imgbox">
						<u--image :showLoading="true" :src="getSrc(item.thumb)" width="236rpx"
							height="236rpx"></u--image>
					</view>
					<view class="mo3_nr_box">
						<p class="mo3_name">{{item.title}}</p>
						<p class="mo3_jd">{{$t('index.progress')}} <span> {{((item.canyurenshu/item.zongrenshu)*100).toFixed(2)}}%</span></p>
						<view class="mo3_jd_box">
							<u-line-progress :percentage="((item.canyurenshu/item.zongrenshu)*100).toFixed(2)" :showText='false' :striped="true" height='8rpx'
								active-color="#ff5152"></u-line-progress>

						</view>
						<view class="btnbox">
							<view class="mo3_btn">
								{{$t('index.join')}}
							</view>
						</view>
					</view>

				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		init
	} from '@/api/all.js'
	export default {
		data() {
			return {
				loading: true,
				percent: 10,
				title: 'Hello',
				rtl: '',
				lan: '',
				class_index: 0,
				src: '',
				swiper_data: [{
						url: ''
					},
					{
						url: ''
					}
				],
				shoplistrenqi: [], // 最新奖品
				shopqishu: [], // 最新揭晓
				shop_ad: [] // 轮播图
			}
		},
		onShow() {

		},
		onLoad() {
			var i = this.$i18n.locale
			init(i).then(res => {
				// 轮播图
				this.shop_ad = res.data.data.shop_ad
				// 最新揭晓
				this.shopqishu = res.data.data.shopqishu
				// 最新奖品
				this.shoplistrenqi = res.data.data.shoplistrenqi
				this.loading = false
				console.log(this.loading);
			})
		},
		methods: {
			mobiile(e) {
				var i = ''
				i += e.slice(0, 3)
				i += '****'
				i += e.slice(7, 12)
				return i
			},
			junp(e) {
				uni.navigateTo({
					url: e
				})
			},
			tabs(e, i) {
				if (i == 1) {
					uni.switchTab({
						url: '/pages/commodity/commodity'
					})
				} else if (i == 2) {
					uni.switchTab({
						url: '/pages/news/news'
					})
				} else if (i == 3) {
					uni.navigateTo({
						url: '/pages/index/award'
					})
				} else if (i == 4) {
					uni.navigateTo({
						url: '/pages/user/sign'
					})
				}
			},
			locale() {
				var that = this
				var lo = uni.getStorageSync('locale')
				if (lo == 'al') {
					uni.setStorage({
						key: "locale",
						data: 'en',
						success() {
							that.$i18n.locale = 'en'
							uni.setLocale('en');
							document.documentElement.setAttribute("dir", "")
						}
					})
				} else {
					uni.setStorage({
						key: "locale",
						data: 'al',
						success() {
							that.$i18n.locale = 'al'
							uni.setLocale('al');
							document.documentElement.setAttribute("dir", "rtl")
						}
					})
				}
			}
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

		.mo2 {
			margin-top: 44rpx;
			width: 750rpx;

			.mo2_title {
				width: 90%;
				margin: 0 auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
				height: 44rpx;

				p {
					font-weight: 600;
					color: #333333;
					line-height: 38rpx;
					font-size: 32rpx;
				}

				image {
					width: 22px;
					height: auto;
				}
			}

			.mo2_scroll {
				width: 90%;
				margin: 0 auto;
				margin-top: 24rpx;
				height: 326rpx;

				.mo2_nr {
					display: flex;
					align-items: center;

					.mo2_box {
						width: 216rpx;
						height: 326rpx;
						margin-right: 22rpx;
						flex-shrink: 0;

						.mo2_imgbox {
							box-shadow: 0rpx 8rpx 24rpx 0rpx rgba(0, 0, 0, 0.14);
							width: 216rpx;
							height: 216rpx;
							border-radius: 12rpx 12rpx 12rpx 12rpx;
							border: 2rpx solid #EEEEEE;
							overflow: hidden;
						}

						.mo2_name {
							width: 100%;
							color: #333333;
							font-size: 28rpx;
							margin-top: 16rpx;
							line-height: 33rpx;
							word-break: break-all;
							display: -webkit-box;
							-webkit-line-clamp: 1;
							-webkit-box-orient: vertical;
							overflow: hidden;
						}

						.mo2_tips {
							margin-top: 12rpx;
							display: flex;
							align-items: center;

							p {
								font-size: 20rpx;
								color: #FFFFFF;
								display: flex;
								align-items: center;
								justify-content: center;
								padding: 0 10rpx;
								// width: 38rpx;
								height: 30rpx;
								background-color: #00c712;
								border-radius: 0 10px 0 10px;
							}

							span {
								margin: 0 5rpx;
								color: #5BB6EA;
								font-size: 24rpx;

							}
						}
					}
				}
			}

			.mo3 {
				width: 90%;
				margin: 0 auto;
				margin-top: 24rpx;

				.mo3_nr {
					width: 100%;
					height: 268rpx;
					border-bottom: 1px solid #eeeeee;
					display: flex;
					align-items: center;
					position: relative;



					.mo3_imgbox {
						box-shadow: 0rpx 8rpx 24rpx 0rpx rgba(0, 0, 0, 0.14);
						width: 236rpx;
						height: 236rpx;
						overflow: hidden;
						border-radius: 12rpx 12rpx 12rpx 12rpx;
						border: 2rpx solid #EEEEEE;
					}

					.mo3_nr_box {
						display: flex;
						flex-direction: column;
						margin-left: 20rpx;
						margin-right: 20rpx;

						.mo3_name {
							width: 312rpx;
							word-break: break-all;
							display: -webkit-box;
							-webkit-line-clamp: 1;
							-webkit-box-orient: vertical;
							overflow: hidden;
							font-weight: 600;
							color: #333333;
							line-height: 38rpx;
							font-size: 32rpx;
						}

						.mo3_jd {
							span {
								color: #5BB6EA;
							}

							margin-top: 16rpx;
							color: #666666;
							font-size: 24rpx;
						}

						.mo3_jd_box {
							height: 50rpx;
							width: 400rpx;
							margin-top: 8rpx;
						}

						.btnbox {
							width: 100%;
							display: flex;
							align-items: center;
							justify-content: flex-end;
						}

						.mo3_btn {
							// width: 136rpx;
							padding: 0 20rpx;
							height: 50rpx;
							border-radius: 0rpx 40rpx 40rpx 32rpx;
							display: flex;
							align-items: center;
							justify-content: center;
							font-size: 24rpx;
							background-color: #ff5152;
							font-weight: 400;
							color: #FFFFFF;
							line-height: 28rpx;
						}
					}
				}
			}

		}
	}
</style>