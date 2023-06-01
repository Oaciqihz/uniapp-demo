<template>
	<view>
		<!-- 顶部tbas -->
		<scroll-view scroll-x="true" class="classification">
			<view class="classbox">
				<view @click="tabs(item,index)" :class="[{'boxs':class_index==index},'box']" v-for="(item,index) in 10">
					{{$t('di')}}{{10-index}}
				</view>
			</view>
		</scroll-view>
		<!-- 轮播图 -->
		<swiper class="swiper" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item class="item">
				<u--image :showLoading="true" :src="src" width="750rpx" height="560rpx"></u--image>
			</swiper-item>
			<swiper-item>
				<u--image :showLoading="true" :src="src" width="750rpx" height="560rpx"></u--image>
			</swiper-item>
		</swiper>
		<!-- 描述 -->
		<view class="mo1">
			<view class="jg">￥<span>3.00</span></view>
			<view class="zj">
				<image src="../../static/zj.png" mode="widthFix"></image>
				<view class="zi_tips">
					<p>{{$t('di')}}70{{$t('jx')}}...</p>
					<p>{{$t('see')}}</p>
				</view>
			</view>
			<p class="title">标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标</p>
			<view class="brn">{{$t('Published')}}</view>
		</view>
		<!-- 间隔 -->
		<view class="jg_box"></view>
		<!-- 中奖人 -->
		<view class="mo2">
			<view class="mo2_top">
				<view class="mo2_box">
					<view class="imgbox">
						<u--image :showLoading="true" :src="src" width="134rpx" height="134rpx"></u--image>
						<view class="phoen">
							123****1234
						</view>
						<view class="abs">
							<image src="../../static/luckp.png" class="pic"></image>
							<text class="absText">
								{{$t('LuckyPerson')}}
							</text>
						</view>
					</view>
				</view>
				<view class="mo2_box">
					<p class="title">{{$t('total')}}</p>
					<p class="num">3</p>
					<p class="nr">{{$t('Times')}}</p>
				</view>
				<view class="mo2_box">
					<p class="title">{{$t('retime')}}</p>
					<p class="time">2022-02-02</p>
					<p class="times">18:00:00</p>
				</view>
				<view class="mo2_box">
					<p class="title">{{$t('putime')}}</p>
					<p class="time">2022-02-02</p>
					<p class="times">18:00:00</p>
				</view>
			</view>
			<view class="mo2_btn">
				<p class="luck">{{$t('luck')}}：<span>10000001</span></p>
				<view class="mo2button">
					{{$t('Result')}}
				</view>
			</view>
		</view>
		<!-- 间隔 -->
		<view class="jg_box"></view>
		<!-- 评论 -->
		<view class="comment">
			<view class="title">
				{{$t('Comment')}}
				<image :src="$t('image.arrowRightward')" mode="widthFix"></image>
			</view>
			<view class="comment_box" v-for="(item,index) in 2">
				<view class="imgbox"><u--image :showLoading="true" shape='circle' :src="src" width="88rpx"
						height="88rpx"></u--image></view>
				<view class="user">
					<p class="name">银明<span>2022-02-02 18:00</span></p>
					<p class="user_comment">欢迎使用云购系统，请注意字符长度限制请注意字符长度限制</p>
				</view>
			</view>
		</view>
		<!-- 间隔 -->
		<view class="jg_box"></view>
		<!-- 所有夺宝记录 -->
		<view class="history">
			{{$t('history')}}
			<image :src="$t('image.arrowRightward')" mode="widthFix"></image>
		</view>
		<!-- 间隔 -->
		<view class="jg_box"></view>
		<!-- 产品详情 -->
		<view class="rich">
			<rich-text :nodes="rich_text"></rich-text>
		</view>
	</view>
</template>

