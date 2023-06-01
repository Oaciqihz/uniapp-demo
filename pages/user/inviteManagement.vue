<template>
	<view class="bigbox">
		<view class="top" :style="{backgroundImage:'url(../../static/w8@2x.png)'}">
			<view class="mo1">
				<view class="mo2_l">
					<p class="p1">{{$t('totalreve')}}</p>
					<p class="p2">200.00</p>
				</view>
				<view class="mo1_btn">
					佣金明细
				</view>
			</view>
			<view class="mo2">
				<view class="mo2_box">
					<p class="p1">佣金总收入:</p>
					<p class="p2">200.00</p>
				</view>
				<view class="mo2_box">
					<p class="p1">佣金总收入:</p>
					<p class="p2">200.00</p>
				</view>
				<view class="mo2_box">
					<p class="p1">佣金总收入:</p>
					<p class="p2">200.00</p>
				</view>
			</view>
		</view>

		<view class="cj" @click="point()">
			{{$t('Pointlottery')}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods: {
			point() {
				uni.navigateTo({
					url:'/pages/user/Pointlottery'
				})
			}
		}
	}
</script>

<style lang="scss">
	.cj {
		position: fixed;
		bottom: 76rpx;
		width: 700rpx;
		left: 50%;
		margin-left: -350rpx;
		height: 80rpx;
		background: #FF5152;
		box-shadow: 0rpx 12rpx 28rpx 0rpx rgba(255, 0, 0, 0.2);
		border-radius: 80rpx 80rpx 80rpx 80rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 28rpx;
		font-weight: 400;
		color: #FFFFFF;
	}

	.top {
		.mo2 {
			width: 90%;
			height: 45%;
			display: flex;
			margin: 0 auto;
			align-items: center;
			justify-content: space-between;

			.mo2_box {
				display: flex;
				color: #FFFFFF;
				flex-direction: column;

				.p1 {
					font-size: 24rpx;
				}

				.p2 {
					font-size: 32rpx;
					margin-top: 12rpx;
				}
			}
		}

		.mo1 {
			margin: 0 auto;
			width: 90%;
			height: 55%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			border-bottom: 1px solid rgba(255, 255, 255, 0.3);

			.mo2_l {
				display: flex;
				color: #FFFFFF;
				flex-direction: column;

				.p1 {
					font-size: 24rpx;
				}

				.p2 {
					font-size: 48rpx;
					margin-top: 12rpx;
				}
			}

			.mo1_btn {
				width: 160rpx;
				height: 50rpx;
				background: linear-gradient(124deg, #FFFFFF 0%, #FFAEAE 100%);
				border-radius: 58rpx 58rpx 58rpx 58rpx;
				font-weight: 400;
				color: #FF5152;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 24rpx;
			}
		}

		width: 90%;
		height: 300rpx;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		background-size: cover;
		margin: 0 auto;
		border-radius: 20rpx;
	}

	.bigbox {
		width: 750rpx;
		min-height: 80vh;
		padding-top: 20rpx;
		background-color: #f8f8f8;
	}
</style>