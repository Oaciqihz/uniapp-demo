<template>
	<view>
		<view class="top" @click="junp('/pages/user/history')">
			{{$t('History')}}
		</view>
		<view class="num">
			<p class="p1">{{$t('Balance')}}</p>
			<p class="p2">￥0.00</p>
		</view>
		<p class="title">{{$t('Recharge')}}</p>
		<view class="recharge_box">
			<view class="box" v-for="(item,index) in list">
				￥<span>{{item}}</span>
			</view>
			<view class="box">
				<input type="text" :placeholder="$t('Enter')">
			</view>
		</view>
		<view class="footer">
			<view class="btns">
				{{$t('qrcz')}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [10, 20, 30, 100, 200]
			};
		},
		methods:{
			junp(e){
				uni.navigateTo({
					url:e
				})
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
		justify-content: space-evenly;
		position: fixed;
		left: 0;
		bottom: 0;
		box-shadow: 0rpx -4rpx 12rpx 0rpx rgba(0, 0, 0, 0.06);

		.btns {
			width: 70%;
			height: 92rpx;
			background: #FF5152;
			border-radius: 96rpx 96rpx 96rpx 96rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 28rpx;
			color: #FFFFFF;
			line-height: 33rpx;
		}
	}

	.recharge_box {
		width: 90%;
		margin: 0 auto;
		margin-top: 20rpx;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;

		.box {
			width: 31%;
			margin-bottom: 23rpx;
			height: 100rpx;
			background: #FFFFFF;
			border-radius: 8rpx 8rpx 8rpx 8rpx;
			border: 2rpx solid #EEEEEE;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 24rpx;

			input {
				width: 80%;
				font-size: 28rpx;
			}

			span {
				font-size: 36rpx;
				color: #333333;
				font-weight: bold;
			}
		}
	}

	.title {
		width: 90%;
		margin: 0 auto;
		margin-top: 36rpx;
		box-sizing: border-box;
		padding-left: 15rpx;
		border-left: 4 rpx solid #FF5152;
		font-weight: 600;
		color: #333333;
		line-height: 38rpx;
		font-size: 32rpx;

	}

	.num {
		width: 90%;
		margin: 0 auto;
		margin-top: 28rpx;
		height: 192rpx;
		background: linear-gradient(90deg, #FF7677 0%, #FF5152 100%);
		border-radius: 12rpx 48rpx 12rpx 12rpx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		box-sizing: border-box;
		padding: 0 48rpx;


		.p1 {
			font-weight: 400;
			color: #FFFFFF;
			line-height: 33rpx;
			font-size: 28rpx;
			margin-bottom: 10rpx;
		}

		.p2 {
			font-weight: 600;
			color: #FFFFFF;
			line-height: 56rpx;
			font-size: 48rpx;
		}
	}

	.top {
		width: 90%;
		margin: 0 auto;
		margin-top: 10rpx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		font-weight: 400;
		color: #666666;
		line-height: 33rpx;
		font-size: 28rpx;
	}
</style>