<script>
	import {
		item,
		goodspost
	} from '@/api/all.js'
	export default {

		data() {
			return {
				src: '',
				class_index: 0,
				rich_text: '',
				category: {},
				gorecode: {},
				gooditem: {},
				shoplist: [],
				shaidan: [],
				picarr:[]
			};
		},
		onLoad(e) {
			var i = this.$i18n.locale
			var a = e.id
			item(i, a).then(res => {
				// this.category = res.data.data.category
				// this.gorecode = res.data.data.gorecode
				// this.shoplist = res.data.data.shoplist
				// this.gooditem = res.data.data.item
				// this.rich_text = res.data.data.item.content
				// this.picarr = res.data.data.item.picarr
				// console.log(this.picarr);
			})
			var b = e.sid
			goodspost(i, b).then(res => {
				this.shaidan = res.data.data.shaidan
			})
		},
		methods: {
			tabs() {

			}
		}
	}
</script>

<style lang="scss">
	.footer {
		width: 750rpx;
		height: 116rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		left: 0;
		bottom: 0;
		box-shadow: 0rpx -2rpx 8rpx 0rpx rgba(0, 0, 0, 0.06);
		background-color: white;

		.le {
			width: 348rpx;
			height: 92rpx;
			font-weight: 400;
			color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
			background: linear-gradient(88deg, #FEC808 0%, #FF9605 100%);
			border-radius: 46rpx 0rpx 0rpx 46rpx;
			font-size: 28rpx;
		}

		.ri {
			width: 348rpx;
			height: 92rpx;
			font-weight: 400;
			color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
			background: linear-gradient(88deg, #fe5c03 0%, #ff5151 100%);
			border-radius: 0 46rpx 46rpx 0;
			font-size: 28rpx;
		}
	}

	.rich {
		width: 750rpx;
		padding-bottom: 150rpx;
		min-height: 300rpx;
	}

	.history {
		margin: 0 auto;
		width: 93%;
		height: 92rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-weight: 600;
		color: #333333;
		font-size: 32rpx;
		line-height: 38rpx;
		border-bottom: 1px solid #F8F8F8;

		image {
			width: 35rpx;
			height: auto;
		}
	}

	.comment {
		width: 750rpx;
		display: flex;
		align-items: center;
		flex-direction: column;


		.comment_box {
			width: 93%;
			height: 168rpx;
			border-bottom: 1px solid #F8F8F8;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.imgbox {
				margin-bottom: 20rpx;
			}

			.user {
				width: 84%;
				display: flex;
				flex-direction: column;

				.user_comment {
					width: 100%;
					font-weight: 400;
					color: #666666;
					font-size: 28rpx;
					margin-top: 24rpx;
					word-break: break-all;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
					overflow: hidden;
				}

				.name {
					display: flex;
					font-size: 28rpx;
					align-items: center;
					justify-content: space-between;
					color: #5BB6EA;
					line-height: 33rpx;

					span {
						font-size: 20rpx;
						font-weight: 400;
						color: #999999;
					}
				}
			}
		}

		.title {
			width: 93%;
			height: 92rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-weight: 600;
			color: #333333;
			font-size: 32rpx;
			line-height: 38rpx;
			border-bottom: 1px solid #F8F8F8;

			image {
				width: 35rpx;
				height: auto;
			}
		}
	}

	.jg_box {
		width: 750rpx;
		height: 20rpx;
		background-color: #f7f7f7;
	}

	.mo2 {
		width: 750rpx;
		height: 258rpx;

		background: #FFFFFF;

		.mo2_top {
			width: 90%;
			margin: 0 auto;
			height: 174rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid #efefef;

			.mo2_box:last-child {
				border: none;
			}

			.mo2_box {
				width: 25%;
				box-sizing: border-box;
				height: 100%;
				border-right: 1px solid #efefef;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				position: relative;

				.imgbox {
					width: 134rpx;
					height: 134rpx;
					position: relative;
					border-radius: 12rpx;
					overflow: hidden;
					.abs {
						position: absolute;
						left: 0;
						top: 0;
						width: 100rpx;
						height: 88rpx;
					
						.pic {
							width: 100rpx;
							height: 88rpx;
						}
					
						.absText {
							position: absolute;
							left: -30rpx;
							top: -30rpx;
							font-size: 17rpx;
							width: 130rpx;
							height: 130rpx;
							display: flex;
							align-items: center;
							justify-content: center;
							color: white;
							transform: rotate(-45deg);
						}
					}
					.phoen {	
						position: absolute;
						left: 0;
						bottom: 0;
						width: 134rpx;
						height: 30rpx;
						display: flex;
						align-items: center;
						justify-content: center;
						font-weight: 400;
						color: #FFFFFF;
						font-size: 18rpx;
						background-color: rgba(0, 0, 0, 0.5);
					}
				}

				.title {
					font-weight: 400;
					color: #333333;
					line-height: 28rpx;
					font-size: 24rpx;
				}

				.num {
					margin: 16rpx 0;
					color: #FF5152;
					font-size: 24rpx;
				}

				.time {
					color: #666666;
					margin: 16rpx 0;
					font-size: 24rpx;
				}

				.times {
					font-size: 20rpx;
					font-weight: 400;
					line-height: 23rpx;
					color: #666666;
				}

				.nr {
					font-size: 20rpx;
					font-weight: 400;
					color: #666666;
					line-height: 23rpx;
				}
			}
		}

		.mo2_btn {
			height: 84rpx;
			width: 90%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 28rpx;
			font-weight: 500;
			color: #333333;

			.luck {
				font-weight: bold;
			}

			.mo2button {
				padding: 0 20rpx;
				height: 44rpx;
				background: #FF5152;
				border-radius: 42rpx 42rpx 42rpx 42rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 20rpx;

				font-weight: 400;
				color: #FFFFFF;
			}

			span {
				color: #FF5152;
			}
		}
	}


	.mo1 {
		width: 750rpx;
		height: 420rpx;
		background: #FFFFFF;
		box-shadow: 0rpx -12rpx 28rpx 0rpx rgba(0, 0, 0, 0.06);
		border-radius: 40rpx 40rpx 0rpx 0rpx;
		box-sizing: border-box;
		padding: 28rpx;

		.brn {
			width: 100%;
			height: 72rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			background: #F9F9F9;
			border-radius: 8rpx 8rpx 8rpx 8rpx;
			margin-top: 20rpx;
			font-size: 28rpx;
		}

		.title {
			width: 100%;
			font-weight: 500;
			color: #333333;
			line-height: 33rpx;
			font-size: 28rpx;
			margin-top: 32rpx;
		}

		.tips {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 10rpx;
			font-weight: 400;
			color: #666666;
			font-size: 24rpx;

			span {
				color: #FF5152;
			}
		}

		.jd_box {
			margin-top: 32rpx;
			width: 100%;
		}

		.zj {
			margin-top: 16rpx;
			width: 100%;
			height: 84rpx;
			position: relative;

			.zi_tips {
				position: absolute;
				width: 634rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				top: 26rpx;
				left: 50%;
				margin-left: -317rpx;
				color: #3A2622;
				font-size: 24rpx;
			}

			image {
				width: 100%;
				height: auto;
			}
		}

		.jg {
			font-size: 24rpx;
			font-weight: bold;
			color: #FF5152;

			span {
				font-size: 52rpx;
			}
		}
	}

	.swiper {
		width: 750rpx;
		height: 560rpx;

		.item {
			width: 750rpx;
			height: 560rpx;
		}
	}

	.classification {
		width: 750rpx;
		height: 88rpx;

		.classbox {
			display: flex;
			align-items: center;
			padding-left: 38rpx;
			// flex-direction: row-reverse;

			.box {
				flex-shrink: 0;
				margin-right: 80rpx;
				position: relative;
				height: 46rpx;
			}

			.boxs {
				color: #FF5152;

			}

			.boxs::before {
				content: '';
				background-color: #FF5152;
				z-index: 10;
				width: 76rpx;
				height: 2px;
				border-radius: 4px;
				position: absolute;
				left: 50%;
				bottom: -10rpx;
				margin-left: -38rpx;
			}
		}
	}
</style>