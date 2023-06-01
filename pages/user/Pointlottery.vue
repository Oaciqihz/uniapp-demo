<template>
	<view>
		<view class="box">
			<image class="bopim" src="../../static/Group83@2x.png" mode="widthFix"></image>
			<view class="ge">

			</view>
			<view class="add">
				<image src="../../static/pp4@2x.png" mode="widthFix"></image>
				<p>{{$t('FlipLottery')}}</p>
			</view>
			<p class="tops">{{$t('prize')}}</p>
			<view class="cjbox">
				<view class="cbox">
					{{$t('Flipping')}}
				</view>
				<view class="cbox">
					{{$t('Flipping')}}
				</view>
				<view class="cbox">
					{{$t('Flipping')}}
				</view>
			</view>
			<view class="gz">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.box {
		position: relative;
		.gz{
			width: 90%;
			height: 482rpx;
			background: #FF7B4A;
			border-radius: 24rpx 24rpx 24rpx 24rpx;
			position: relative;
			z-index: 20;
			margin: 0 auto;
			margin-top: 30rpx;
		}
		.cjbox {
			width: 90%;
			height: 304rpx;
			margin: 20rpx auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;
			z-index: 20;

			.cbox {
				font-weight: 400;
				color: #942820;
				font-size: 40rpx;
				width: 30%;
				height: 304rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				box-shadow: 0rpx 8rpx 20rpx 0rpx rgba(0, 0, 0, 0.15);
				background: linear-gradient(180deg, #FFDFAD 0%, #FFC983 100%);
				border-radius: 14rpx 14rpx 14rpx 14rpx;
			}
		}

		.tops {
			font-weight: 400;
			color: #FEF7EC;
			font-size: 24rpx;
			margin-top: 10rpx;
			position: relative;
			z-index: 20;
			text-align: center;
		}

		.bopim {
			position: absolute;
			left: 0;
			top: 0;
			width: 750rpx;
			height: auto;
		}

		.ge {
			padding-top: 478rpx;
		}

		.add {
			width: 50%;
			margin: 0 auto;
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;


			p {
				position: absolute;
				height: 50rpx;
				width: 100%;
				left: 0;
				top: 50%;
				margin-top: -28rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				font-weight: 400;
				line-height: 52rpx;
				color: #DC503F;
				font-size: 44rpx;
			}

			image {
				width: 100%;
				height: auto;
			}
		}
	}
</style>