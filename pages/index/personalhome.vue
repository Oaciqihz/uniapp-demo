<template>
	<view>
		<view class="top">
			<view class="user">
				<u--image :showLoading="true" :src="src" width="132rpx" height="132rpx" shape='circle'></u--image>
				<view class="userbox">
					<p class="phpne">123****1234</p>
					<p class="name">{{$t('dream')}}：60</p>
					<p class="ex">{{$t('exp')}}：20</p>
				</view>
				<view class="btn" @click="junp('/pages/user/recharge')">
					云购新手
				</view>
			</view>
			<view class="tabs">
				<view :class="[{'ctabs_item':tabs_index==0},'tabs_item']" @click="tabs(0)">
					{{$t('history')}}
				</view>
				<view :class="[{'ctabs_item':tabs_index==1},'tabs_item']" @click="tabs(1)">
					{{$t('obgoods')}}
				</view>
				<view :class="[{'ctabs_item':tabs_index==2},'tabs_item']" @click="tabs(2)">
					{{$t('Sunbathing')}}
				</view>
			</view>
		</view>
		<view class="box" v-for="(item,index) in 10">
			<view class="imgbox">
				<u--image :showLoading="true" :src="src" radius='6' width="180rpx" height="180rpx"></u--image>
			</view>
			<view class="nr">
				<p class="title">标题标题标题标题标题标题标题标题标题标题</p>
				<p class="Value">{{$t('Value')}}：<span>￥3.00</span></p>
				<p class="luck">{{$t('LuckyPerson2')}}：<span>123****1234</span></p>
				<p class="lucks">{{$t('luck')}}：<span>10000001</span></p>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabs_index: 0
			};
		},
		onLoad(e) {
			
		},
		methods: {
			tabs(e) {
				this.tabs_index = e
			}
		}
	}
</script>

<style lang="scss">
	.box {

		.nr {
			flex: 0.95;
			height: 100%;
			display: flex;
			flex-direction: column;

			.Value {
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;
				margin-top: 10rpx;
			}

			.lucks {
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;

				span {
					color: #FF5152;
				}
			}

			.luck {
				font-size: 24rpx;
				font-weight: 400;
				color: #666666;

				span {
					color: #5BB6EA;
				}
			}

			.title {
				height: 80rpx;
				font-size: 28rpx;
				font-weight: 400;
				color: #333333;
				line-height: 38rpx;
				word-break: break-all;
				display: -webkit-box;
				-webkit-line-clamp: 2;
				-webkit-box-orient: vertical;
				overflow: hidden;
			}
		}

		.imgbox {
			width: 180rpx;
			height: 180rpx;
			box-shadow: 0rpx 8rpx 24rpx 0rpx rgba(0, 0, 0, 0.14);
			border-radius: 12rpx 12rpx 12rpx 12rpx;
			position: relative;
			overflow: hidden;
		}

		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 20rpx;
		margin: 0 auto;
		margin-bottom: 20rpx;
		width: 90%;
		height: 220rpx;
		background: #FFFFFF;
		border-radius: 20rpx 20rpx 20rpx 20rpx;
	}

	.top {
		.user {
			padding-top: 46rpx;
			width: 90%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: space-between;

			.userbox {
				display: flex;
				flex-direction: column;
				width: 350rpx;

				.phpne {
					font-size: 32rpx;
					font-weight: 500;
					color: #333333;
					margin-bottom: 10rpx;
				}

				.name {
					font-weight: 400;
					color: #666666;
					font-size: 24rpx;
				}

				.ex {
					font-weight: 400;
					color: #666666;
					font-size: 24rpx;
				}
			}

			.btn {

				height: 50rpx;
				line-height: 50rpx;
				font-size: 24rpx;
				background: #5bb6ea;
				border-radius: 0rpx 58rpx 58rpx 58rpx;
				text-align: center;
				font-weight: 400;
				color: #FFFFFF;
				padding: 0 20rpx;
			}
		}

		.tabs {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			margin-top: 30rpx;
			
			.tabs_item {
				position: relative;
				width: 30%;
				height: 100rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 28rpx;
				color: #666666;
				line-height: 33rpx;
			}
			.ctabs_item{
				color: #FF5152;
			}
			.ctabs_item::before{
				content: '';
				width: 86rpx;
				height: 0rpx;
				opacity: 1;
				border: 4rpx solid #FF5152;
				position: absolute;
				left: 50%;
				bottom: 10rpx;
				border-radius: 10rpx;
				margin-left: -43rpx;
			}
		}

		margin-bottom: 36rpx;
		width: 750rpx;
		height: 342rpx;
		background: #FFFFFF;
		box-shadow: 0rpx 4rpx 20rpx 0rpx rgba(0, 0, 0, 0.1);
		border-radius: 0rpx 0rpx 40rpx 40rpx;
	}
</style>